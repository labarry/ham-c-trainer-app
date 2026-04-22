// 工具函数集合
class Utils {
  constructor() {
    this.$ = (selector) => document.querySelector(selector);
    this.$$ = (selector) => document.querySelectorAll(selector);
  }

  isSameArray(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
  }
  //提示框样式
  showMessage(text, type = 'info') {
    const colors = {
      info: '#1a3a8f',
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336'
    };
  
    // 清理已存在的提示
    const existingTips = document.querySelectorAll('.custom-message-tip');
    existingTips.forEach(tip => tip.remove());
  
    const tip = document.createElement('div');
    tip.textContent = text;
    tip.className = 'custom-message-tip';
  
    // 核心样式：使用现代CSS函数实现智能适配
    tip.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: ${colors[type] || colors.info};
      color: #fff;
      padding: clamp(10px, 2vw, 16px) clamp(12px, 3vw, 24px);
      border-radius: 8px;
      z-index: 9999;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      text-align: center;
      max-width: min(90vw, 600px);
      min-width: 250px;
      word-wrap: break-word;
      font-size: clamp(13px, 1.5vw, 15px);
      line-height: 1.5;
      box-sizing: border-box;
      opacity: 0;
      animation: tipFadeIn 0.3s ease forwards;
    `;
  
    // 动态添加动画样式
    if (!document.getElementById('tip-styles')) {
      const style = document.createElement('style');
      style.id = 'tip-styles';
      style.textContent = `
        @keyframes tipFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  
    document.body.appendChild(tip);
  
    // 3秒后淡出移除
    setTimeout(() => {
       if (tip.parentNode) {
         tip.style.opacity = '0';
         tip.style.transform = 'translateX(-50%) translateY(-20px)';
         tip.style.transition = 'opacity 0.3s, transform 0.3s';
         setTimeout(() => {
           if (tip.parentNode) tip.remove();
        }, 300);
      }
    }, 3000);
  
    return tip;
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getRandomQuestions(questions, singleCount, multiCount) {
    const singles = questions.filter(q => !q.isMulti);
    const multis = questions.filter(q => q.isMulti);
    
    if (singles.length < singleCount || multis.length < multiCount) {
      return null;
    }
    
    const selectedSingles = this.getRandomSubset(singles, singleCount);
    const selectedMultis = this.getRandomSubset(multis, multiCount);
    
    return [...selectedSingles, ...selectedMultis];
  }

  getRandomSubset(array, count) {
    const shuffled = this.shuffleArray(array);
    return shuffled.slice(0, count);
  }

  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
}