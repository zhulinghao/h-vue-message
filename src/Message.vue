<template>
	<div :class="`message message-${type}`" v-show="isShowMessageBox">
    <div>{{content || '-'}}</div>
	</div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'content'
    },
    icon: {
      type: String,
      default: null
    },
    timmer: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      isShowMessageBox: false
    };
  },
  methods: {
    showMsg() {
      this.isShowMessageBox = true;
      this.remove();
    },
    remove() {
      setTimeout(() => {
        this.destroy();
      }, this.timmer);
    },
    destroy() {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
  }
};
</script>

<style scoped>
.message {
	min-width: 380px;
	position: fixed;
	left: 50%;
  top: 20px;
	transform: translateX(-50%);
	border-radius: 0.4em;
	background: #fff;
	padding: 15px 15px 15px 20px;
	border: 1px solid;
	z-index: 50001;
  animation: fadeIn .5s;
}
@keyframes fadeIn {
  0% {
    top: -50px;
  }
  100% {
    top: 20px;
  }
}
.message .message-icon {
    margin-right: 10px;
}
.message-success {
	color: #0f644b;
	background-color: #d2f2e9;
	border-color: #c0ede0;
}
.message-default {
	color: #336573;
	background-color: #e0f3f8;
	border-color: #d3eef6;
}
.message-warning {
	color: #78541f;
	background-color: #faecd8;
	border-color: #f8e5c8;
}
.message-danger {
	color: #813838;
	background-color: #fee2e1;
	border-color: #fdd6d6;
}
</style>