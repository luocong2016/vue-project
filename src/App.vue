<template>
  <div id="app">
    <img src="./assets/logo.png">
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="(val, key) in item" :key="key" class="text item">
         <a :href="val"> {{ key }} </a>
      </div>
    </el-card>
    <router-view/>
  </div>
</template>

<script>
import { userFetch } from './service/getData'

export default {
  name: "App",
  data() {
    return {
      item: {}
    }
  },
  mounted() {
    const _this = this
    userFetch().then(res => {
      _this.item = res
    })
  }
};
</script>

<style lang="scss">
  $background: #ccc;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: $background
  }
</style>
