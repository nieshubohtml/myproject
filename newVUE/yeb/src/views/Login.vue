<!--
 * @Author: your name
 * @Date: 2022-03-08 16:49:27
 * @LastEditTime: 2022-03-16 11:12:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newVUE\yeb\src\views\login.vue
-->
<template>
  <div>
    <el-form
      ref="loginForm"
      v-loading="loading"
      element-loading-text="正在登陆中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :model="loginForm"
      class="LoginBox"
      label-width="70px"
      status-icon
      :rules="rules"
    >
      <h3>系统登录</h3>
      <el-form-item label="用户名" prop="userName">
        <el-input
          type="text"
          v-model="loginForm.userName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="img_code">
        <el-input
          type="text"
          v-model="loginForm.img_code"
          placeholder="点击图片更换验证码"
          class="imgYZ"
        >
        </el-input>
        <img
          class="yz"
          ref="img_codeRef"
          src="/api/v1/auth/img_code"
          @click="img_codeClick"
        />
      </el-form-item>
      <el-checkbox v-model="checked"> 必须记住我 </el-checkbox>
      <el-form-item> </el-form-item>
      <el-button style="" type="primary" @click="submitLogin">
        点击登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      loginForm: {
        userName: "",
        password: "",
        img_code: "",
      },
      checked: true,
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        img_code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
      loading:false
    };
  },
  methods: {
    img_codeClick() {
      this.$refs.img_codeRef.src =
        "/api/v1/auth/img_code?time" + new Date();
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (!this.checked) {
            this.$message({
              showClose: true,
              message: "请阅读协议",
              type: "error",
            });
            return false;
          }
          this.loading = true
          this.postRequest('/api/v1/auth/login', this.loginForm).then(resp=>{
            console.log(resp)
            this.loading = false
            if(resp.code == 'success'){
              window.sessionStorage.setItem('tokenStr',resp.token)
              //进入首页
              this.$router.replace('/home')
            }
          })

        } else {
          this.$message({
            showClose: true,
            message: "请修改账户名或密码",
            type: "error",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.LoginBox {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px;
  background: #fff;
  border: 1px solid #dbd4d4;
  box-shadow: 0 0 25px #838181;
}
.imgYZ {
  width: 160px;
  margin-right: 130px;
}
.yz {
  width: 80px;
  /* height: 60px; */
  /* float: left; */
  position: absolute;
  top: 10px;
  left: 180px;
}
</style>
