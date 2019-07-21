import app from './app'

const plugin = {
  install(vue) {
    const ToastConstructor = vue.extend(app)
    const toastMap = {}
    function showToast(children, duration) {
      let key = children + duration
      if (toastMap[key]) {
        return toastMap[key].show = true
      }

      const toast = new ToastConstructor({
        el: document.createElement('div'),
        data: {
          duration,
          children
        },
        mounted() {
          this.show = true
        }
      })

      document.body.appendChild(toast.$el)
      toastMap[key] = toast
    }

    vue.prototype.$toast = showToast
  }
}

if (window) {
  window.EasyToast = plugin
}

export default plugin

