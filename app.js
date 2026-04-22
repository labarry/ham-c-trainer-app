// 主应用类,类的构造函数
class RadioExamApp {
  constructor() {
    this.config = CONFIG;
    this.questionBank = questionBank;
    this.storage = new StorageManager();
    this.utils = new Utils();
    this.dialog = new CustomDialog();
    
    this.initElements();
    this.initState();
  }
  //初始化DOM元素引用。将HTML页面中的关键元素（如统计数字、题目文本、选项容器、各类按钮等）绑定到 
  //this.el和 this.btn对象上，便于后续JavaScript操作。
  initElements() {
    this.el = {
      total: document.getElementById('total-questions'),
      ans: document.getElementById('answered-questions'),
      cor: document.getElementById('correct-answers'),
      acc: document.getElementById('accuracy-rate'),
      qid: document.getElementById('current-question-position'),
      qtext: document.getElementById('current-question-text'),
      qimg: document.getElementById('question-image-container'),
      opts: document.getElementById('options-container'),
      res: document.getElementById('result-panel'),
      type: document.getElementById('question-type-indicator'),
      timer: document.getElementById('exam-timer'),
      time: document.getElementById('time-remaining'),
      info: document.getElementById('exam-info'),
      card: document.getElementById('question-card'),
      start: document.getElementById('start-exam'),
      submit: document.getElementById('submit-exam'),
      result: document.getElementById('exam-results'),
      // 新增：跳转控件引用
      jumpIconBtn: document.getElementById('jump-icon-btn'),
      jumpPanel: document.getElementById('jump-panel'),
      jumpInput: document.getElementById('jump-input'),
      jumpActionBtn: document.getElementById('jump-action-btn'),
      closeJumpPanel: document.getElementById('close-jump-panel')
    };
    
    this.btn = {
      check: document.getElementById('check-answer'),
      prev: document.getElementById('prev-question'),
      next: document.getElementById('next-question'),
      start: document.getElementById('start-exam'),
      submit: document.getElementById('submit-exam'),
      reset: document.getElementById('reset-all')
    };
  }
  //初始化应用状态。设置当前的题目索引、答题记录、题目列表、练习/考试模式、计时器等核心状态变量的初始值。
  //其中包含了对选项随机顺序映射 (optionOrderMap) 的初始化。
  initState() {
    this.state = {
      curr: 0,
      ans: new Map(),
      qs: [...this.questionBank],
      mode: this.config.MODE,
      exam: 0,
      examQs: [],
      examAns: new Map(),
      examTime: this.config.EXAM.TIME,
      examTimer: null,
      submitted: 0,
      timeWarned: false,
      modeIndices: {
        sequential: 0,
        random: 0,
        incorrect: 0
      },
      // 修改：存储每道题的随机顺序映射
      // key: 题目id_mode, value: {shuffledIndices: [], indexToDisplayLetter: {}, displayLetterToIndex: {}}
      optionOrderMap: new Map()
    };
    
    this.loadState();
  }
  //从本地存储加载状态。读取用户上一次的练习进度（如已答题目、当前模式、题号）和未完成的考试状态，用于恢复学习。
  loadState() {
    const practiceState = this.storage.getPracticeState();
    if (practiceState) {
      this.state.ans = new Map(Object.entries(practiceState.ans || {}));
      this.state.mode = practiceState.mode || this.config.MODE;
    
      if (practiceState.modeIndices) {
        this.state.modeIndices = practiceState.modeIndices;
      }
      
      this.state.curr = this.state.modeIndices[this.state.mode] || 0;
    
      if (practiceState.qs && Array.isArray(practiceState.qs) && practiceState.qs.length > 0) {
        this.state.qs = practiceState.qs;
      }
      
      // 恢复随机选项顺序映射
      if (practiceState.optionOrderMap) {
        this.state.optionOrderMap = new Map(Object.entries(practiceState.optionOrderMap));
      }
    }
    
    const examState = this.storage.getExamState();
    if (examState && examState.active && !examState.sub) {
      this.state.exam = 1;
      this.state.examQs = examState.qs || [];
      this.state.examAns = new Map(Object.entries(examState.ans || {}));
      this.state.examTime = examState.time || this.config.EXAM.TIME;
      this.state.submitted = examState.sub || 0;
      // 恢复考试题目的随机选项顺序映射
      if (examState.optionOrderMap) {
        for (const [key, value] of Object.entries(examState.optionOrderMap)) {
          this.state.optionOrderMap.set(key, value);
        }
      }
    }
  }
  //保存练习状态到本地存储。将用户的答题结果、当前模式、索引、题目列表以及选项随机顺序的映射保存起来，保证刷新页面后状态不丢失。
  savePracticeState() {
    this.state.modeIndices[this.state.mode] = this.state.curr;
    
    this.storage.savePracticeState(
      this.state.ans, 
      this.state.mode, 
      this.state.curr, 
      this.state.qs,
      this.state.modeIndices,
      Object.fromEntries(this.state.optionOrderMap)
    );
  }
  //保存考试状态到本地存储。功能同 savePracticeState，但专门用于保存模拟考试的状态，确保考试中途关闭页面后可以恢复。
  saveExamState() {
    if (!this.state.exam) return;
    
    this.storage.saveExamState({
      active: 1,
      qs: this.state.examQs,
      ans: Object.fromEntries(this.state.examAns),
      time: this.state.examTime,
      sub: this.state.submitted,
      optionOrderMap: Object.fromEntries(this.state.optionOrderMap)
    });
  }
  //应用启动入口。在DOM加载完成后被调用，用于恢复用户上次的练习模式、更新界面、绑定事件。
  //如果检测到有未提交的考试，会弹出对话框询问用户是否继续。
  init() {
    this.restoreMode();
    this.updateUI();
    this.updateStats();
    this.bindEvents();
    
    if (this.state.exam && !this.state.submitted) {
      const remainingTime = this.utils.formatTime(this.state.examTime);
      this.dialog.showConfirm(`检测到您有未完成的模拟考试，剩余时间：${remainingTime}。是否继续考试？`, (confirmed) => {
        if (confirmed) {
          this.state.mode = 'exam';
          this.restoreMode();
          this.updateUI();
          this.startTimer();
          this.utils.showMessage('继续之前的考试');
        } else {
          this.abandonExamAndReset();
        }
      });
    }
  }
  //放弃未完成的考试并重置。在检测到未完成考试并询问用户时，若用户选择“否”，则调用此函数。它会清除考试状态，并恢复到顺序练习模式，且定位到该模式上次保存的题号位置。
  abandonExamAndReset() {
  if (this.state.examTimer) {
    clearInterval(this.state.examTimer);
    this.state.examTimer = null;
  }

  // 获取顺序练习模式的保存索引
  const sequentialIndex = this.state.modeIndices.sequential || 0;
  
  this.state = {
    curr: sequentialIndex, // 使用顺序练习模式保存的索引
    ans: new Map(),
    qs: [...this.questionBank], // 重置为完整题库
    mode: 'sequential', // 明确设置为顺序练习模式
    exam: 0,
    examQs: [],
    examAns: new Map(),
    examTime: this.config.EXAM.TIME,
    examTimer: null,
    submitted: 0,
    timeWarned: false,
    modeIndices: {
      sequential: sequentialIndex, // 保持当前索引
      random: this.state.modeIndices.random || 0,
      incorrect: this.state.modeIndices.incorrect || 0
    },
    optionOrderMap: new Map()
  };

  this.storage.delete(this.config.KEY + '_exam');
  this.restoreMode();
  this.updateUI();
  this.updateStats();
  this.utils.showMessage('已放弃未完成的考试，已切换到顺序练习模式');
}
  //辅助函数，获取模式的中文名称 
  getModeText(mode) {
    const modeMap = {
      'sequential': '顺序练习',
      'random': '随机练习',
      'incorrect': '错题练习',
      'exam': '模拟考试'
    };
    return modeMap[mode] || '练习';
  }
  //辅助函数，恢复模式选择器的UI状态。确保单选按钮的选中状态与当前 this.state.mode一致。
  restoreMode() {
    document.querySelectorAll('input[name="practice-mode"]').forEach(radio => {
      radio.checked = radio.value === this.state.mode;
    });
    
    if (this.state.mode === 'incorrect') {
      this.state.qs = this.getIncorrectQuestions();
    } else if (this.state.mode !== 'exam') {
      this.state.qs = [...this.questionBank];
    }
  }
  //获取所有答错的题目列表。用于“错题练习”模式。
  getIncorrectQuestions() {
    return this.questionBank.filter(q => {
      const a = this.state.ans.get(q.id);
      return a && !a.c;
    });
  }
  //根据当前状态更新整个用户界面。这是最重要的UI控制函数，它会根据当前是“练习中”、“考试中”、“考试结束”还是“查看结果”等不同状态，
  //来显示或隐藏对应的按钮、面板、计时器，并设置相应的文字说明。
  updateUI() {
    const isExam = this.state.exam && !this.state.submitted;
    const isPre = this.state.mode === 'exam' && !this.state.exam;
    const isDone = this.state.exam && this.state.submitted;
    
    document.body.classList.toggle('exam-mode', isExam);
    
    Object.values(this.btn).forEach(btn => btn.style.display = 'none');
    
    this.el.timer.style.display = 'none';
    this.el.info.style.display = 'none';
    
    this.el.card.classList.remove('exam-mode');
    this.el.qid.classList.remove('exam-mode');
    
    if (isExam || isPre || isDone) {
      this.el.jumpIconBtn.style.display = 'none';
      this.el.jumpPanel.style.display = 'none';
    } else {
      this.el.jumpIconBtn.style.display = 'flex';
    }
    
    if (isPre) {
      this.el.card.style.display = 'block';
      this.el.result.style.display = 'none';
      this.btn.start.style.display = 'block';
      this.el.qid.textContent = '考试模式';
      this.el.type.textContent = '';
      this.el.qtext.textContent = '点击"开始考试"按钮开始模拟考试。考试时间：90分钟，共90道题（单选题70，多选题20），答对70题合格。';
      this.el.opts.innerHTML = '';
      this.el.qimg.style.display = 'none';
      this.el.qimg.innerHTML = '';
      this.el.res.style.display = 'none';
    } else if (isExam) {
      this.el.card.style.display = 'block';
      this.el.result.style.display = 'none';
      this.btn.submit.style.display = 'block';
      this.btn.prev.style.display = 'block';
      this.btn.next.style.display = 'block';
      this.el.timer.style.display = 'block';
      this.el.info.style.display = 'block';
      this.el.card.classList.add('exam-mode');
      this.el.qid.classList.add('exam-mode');
      this.showQuestion(this.state.curr);
    } else if (isDone) {
      this.el.card.style.display = 'none';
      this.showExamResult(this.getExamStat());
    } else if (this.state.mode === 'incorrect' && !this.state.qs.length) {
      this.clearQuestion();
      this.btn.reset.style.display = 'block';
    } else {
      this.el.card.style.display = 'block';
      this.el.result.style.display = 'none';
      this.btn.check.style.display = 'block';
      this.btn.prev.style.display = 'block';
      this.btn.next.style.display = 'block';
      this.btn.reset.style.display = 'block';
      this.showQuestion(this.state.curr);
    }
  }
  //显示指定索引的题目。根据传入的索引 idx，更新题目编号、题干、类型，并调用 renderOptions渲染选项，最后恢复用户之前对此题的选择。
  showQuestion(idx) {
    const qs = this.state.exam && !this.state.submitted ? this.state.examQs : this.state.qs;
    
    if (!qs.length) {
      this.clearQuestion();
      return;
    }
    
    if (idx < 0 || idx >= qs.length) {
      idx = 0;
    }
    
    this.state.curr = idx;
    const q = qs[idx];
    
    this.el.qid.textContent = `第 ${idx + 1} 题 / 共 ${qs.length} 题`;
    this.el.type.textContent = q.isMulti ? '[多选题]' : '[单选题]';
    this.el.type.style.color = q.isMulti ? '#d84315' : '#006064';
    this.el.qtext.textContent = q.text;
    
    if (q.image && q.image.trim() !== '') {
      this.el.qimg.style.display = 'block';
      this.el.qimg.innerHTML = `<img src="img/${q.image}" alt="题目附图" class="question-image" onerror="this.style.display='none';">`;
    } else {
      this.el.qimg.style.display = 'none';
      this.el.qimg.innerHTML = '';
    }
    
    this.renderOptions(q);
    this.el.res.style.display = 'none';
    this.restoreSelection(q);
    this.savePracticeState();
  }

