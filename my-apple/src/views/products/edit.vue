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
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="quantity">
          <el-input v-model="product.quantity"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="product.price"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="descriptions">
          <el-input v-model="product.descriptions" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="coverImage">
          <el-input v-model="product.coverImg"></el-input>
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
import { updateById, getProductById } from '@/api/product'

export default {
  data() {
    return {
      id: '',
      product: {
        name: '',
        quantity: 0,
        descriptions: '',
        coverImg: '',
        price: 0
      },
      rules: {
        name: { required: true, message: '请输入商品名称' }
      }
    }
  },
  async created() {
    this.id = this.$route.query.id
    const res = await getProductById(this.id)
    this.product = res
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await updateById(this.id, this.product)
          console.log(res)
          this.$message({
            message: '恭喜你，修改成功',
            type: 'success'
          })
          this.$router.push({ name: 'ProductsList' })
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
