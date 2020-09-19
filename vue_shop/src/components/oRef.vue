<template>
  <div>
    <div class="index-box">
      <!--新增按钮-->
      <input type="button" id="DbManagement-addBtn" @click="showAddAlert" value="新增" />
      <!--新增数据源弹框-->
      <div class="addDbSource-alert" ref="addAlert">
        <div class="addAlert-top">
          <!--添加数据源-->
          <input type="button" value="×" class="addAlert-close" @click="closeAddAlert" />
        </div>
        <div class="addAlert-content">
          <div style="height: 1000px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    // 点击新增按钮，弹出新增数据源的弹框
    showAddAlert() {
      this.$refs.addAlert.style.display = "block";
    },
    // 点击 × 关闭新增数据源的弹框
    closeAddAlert() {
      this.$refs.addAlert.style.display = "none";
    },
  },
  created() {},
};
</script>
<style scoped>
/* 容器 */
.index-box {
  width: 100%;
  height: 100%;
  background: #212224;
  display: flex;
}
/* 添加数据源按钮 */
#DbManagement-addBtn {
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: rgba(29, 211, 211, 1);
  box-shadow: 2px 2px 1px #014378;
  margin-left: 20px;
  margin-top: 17px;
  cursor: pointer;
  font-size: 20px;
}
/*新增数据源弹框*/
.addDbSource-alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 4rem;
  height: 4rem;
  background: #2b2c2f;
  display: none;
}
/*新增弹框头部*/
.addAlert-top {
  width: 100%;
  height: 50px;
  background: #1dd3d3;
  line-height: 50px;
  font-size: 20px;
  box-sizing: border-box;
  padding-left: 20px;
}
/*新增弹框关闭*/
.addAlert-close {
  background: #1dd3d3;
  border: none;
  font-size: 30px;
  cursor: pointer;
  float: right;
  margin-right: 20px;
  margin-top: 5px;
}
/*新增弹框内容部分*/
.addAlert-content {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 30px 20px;
}
/* 滚动条效果 */
/* 设置滚动条的样式 */
.addAlert-content::-webkit-scrollbar {
  width: 5px;
}
/* 滚动槽 */
.addAlert-content::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px  rgba(40, 42, 44, 1);
        border-radius: 10px; */
}
/* 滚动条滑块 */
.addAlert-content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(29, 211, 211, 1);
  /* -webkit-box-shadow: inset 0 0 6px rgba(29, 211, 211, 1); */
}
.addAlert-content::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(29, 211, 211, 1);
}
</style>