  // 渲染（绘制）题目的选项。此函数实现了选项内容随机顺序的核心功能。它会为每道题生成或读取一个随机顺序映射，
  //然后按照映射将选项内容以随机的顺序（但显示字母仍为A、B、C、D）渲染到页面上。
  renderOptions(q) {
    this.el.opts.innerHTML = '';
    
    // 检查是否已有该题的随机顺序映射
    const mapKey = this.state.exam ? `${q.id}_exam` : `${q.id}_${this.state.mode}`;
    let optionMap = this.state.optionOrderMap.get(mapKey);
    
    if (!optionMap) {
      // 生成随机顺序映射
      const indices = Array.from({length: q.options.length}, (_, i) => i);
      const shuffledIndices = this.utils.shuffleArray(indices);
      
      // 创建映射关系
      const indexToDisplayLetter = {};
      const displayLetterToIndex = {};
      
      shuffledIndices.forEach((originalIndex, displayIndex) => {
        const displayLetter = String.fromCharCode(65 + displayIndex); // A, B, C, D...
        indexToDisplayLetter[originalIndex] = displayLetter;
        displayLetterToIndex[displayLetter] = originalIndex;
      });
      
      optionMap = {
        shuffledIndices,
        indexToDisplayLetter,
        displayLetterToIndex
      };
      
      this.state.optionOrderMap.set(mapKey, optionMap);
      
      // 保存状态
      if (this.state.exam && !this.state.submitted) {
        this.saveExamState();
      } else if (!this.state.exam) {
        this.savePracticeState();
      }
    }
    
    // 按显示字母顺序渲染选项
    const displayLetters = ['A', 'B', 'C', 'D'].slice(0, q.options.length);
    
    displayLetters.forEach(displayLetter => {
      const originalIndex = optionMap.displayLetterToIndex[displayLetter];
      const option = q.options[originalIndex];
      
      if (option) {
        const div = document.createElement('div');
        div.className = 'option';
        if (this.state.exam) div.classList.add('exam-mode');
        div.dataset.displayLetter = displayLetter; // 显示的字母 (A, B, C, D)
        div.dataset.originalIndex = originalIndex; // 原始选项索引
        div.innerHTML = `
          <span class="option-letter">${displayLetter}</span>
          <span class="option-text">${option.text}</span>
        `;
        this.el.opts.appendChild(div);
      }
    });
  }
  
