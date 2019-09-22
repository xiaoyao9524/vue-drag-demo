<template>
  <div id="app">
    <div style="margin-bottom: 20px;">
      <button @click="changeFirst">将第一个改为红色</button>
    </div>
    <v-s-drag
      ref="dragComponent"
      :observe="list"
      @change="callback"
      animation
    >
      <ul class="list">
        <li 
          class="item" 
          v-for="item in list" 
          :key="item" 
          :style="{backgroundColor: item}"
        >{{item.slice(0, 1).toUpperCase() + item.slice(1)}}</li>
      </ul>
    </v-s-drag>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      list: ['aquamarine', 'hotpink', 'gold', 'crimson', 'blueviolet', 'lightblue','cornflowerblue', 'skyblue', 'burlywood']
    };
  },
  methods: {
    callback (data) {
      console.log('cb: ', data); // list数组的浅拷贝
      this.list = data;
    },
    changeFirst () {
      const list = [...this.list];
      list[0] = 'red';
      this.list = list;

      this.$nextTick(() => {
        this.$refs['dragComponent'].reload();
      })
    }
  }
};
</script>

<style lang="scss">
.clearfix:after {
	display: block;
	clear: both;
	content: "";
}
body {
  margin: 0;
  padding: 20px;
}
ul {
	margin:0;
	padding:0;
	list-style:none;
}
.list {
  float: left;
  width: 450px;
  height: 240px;
  .dragin {
    transform: scale(1.1);
  }
  .item {
    float: left;
    width: 150px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-family: Helvetica,sans-serif;
    user-select: none;
    cursor: move;
  }
}
</style>
