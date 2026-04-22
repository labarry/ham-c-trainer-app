// 本地存储管理
class StorageManager {
  constructor() {
    this.key = CONFIG.KEY;
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('读取存储数据失败:', e);
      return null;
    }
  }

  delete(key) {
    localStorage.removeItem(key);
  }

  // 保存练习状态（新增 modeIndices 参数）
  savePracticeState(ans, mode, curr, qs, modeIndices, optionOrderMap) {
    this.set(this.key, { 
      ans: Object.fromEntries(ans), 
      mode,
      curr,  // 保存当前索引
      qs,     // 保存题目列表
      modeIndices: modeIndices || {  // 新增：保存各模式索引
        sequential: 0,
        random: 0,
        incorrect: 0
      },
      optionOrderMap: optionOrderMap || {}  // 新增：保存随机选项顺序映射
    });
  }
  
  getPracticeState() {
    return this.get(this.key);
  }

  saveExamState(examData) {
    this.set(this.key + '_exam', examData);
  }

  getExamState() {
    return this.get(this.key + '_exam');
  }

  clearAll() {
    localStorage.removeItem(this.key);
    localStorage.removeItem(this.key + '_exam');
  }
}