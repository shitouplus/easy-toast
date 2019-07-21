<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    background: rgba(0, 0, 0, .35);
    padding: 16px;
    border-radius: 6px;
  }

  .toast__close-btn {
    position: absolute;
    right: 6px;
    top: 6px;
    font-size: 12px;
    line-height: 12px;
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<template>
  <transition name="fade">
    <div v-show="show" class="toast">
      <div class="toast__close-btn" @click="handleClose" v-if="!duration">X</div>
      <div v-html="children"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'toast',

    data() {
      return {
        show: false,
        duration: 0,
        children: null
      }
    },

    methods: {
      handleClose() {
        this.show = false
      }
    },

    watch: {
      show(val) {
        if (val && this.duration) {
          setTimeout(() => {
            this.show = false
          }, this.duration)
        }
      }
    }
  }
</script>
