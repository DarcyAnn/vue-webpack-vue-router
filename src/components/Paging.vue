<template>
  <div id="paging" class="paging">
    <a @click="pageTurn(0)">首页</a>
    <a @click="pageTurn(paging.index-1)"><svg t="1497426666724" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2086" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M142 512 880.279 1012 880.279 12 142 512Z" p-id="2087" fill="#80929e"></path></svg></a>
    <a v-for="i in sum" @click="pageTurn(i-1)" v-if="showText(i)" v-text="showText(i)" :class="i===paging.index+1 ? 'currentIndex' : ''"></a>
    <a @click="pageTurn(paging.index+1)"><svg t="1497426690596" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2924" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M880.279 512 142 12 142 1012 880.279 512Z" p-id="2925" fill="#80929e"></path></svg></a>
    <a @click="pageTurn(sum-1)">尾页</a>
  </div>
</template>
<script>
export default {
  props: ['sumCount'],
  data() {
    return {
      paging: {
        index: 0,  //index记录当前页码
        count: 6,  //count表示每页多少条记录
      },
    }
  },
  computed: {
    sum() { //sum表示共有多少页
      return Math.ceil(this.sumCount / this.paging.count)
    }
  },
  methods: {
    //页码显示（有省略号）
    showText(i) {
      var vm = this,
          index = vm.paging.index,
          sum = vm.sum;  
      if(i<3 || i>(sum-2)) {      //前两个和最后两个始终显示  
        return i;
      } else if(i<=index+2 && i>=index) {      //当前页的前一页和后一页始终显示  
        return i;
      } else if(i === index+3 || i === index-1) {      //当前页的前前页和后后页显示 ... 
        return '...';
      } else {      //除此之外都不显示  
        return false;
      }
    },
    //翻页
    pageTurn (i) {
      var vm = this;
      if(i < 0 || i >= vm.sum || i === vm.paging.index) {
        return;
      }
      vm.paging.index = i;
      //告诉父组件翻页了，让父组件自己调用init
      vm.$emit('pageTurn', i, vm.paging.count);
    },
  }
}
</script>
<style scoped>
.paging a{
  color: #80929e;
  margin-right: 5px;
  cursor: pointer;
}
.paging .currentIndex {
  color: #000;
  text-decoration: underline;
}
</style>