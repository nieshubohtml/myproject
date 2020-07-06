<template>
  <div>
    <el-button @click="$router.push({ name: 'ProductNew' })">新增</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95" type="index"></el-table-column>
      <el-table-column label="商品名称" prop="name" width="260"></el-table-column>
      <el-table-column label="图片" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:80px"
            :src="
              scope.row.coverImg
                ? scope.row.coverImg
                : 'http://img5.imgtn.bdimg.com/it/u=1120984223,1579950756&fm=26&gp=0.jpg'
            "
            alt
          />
        </template>
      </el-table-column>
      <el-table-column label="价格" width="110" align="center" prop="price"></el-table-column>
      <el-table-column label="数量" align="center" prop="quantity"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="small" @click="editOne(scope.row)">修改</el-button>
          <el-button type="danger" size="small" @click="delOne(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="changeHandel"
      background
      layout="prev, pager, next"
      :total="totalCount"
    ></el-pagination>
  </div>
</template>

<script>
import { products, delById } from '@/api/product'
import { serve } from '@/utils/config'
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      // 是否是加载中的效果
      serve,
      totalCount: 0
    }
  },
  async created() {
    const res = await products()
    console.log(res)
    this.listLoading = false // 加载完结束这个效果
    this.list = res.products
    this.totalCount = res.totalCount
  },
  methods: {
    editOne(item) {
      this.$router.push({
        name: 'ProductEdit',
        query: {
          id: item._id
        }
      })
    },
    delOne(item) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          // console.log(delById(), 12322121212121212, item._id)
          const res = await delById(item._id)
          console.log(res)
          this.loadData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        })
    },
    // 页码选择改变后执行
    changeHandel(p) {
      // alert(p)
      this.loadData(p)
    },
    // 从服务器加载数据
    async loadData(page = 1) {
      this.listLoading = true
      const res = await products({ page }) // 调接口
      // console.log(res)
      this.listLoading = false
      this.list = res.products
      this.totalCount = res.totalCount
    }
  }
}
</script>
