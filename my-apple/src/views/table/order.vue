<template>
  <div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95" type="index"></el-table-column>
      <el-table-column label="订单号" prop="no" width="260"></el-table-column>
      <el-table-column label="价格" width="110" align="center" prop="price"></el-table-column>
      <el-table-column label="订单时间" align="center" prop="createdAt"></el-table-column>
      <!-- <el-table-column label="收货的地址" align="center" prop="regions"></el-table-column> -->
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
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
import { pro, delById } from '@/api/order'
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
    this.id = this.$route.query.id
    const res = await pro({ user: this.id })
    console.log(res)
    this.listLoading = false // 加载完结束这个效果
    this.list = res.orders
    for (let i = 0; i < res.orders.length; i++) {
      this.list[i].createdAt =
        res.orders[i].createdAt.substr(0, 10) +
        ` ` +
        res.orders[i].createdAt.substr(11, 8)
    }

    this.totalCount = res.totalCount
  },
  methods: {
    // 删除订单
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
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
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
      const res = await pro({ page }) // 调接口
      console.log(res)
      this.listLoading = false
      this.list = res.orders
      this.totalCount = res.totalCount
    }
  }
}
</script>
