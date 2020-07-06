<template>
  <el-row>
    <el-col :span="15">
      <el-form
        :model="product"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="product.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="product.password"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickName">
          <el-input v-model="product.nickName"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <el-input v-model="product.avatar"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { createOne } from '@/api/Auser'

export default {
  data() {
    return {
      product: {
        userName: '',
        password: '',
        nickName: '',
        avatar: ''
      },
      rules: {
        userName: { required: true, message: '请输入用户名称' },
        password: { required: true, message: '请输入用户密码' }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await createOne(this.product)
          console.log(res)
          this.$router.push({ name: 'UserList' })
          this.$message({
            showClose: true,
            message: '恭喜你，创建成功',
            type: 'success'
          })
        } else {
          console.log('错了，赶紧改!!')
          return false
        }
      })
    },
    resetForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields()
    }
  }
}
</script>
