# Install

`npm i h-vue-message`

main.js
```js
import HVueMessage from 'h-vue-message';
Vue.use(HVueMessage);
```

# How To Use
+ **this.$message(options)** 

# options

| params    | type      | value       | default   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | object | —  |    —   |
| options.type  | string | 'default', 'success', 'error', 'warning'  |   default   |
| options.message  | string | —  |    '-'   |
| options.timmer   |  number | -  |   3000   |

