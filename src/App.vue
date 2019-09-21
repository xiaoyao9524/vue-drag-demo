<template>
  <div id="app">
    <v-s-drag
      :watchData="list"
      :callback="callback"
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
      console.log(data); // list数组的浅拷贝
      this.list = data;
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
