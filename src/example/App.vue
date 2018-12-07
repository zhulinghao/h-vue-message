<template>
  <div class="container">
    <div class="item">
      <div class="mb-15">Content</div>
      <input type="text" v-model="content" placeholder="content">
    </div>
    <div class="item">
      <div class="mb-15">Timmer</div>
      <input type="number" v-model="timmer" placeholder="timmer">
    </div>
    <div class="item">
      <div class="mb-15">Type</div>
      <select v-model='type' @change='changeType'>
        <option value='success'>success</option>
        <option value='default'>default</option>
        <option value='warning'>warning</option>
        <option value='danger'>danger</option>
      </select>
    </div>
    <div class="click" @click="handleClick">{{msg}}</div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
        msg: 'Click Test',
        content: '',
        type: 'success',
        timmer: 3000,
        options: [
            'success'
        ]
    }
  },
  methods: {
    handleClick() {
      const { content, type, timmer } = this;
      console.log(content, type, timmer)
      this.$message({content, type, timmer});
    },
    changeType(e) {
      let val = e.target.value;
      this.type = val;
    }
  }
}
</script>
<style scoped>
.mb-15 {
  margin-bottom: 15px;
}
.container {
  padding-top: 100px;
  text-align: center;
}
.click {
  width: 200px;
  padding: 15px;
  font-size: 20px;
  background: #409EFF;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  margin: 50px auto;
  cursor: pointer;
}
input, select {
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.click:hover {
  opacity: .9;
}
.item {
  margin-bottom: 20px;
}
</style>
