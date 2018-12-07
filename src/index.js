import msgVue from './Message.vue';

// 定义插件对象
const AtesMessage = {};
// vue的install方法，用于定义vue插件
AtesMessage.install = function(Vue, options) {
  const MessageBoxInstance = Vue.extend(msgVue);
	// 在Vue的原型上添加实例方法，以全局调用
	Vue.prototype.$message = function (options) {
		let currentMsg;
		// 实例化vue实例
		currentMsg = new MessageBoxInstance();
		let msgBoxEl = currentMsg.$mount().$el;
		document.body.appendChild(msgBoxEl);
		
		if (typeof options === 'string') {
			currentMsg.content = options;
		} else if (typeof options === 'object') {
			Object.assign(currentMsg, options);
		}
		return currentMsg.showMsg();
	}
};

export default AtesMessage;
