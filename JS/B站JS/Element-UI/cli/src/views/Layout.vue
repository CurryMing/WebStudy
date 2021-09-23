<template>
  <div>
    <el-row>
      <el-col :span="24">24</el-col>
    </el-row>

    <el-row>
      <el-col :span="18">18</el-col>
    </el-row>

    <el-row>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="6"><div style="background-color: sienna">6</div></el-col>
      <el-col :span="6"><div style="background-color: sienna">6</div></el-col>
      <el-col :span="6"><div style="background-color: sienna">6</div></el-col>
      <el-col :span="6"><div style="background-color: sienna">6</div></el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="6" :offset="1">6</el-col>
      <el-col :span="6" :offset="1">6</el-col>
      <el-col :span="6" :offset="1">6</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.el-row {
  background-color: #333744;
  color: #fff;
  margin: 20px 0;
}
.el-col {
  background-color: #42b983;
  padding: 10px 0;
  border-right: 1px solid white;
  box-sizing: border-box;
}
</style>