  restoreSelection(q) {
  // 仅在考试进行中（未提交）时恢复之前的选择状态
  // 练习模式下，无论是否检查过答案，返回题目时都不自动恢复选择，以便重新练习
    if (this.state.exam && !this.state.submitted) {
      const answer = this.state.examAns.get(q.id);
      if (!answer || !answer.s) return;
    
      // 获取该题的随机顺序映射
      const mapKey = `${q.id}_exam`;
      const optionMap = this.state.optionOrderMap.get(mapKey);
    
      if (!optionMap) return;
    
      // 将原始答案字母映射为显示字母
      const originalLetters = answer.s; // 原始答案字母，如 ['A', 'C']
      const displayLetters = originalLetters.map(originalLetter => {
        const originalIndex = originalLetter.charCodeAt(0) - 65; // A->0, B->1, C->2, D->3
        return optionMap.indexToDisplayLetter[originalIndex];
      });
    
      // 高亮用户选择的选项
      displayLetters.forEach(displayLetter => {
        const option = this.el.opts.querySelector(`[data-display-letter="${displayLetter}"]`);
        if (option) option.classList.add('selected');
      });
    }
  // 练习模式（sequential, random, incorrect）下不执行任何恢复操作
  // 这样当用户返回已做过的题目时，会看到一个"干净"的题目，可以重新练习
  }

