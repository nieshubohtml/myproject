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
      <el-table-column label="收货人" prop="receiver" width="260"></el-table-column>
      <el-table-column label="省市" width="210" align="center" prop="regions"></el-table-column>
      <el-table-column label="详细地址" align="center" prop="address"></el-table-column>
      <el-table-column label="电话" width="110" align="center" prop="mobile"></el-table-column>
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
import { getProductId } from '@/api/Dz'
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
    const res = await getProductId(this.id)
    console.log(res)
    this.listLoading = false // 加载完结束这个效果
    this.list = res.addresses
    this.totalCount = res.totalCount
  },
  methods: {
    // 页码选择改变后执行
    changeHandel(p) {
      // alert(p)
      this.loadData(p)
    },
    // 从服务器加载数据
    async loadData(page = 1) {
      this.listLoading = true
      const res = await getProductId({ page }) // 调接口
      // console.log(res)
      this.listLoading = false
      this.list = res.addresses
      this.totalCount = res.totalCount
    }
  }
}
</script>
