<!--
 * @Author: your name
 * @Date: 2022-03-08 16:31:33
 * @LastEditTime: 2022-03-16 15:34:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myprojectd:\testExercise\QDtest\newVUE\yeb\src\views\HomeView.vue
-->
<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside>
      <el-menu
        class="el-menu-vertical-demo"
        @select="handleSelect"
        :collapse="isCollapse"
        style="width: 200px"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="/test1">选项1</el-menu-item>
            <el-menu-item index="/test2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
    </el-container>
  </div>
</template>
<style scoped>
</style>
<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleSelect(index) {
      // console.log(key, keyPath);
      this.$router.push(index);
    },
  },
};
</script>
