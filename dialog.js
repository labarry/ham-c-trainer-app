// 自定义对话框组件
class CustomDialog {
  constructor() {
    this.element = document.getElementById('customDialog');
    this.message = document.getElementById('dialogMessage');
    this.btnOk = document.getElementById('dialogOk');
    this.btnCancel = document.getElementById('dialogCancel');
    
    this.confirmCallback = null;
    this.initEvents();
  }

  initEvents() {
    const self = this;
    
    this.btnOk.addEventListener('click', function() {
      self.hide();
      if (self.confirmCallback) {
        self.confirmCallback(true);
        self.confirmCallback = null;
      }
    });
    
    this.btnCancel.addEventListener('click', function() {
      self.hide();
      if (self.confirmCallback) {
        self.confirmCallback(false);
        self.confirmCallback = null;
      }
    });
    
    this.element.addEventListener('click', function(e) {
      if (e.target === this) {
        self.hide();
        if (self.confirmCallback) {
          self.confirmCallback(false);
          self.confirmCallback = null;
        }
      }
    });
  }

  showConfirm(message, callback) {
    this.message.textContent = message;
    this.element.style.display = 'flex';
    this.confirmCallback = callback;
  }

  hide() {
    this.element.style.display = 'none';
  }
}