  //清空题目显示区域。通常在“错题练习”模式下无错题时调用，显示友好提示。
  clearQuestion() {
    this.el.qid.textContent = '第 0 题 / 共 0 题';
    this.el.type.textContent = '';
    this.el.qtext.textContent = '当前没有错题，请选择其它模式练习！';
    this.el.opts.innerHTML = '';
    this.el.card.style.display = 'block';
    this.el.result.style.display = 'none';
    this.el.res.style.display = 'none';
    this.el.qimg.style.display = 'none';
    this.el.qimg.innerHTML = '';
  }
  //更新顶部的统计信息面板。计算并显示总题数、已答题数、正确题数和正确率。
  updateStats() {
	// 总题数：使用完整C类题库的长度，而非当前模式下的题目列表长度
    const total = this.questionBank.length; 
    //const total = this.state.qs.length;
    const answered = this.state.ans.size;
    const correct = [...this.state.ans.values()].filter(x => x.c).length;
    const accuracy = answered ? Math.round(correct / answered * 100) : 0;
    
    this.el.total.textContent = total;
    this.el.ans.textContent = answered;
    this.el.cor.textContent = correct;
    this.el.acc.textContent = accuracy + '%';
  }
  
  //检查用户答案。在练习模式下，用户点击“检查/显示答案”按钮时触发。获取用户选择，
  //与正确答案比对，记录结果并调用 showResult反馈。
  checkAnswer() {
    if (this.state.exam && !this.state.submitted) {
      this.utils.showMessage('考试模式中，请直接选择答案，系统会自动记录');
      return;
    }
  
    const q = this.state.qs[this.state.curr];
    if (!q) return;
  
    const selected = this.getSelectedOptions(q);
  
    if (selected.length === 0) {
      this.showAnswerOnly(q);
      this.utils.showMessage('正确答案已用绿色高亮显示', 'info');
    } else {
      const isCorrect = this.utils.isSameArray(selected, q.correctAnswers);
      this.state.ans.set(q.id, { s: selected, c: isCorrect });
      this.savePracticeState();
      this.showResult(q, selected, isCorrect);
      this.updateStats();
    }
  }
  //仅显示正确答案。当用户未选择任何选项就直接点击检查时，直接高亮显示正确答案。
  showAnswerOnly(q) {
    this.el.opts.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('selected', 'correct', 'incorrect');
    });
  
    const mapKey = this.state.exam ? `${q.id}_exam` : `${q.id}_${this.state.mode}`;
    const optionMap = this.state.optionOrderMap.get(mapKey);
    
    if (!optionMap) return;
    
    // 将原始正确答案字母映射为显示字母
    const correctDisplayLetters = q.correctAnswers.map(originalLetter => {
      const originalIndex = originalLetter.charCodeAt(0) - 65; // A->0, B->1, C->2, D->3
      return optionMap.indexToDisplayLetter[originalIndex];
    });
    
    correctDisplayLetters.forEach(displayLetter => {
      const option = this.el.opts.querySelector(`[data-display-letter="${displayLetter}"]`);
      if (option) option.classList.add('correct');
    });
  
    this.el.res.innerHTML = ``;
    this.el.res.style.display = 'none';  
  }

  //  获取用户在当前题目中选中的选项。此函数处理了随机选项顺序的映射，它会将界面上用户选中的显示字母（如 ‘B’），
  //通过映射表转换回题目数据中对应的原始字母（如 ‘A’），以便与 correctAnswers正确比对。
  getSelectedOptions(q = null) {
    if (!q) {
      const qs = this.state.exam && !this.state.submitted ? this.state.examQs : this.state.qs;
      q = qs[this.state.curr];
    }
    
    const selectedDisplayLetters = [...this.el.opts.querySelectorAll('.option.selected')]
      .map(opt => opt.dataset.displayLetter);
    
    const mapKey = this.state.exam ? `${q.id}_exam` : `${q.id}_${this.state.mode}`;
    const optionMap = this.state.optionOrderMap.get(mapKey);
    
    if (!optionMap) return [];
    
    // 将显示字母映射回原始字母
    const originalLetters = selectedDisplayLetters.map(displayLetter => {
      const originalIndex = optionMap.displayLetterToIndex[displayLetter];
      return String.fromCharCode(65 + originalIndex); // 0->A, 1->B, 2->C, 3->D
    });
    
    return originalLetters.sort(); // 按字母顺序排序，便于比较
  }
  
  //显示答题结果。根据答案对错，高亮显示正确的选项（绿色）和用户选错的选项（红色），并弹出提示消息
  showResult(q, selected, isCorrect) {
    const correctAnswers = q.correctAnswers;
    
    const mapKey = this.state.exam ? `${q.id}_exam` : `${q.id}_${this.state.mode}`;
    const optionMap = this.state.optionOrderMap.get(mapKey);
    
    if (!optionMap) return;
    
    // 将原始正确答案字母映射为显示字母
    const correctDisplayLetters = correctAnswers.map(originalLetter => {
      const originalIndex = originalLetter.charCodeAt(0) - 65;
      return optionMap.indexToDisplayLetter[originalIndex];
    });
    
    // 将用户选择的原始字母映射为显示字母
    const selectedDisplayLetters = selected.map(originalLetter => {
      const originalIndex = originalLetter.charCodeAt(0) - 65;
      return optionMap.indexToDisplayLetter[originalIndex];
    });
    
    this.el.opts.querySelectorAll('.option').forEach(opt => {
      const displayLetter = opt.dataset.displayLetter;
      opt.classList.remove('correct', 'incorrect');
      
      if (correctDisplayLetters.includes(displayLetter)) {
        opt.classList.add('correct');
      } else if (selectedDisplayLetters.includes(displayLetter)) {
        opt.classList.add('incorrect');
      }
    });
  
    if (isCorrect) {
      this.utils.showMessage(`✓ 回答正确！`, 'success');
    } else {
      this.utils.showMessage(`✗ 回答错误。`, 'error');
    }
    
    this.el.res.style.display = 'none';
    this.el.res.innerHTML = '';
  }
  //重置所有答题记录。弹出确认对话框，清空所有本地存储的答题记录和状态，恢复到初始练习状态。
  resetAll() {
    this.dialog.showConfirm('确定要重置所有答题记录吗？此操作不可撤销。', (confirmed) => {
      if (!confirmed) return;
      
      this.state.ans.clear();
      this.storage.delete(this.config.KEY);
      this.state.curr = 0;
      
      this.state.modeIndices = {
        sequential: 0,
        random: 0,
        incorrect: 0
      };
      
      this.state.optionOrderMap.clear();
      
      if (this.state.mode === 'incorrect') {
        this.state.qs = this.getIncorrectQuestions();
      } else if (this.state.mode === 'random') {
        this.state.qs = [...this.questionBank];
        this.state.qs = this.utils.shuffleArray(this.state.qs);
      } else if (this.state.mode === 'sequential') {
        this.state.qs = [...this.questionBank];
      }
      
      this.updateUI();
      this.updateStats();
      this.utils.showMessage('答题记录已重置');
    });
  }
  
  //生成一个随机题目索引。确保生成的索引与当前索引不同，用于“随机练习”模式。
  _getRandomQuestionIndex() {
    if (!this.state.qs.length) {
      this.utils.showMessage('没有题目可练习！');
      return 0;
    }
    
    let newIdx;
    do {
      newIdx = Math.floor(Math.random() * this.state.qs.length);
    } while (newIdx === this.state.curr && this.state.qs.length > 1);
    return newIdx;
  }
  
  nextIdx() {
    if (this.state.exam && !this.state.submitted) {
      return (this.state.curr + 1) % this.state.examQs.length;
    }
    
    if (this.state.mode === 'incorrect') {
      if (!this.state.qs.length) {
        this.utils.showMessage('没有错题可练习！');
        return 0;
      }
      return (this.state.curr + 1) % this.state.qs.length;
    }
    
    if (this.state.mode === 'random') {
      return this._getRandomQuestionIndex();
    }
    
    return (this.state.curr + 1) % this.state.qs.length;
  }
  
  prevIdx() {
    if (this.state.exam && !this.state.submitted) {
      return (this.state.curr - 1 + this.state.examQs.length) % this.state.examQs.length;
    }
    
    if (this.state.mode === 'incorrect') {
      if (!this.state.qs.length) {
        this.utils.showMessage('没有错题可练习！');
        return 0;
      }
      return (this.state.curr - 1 + this.state.qs.length) % this.state.qs.length;
    }
    
    if (this.state.mode === 'random') {
      return this._getRandomQuestionIndex();
    }
    
    return (this.state.curr - 1 + this.state.qs.length) % this.state.qs.length;
  }
   
  // 处理练习模式切换。当用户点击“顺序练习”、“随机练习”、“错题练习”或“模拟考试”单选按钮时触发。它会保存当前模式的进度，加载新模式的题目列表和进度，并更新界面。
  changeMode() {
    const mode = document.querySelector('input[name="practice-mode"]:checked').value;
    if (mode === this.state.mode) return;
    
    this.state.modeIndices[this.state.mode] = this.state.curr;
    this.state.mode = mode;
    this.el.opts.innerHTML = '';
    this.el.res.style.display = 'none';
    
    if (mode === 'exam') {
      this.state.exam = 0;
      this.state.submitted = 0;
      this.restoreMode();
    } else {
      this.state.exam = 0;
      clearInterval(this.state.examTimer);
      this.state.examTimer = null;
      
      if (mode === 'incorrect') {
        this.state.qs = this.getIncorrectQuestions();
      } else if (mode === 'random') {
        const practiceState = this.storage.getPracticeState();
        if (practiceState && 
            practiceState.mode === 'random' && 
            practiceState.qs && 
            practiceState.qs.length > 0) {
          this.state.qs = practiceState.qs;
        } else {
          this.state.qs = [...this.questionBank];
          this.state.qs = this.utils.shuffleArray(this.state.qs);
        }
      } else {
        this.state.qs = [...this.questionBank];
      }
      
      this.state.curr = this.state.modeIndices[mode] || 0;
      if (this.state.curr >= this.state.qs.length || this.state.qs.length === 0) {
        this.state.curr = 0;
      }
      
      this.savePracticeState();
    }
    
    this.updateUI();
  }
  //开始一场新的模拟考试。从题库中随机抽取指定数量的单选和多选题，打乱顺序，初始化考试状态，生成考试题目的随机选项映射，并启动计时器。
  startExam() {
    if (this.state.exam && !this.state.submitted) {
      this.utils.showMessage('考试已在进行中');
      return;
    }
    
    const singleQuestions = this.questionBank.filter(q => !q.isMulti);
    const multiQuestions = this.questionBank.filter(q => q.isMulti);
    
    if (singleQuestions.length < this.config.EXAM.SINGLE || multiQuestions.length < this.config.EXAM.MULTI) {
      this.utils.showMessage('单选题或多选题数量不足，无法生成考试');
      return;
    }
    
    const examQuestions = [];
    const usedSingle = new Set();
    const usedMulti = new Set();
    
    for (let i = 0; i < this.config.EXAM.SINGLE; i++) {
      let index;
      do {
        index = Math.floor(Math.random() * singleQuestions.length);
      } while (usedSingle.has(index));
      
      examQuestions.push(singleQuestions[index]);
      usedSingle.add(index);
    }
    
    for (let i = 0; i < this.config.EXAM.MULTI; i++) {
      let index;
      do {
        index = Math.floor(Math.random() * multiQuestions.length);
      } while (usedMulti.has(index));
      
      examQuestions.push(multiQuestions[index]);
      usedMulti.add(index);
    }
    
    examQuestions.sort(() => Math.random() - 0.5);
    
    this.state.exam = 1;
    this.state.examQs = examQuestions;
    this.state.examAns.clear();
    this.state.examTime = this.config.EXAM.TIME;
    this.state.submitted = 0;
    this.state.curr = 0;
    this.state.timeWarned = false;
    
    // 为考试题目预先生成随机选项顺序映射
    examQuestions.forEach((q) => {
      const mapKey = `${q.id}_exam`;
      if (!this.state.optionOrderMap.has(mapKey)) {
        const indices = Array.from({length: q.options.length}, (_, i) => i);
        const shuffledIndices = this.utils.shuffleArray(indices);
        
        const indexToDisplayLetter = {};
        const displayLetterToIndex = {};
        
        shuffledIndices.forEach((originalIndex, displayIndex) => {
          const displayLetter = String.fromCharCode(65 + displayIndex);
          indexToDisplayLetter[originalIndex] = displayLetter;
          displayLetterToIndex[displayLetter] = originalIndex;
        });
        
        this.state.optionOrderMap.set(mapKey, {
          shuffledIndices,
          indexToDisplayLetter,
          displayLetterToIndex
        });
      }
    });
    
    this.saveExamState();
    this.updateUI();
    this.startTimer();
    
    this.utils.showMessage('考试开始！时间：90分钟，共90道题（单选题70，多选题20）');
  }
  //启动考试倒计时。设置一个每秒执行的定时器，更新剩余时间，并在最后5分钟时给出警告。时间到则自动交卷。
  startTimer() {
    clearInterval(this.state.examTimer);
    
    this.state.examTimer = setInterval(() => {
      if (this.state.examTime > 0) {
        this.state.examTime--;
        this.updateTimer();
        this.saveExamState();
        
        if (this.state.examTime > 0 && this.state.examTime <= 300 && !this.state.timeWarned) {
          this.el.time.classList.add('time-warning');
          this.utils.showMessage('⚠️ 考试剩余时间不足5分钟，请尽快提交！', 'warning');
          this.state.timeWarned = true;
        }
      } else {
        clearInterval(this.state.examTimer);
        this.submitExamAutomatically();
      }
    }, 1000);
  }
  //更新考试倒计时显示。将剩余秒数格式化为“MM:SS”并更新到页面标题和计时器元素中。
  updateTimer() {
    const timeString = this.utils.formatTime(this.state.examTime);
    this.el.time.textContent = timeString;
    document.title = `${timeString} - 业余无线电C类考试`;
  }
  //手动提交试卷。弹出确认对话框，用户确认后停止计时，计算成绩并显示结果。
  submitExam() {
    this.dialog.showConfirm('确定要提交试卷吗？提交后不能修改！', (confirmed) => {
      if (!confirmed) return;
      
      clearInterval(this.state.examTimer);
      this.state.submitted = 1;
      this.state.timeWarned = false;
      this.showExamResult(this.getExamStat());
      this.saveExamState();
      this.updateUI();
      this.utils.showMessage('考试已提交！', 'success');
    });
  }
  //考试时间到，自动提交试卷。
  submitExamAutomatically() {
    this.state.submitted = 1;
    this.showExamResult(this.getExamStat());
    this.saveExamState();
    this.updateUI();
    this.utils.showMessage('考试时间到，已自动提交！', 'warning');
  }
  //计算考试统计数据。统计答对题数、正确率等，用于结果显示。
  getExamStat() {
    const answered = this.state.examAns.size;
    const correct = [...this.state.examAns.values()].filter(x => x.c).length;
    const pass = correct >= this.config.EXAM.PASS;
    
    return {
      total: this.config.EXAM.TOTAL,
      answered,
      correct,
      score: correct,
      passScore: this.config.EXAM.PASS,
      pass,
      percentage: Math.round(correct / this.config.EXAM.TOTAL * 100)
    };
  }
  //显示考试结果页面。生成一个包含总分、正确率、及格线、分题型统计和通过状态的详细结果面板。
  showExamResult(stats) {
    const singleQuestions = this.state.examQs.filter(q => !q.isMulti);
    const multiQuestions = this.state.examQs.filter(q => q.isMulti);
    
    const singleCorrect = [...this.state.examAns]
      .filter(([id, answer]) => {
        const q = this.state.examQs.find(q => q.id === id);
        return q && !q.isMulti && answer.c;
      }).length;
    
    const multiCorrect = [...this.state.examAns]
      .filter(([id, answer]) => {
        const q = this.state.examQs.find(q => q.id === id);
        return q && q.isMulti && answer.c;
      }).length;
    
    this.el.result.style.display = 'block';
    this.el.result.innerHTML = `
      <h3>考试结果</h3>
      <div class="exam-stats">
        <div class="exam-stat"><div class="exam-stat-value">${stats.score}/${stats.total}</div><div class="exam-stat-label">总分</div></div>
        <div class="exam-stat"><div class="exam-stat-value">${stats.percentage}%</div><div class="exam-stat-label">正确率</div></div>
        <div class="exam-stat"><div class="exam-stat-value">${stats.passScore}</div><div class="exam-stat-label">及格线</div></div>
        <div class="exam-stat"><div class="exam-stat-value">${stats.answered}/${stats.total}</div><div class="exam-stat-label">答题数</div></div>
      </div>
      <div style="margin:20px 0;padding:15px;background:#fff;border-radius:8px;">
        <h4 style="margin-bottom:10px;">题目类型统计</h4>
        <div style="display:flex;justify-content:space-around;margin-top:10px;">
          <div style="text-align:center;"><div style="font-size:18px;font-weight:bold;">单选题</div><div style="font-size:16px;">${singleCorrect}/${singleQuestions.length}</div><div style="font-size:12px;color:#666;">正确/总数</div></div>
          <div style="text-align:center;"><div style="font-size:18px;font-weight:bold;">多选题</div><div style="font-size:16px;">${multiCorrect}/${multiQuestions.length}</div><div style="font-size:12px;color:#666;">正确/总数</div></div>
        </div>
      </div>
      <div style="text-align:center;padding:15px;border-radius:5px;font-weight:bold;font-size:18px;margin:20px 0;" class="${stats.pass ? 'exam-pass' : 'exam-fail'}">
        ${stats.pass ? '🎉 恭喜！考试通过！' : '😔 很遗憾，考试未通过'}
      </div>
      <div style="text-align:center;margin-top:15px;">
        <button class="btn-exam" onclick="app.reviewWrong()">查看错题</button>
        <button class="btn-primary" onclick="app.restartExam()">重新考试</button>
      </div>`;
  }
  //查看考试错题。将本次考试中答错的题目，合并到总的错题列表中，并切换到“错题练习”模式进行复习。
  reviewWrong() {
    this.state.exam = 0;
    this.state.mode = 'incorrect';
  
    const examWrongQuestions = this.state.examQs.filter(x => {
      const a = this.state.examAns.get(x.id);
      return a && !a.c;
    });
  
    const practiceWrongQuestions = this.getIncorrectQuestions();
  
    const allWrongQuestions = practiceWrongQuestions.concat(
      examWrongQuestions.filter(examQ => 
        !practiceWrongQuestions.some(practiceQ => practiceQ.id === examQ.id)
      )
    );
  
    examWrongQuestions.forEach(q => {
      const examAnswer = this.state.examAns.get(q.id);
      if (examAnswer) {
        this.state.ans.set(q.id, { s: examAnswer.s, c: false });
      }
    });
  
    this.state.qs = allWrongQuestions;
    this.state.curr = 0;
    this.savePracticeState();
  
    this.el.card.style.display = 'block';
    this.el.result.style.display = 'none';
    this.updateUI();
    document.querySelector('input[name="practice-mode"][value="incorrect"]').checked = true;
  }
  //重新开始考试。清除考试状态，回到考试准备界面。
  restartExam() {
    this.storage.delete(this.config.KEY + '_exam');
    this.state.exam = 0;
    this.state.submitted = 0;
    this.state.mode = 'exam';
    this.state.timeWarned = false;
    this.el.card.style.display = 'block';
    this.el.result.style.display = 'none';
    this.updateUI();
  }
  //保存考试中某道题的答案。在考试模式下，用户每选择一个选项，此函数会立即将答案（经过随机顺序映射转换后）保存起来。
  saveExamAns(q) {
    const sel = this.getSelectedOptions(q);
    const ok = this.utils.isSameArray(sel, q.correctAnswers);
    this.state.examAns.set(q.id, { s: sel, c: ok });
    this.saveExamState();
  }
  // 处理练习模式切换。当用户点击“顺序练习”、“随机练习”、“错题练习”或“模拟考试”单选按钮时触发。它会保存当前模式的进度，加载新模式的题目列表和进度，并更新界面。
  jumpToQuestion() {
    const inputVal = this.el.jumpInput.value.trim();
    const totalQuestions = this.state.qs.length;
    
    if (!inputVal) {
      this.utils.showMessage('请输入要跳转的题号', 'warning');
      return;
    }
    
    const targetNum = parseInt(inputVal);
    
    if (isNaN(targetNum) || targetNum < 1 || targetNum > totalQuestions) {
      this.utils.showMessage(`请输入 1 到 ${totalQuestions} 之间的题号`, 'error');
      this.el.jumpInput.value = '';
      return;
    }
    
    this.state.curr = targetNum - 1;
    this.showQuestion(this.state.curr);
    
    this.el.jumpPanel.style.display = 'none';
    this.el.jumpInput.value = '';
    
    this.utils.showMessage(`已跳转到第 ${targetNum} 题`, 'success');
  }
  //绑定所有DOM事件监听器。包括选项点击、按钮点击、模式切换、跳转面板、对话框确认等所有用户交互事件
  bindEvents() {
    this.el.opts.addEventListener('click', (e) => {
      const opt = e.target.closest('.option');
      if (!opt) return;
      
      const ex = this.state.exam && !this.state.submitted;
      const q = ex ? this.state.examQs[this.state.curr] : this.state.qs[this.state.curr];
      if (!q) return;
      
      if (q.isMulti) {
        opt.classList.toggle('selected');
      } else {
        this.el.opts.querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
        opt.classList.add('selected');
      }
      
      ex && this.saveExamAns(q);
    });
    
    this.btn.prev.addEventListener('click', () => this.showQuestion(this.prevIdx()));
    this.btn.next.addEventListener('click', () => this.showQuestion(this.nextIdx()));
    this.btn.check.addEventListener('click', () => this.checkAnswer());
    this.btn.reset.addEventListener('click', () => this.resetAll());
    this.btn.start.addEventListener('click', () => this.startExam());
    this.btn.submit.addEventListener('click', () => this.submitExam());
    
    document.querySelectorAll('input[name="practice-mode"]').forEach(radio => {
      radio.addEventListener('change', () => this.changeMode());
    });
    
    this.el.jumpIconBtn.addEventListener('click', () => {
      this.el.jumpPanel.style.display = 'flex';
      this.el.jumpInput.focus();
    });
    
    this.el.closeJumpPanel.addEventListener('click', () => {
      this.el.jumpPanel.style.display = 'none';
    });
    
    this.el.jumpActionBtn.addEventListener('click', () => this.jumpToQuestion());
    
    this.el.jumpInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.jumpToQuestion();
      }
    });
    
    this.el.jumpPanel.addEventListener('click', (e) => {
      if (e.target === this.el.jumpPanel) {
        this.el.jumpPanel.style.display = 'none';
      }
    });
    
    window.addEventListener('beforeunload', () => {
      this.savePracticeState();
    });
  }
}