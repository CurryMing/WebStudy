<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑导航区 -->

    <!-- 卡片视图 -->
    <el-card>
      <!-- Button：添加分类 -->
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialog"
            >添加分类</el-button
          >
        </el-col>
      </el-row>
      <!-- Button：添加分类 -->

      <!-- 表格 -->
      <tree-table
        :data="cateList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        class="treeTable"
      >
        <!-- 是否有效 -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="scope.row.cat_deleted === false"
            style="color: lightgreen"
            size="max"
          ></i>
          <i class="el-icon-error" v-else style="color: red"></i>
        </template>
        <!-- 是否有效 -->
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag
            size="mini"
            type="success"
            v-else-if="scope.row.cat_level === 1"
            >二级</el-tag
          >
          <el-tag size="mini" type="warning" v-else>三级</el-tag>
        </template>
        <!-- 排序 -->
        <!-- 操作 -->
        <template slot="opt" slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
        <!-- 操作 -->
      </tree-table>
      <!-- 表格 -->

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[2, 5, 10, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <!-- 分页区域 -->
    </el-card>
    <!-- 卡片视图 -->

    <!-- 添加分类的对话框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      width="30%"
      @close="addCateDialogClosed"
    >
      <!-- 添加分类的表单 -->
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="100px"
      >
        <el-form-item label="分类名称：" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类：">
          <!-- 级联选择器,options：数据源,props：指定配置对象 -->
          <el-cascader
            v-model="selectedKeys"
            :options="parentCateList"
            :props="cascaderProps"
            @change="parentCateChanged"
            clearable
          ></el-cascader>
          <!-- 级联选择器 -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加分类的对话框 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //查询条件
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      // 从 后端 拿到商品分类的数据列表之后，存储到这个数组中
      cateList: [],
      //总数据条数
      total: 0,
      // 为 table 指定列的定义
      columns: [
        {
          label: "分类名称",
          prop: "cat_name",
        },
        {
          label: "是否有效",
          //表示将当前列定义为模板列
          type: "template",
          //表示这一列使用的模板名称
          template: "isok",
        },
        {
          label: "排序",
          //表示将当前列定义为模板列
          type: "template",
          //表示这一列使用的模板名称
          template: "order",
        },
        {
          label: "操作",
          //表示将当前列定义为模板列
          type: "template",
          //表示这一列使用的模板名称
          template: "opt",
        },
      ],
      //
      addCateDialogVisible: false,
      // 添加分类的表单对象
      addCateForm: {
        // 将要添加的分类的名称
        cat_name: "",
        // 父级分类的ID
        cat_pid: "",
        // 分类的等级，默认添加的是1级分类
        cat_level: "",
      },
      // 添加分类表单的验证规则对象
      addCateFormRules: {
        cat_name: [
          {
            required: true,
            message: "请输入分类名称！",
            trigger: "blur",
          },
        ],
      },
      // 父级分类的列表
      parentCateList: [],
      cascaderProps: {
        value: "cat_id",
        label: "cat_name",
        children: "children",
        expandTrigger: "hover",
        // 可选择任意一级
        checkStrictly: "true",
      },
      selectedKeys: [],
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    // 从后端获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get("categories", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200) {
        this.$message.error("获取商品分类失败");
      }
      this.cateList = res.data.result;
      this.total = res.data.total;
    },
    // 监听 pagesize 的改变
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getCateList();
    },
    // 监听 pagenum 的改变
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getCateList();
    },
    // 点击按钮，展示添加分类的对话框
    showAddCateDialog() {
      this.getParentCateList();
      this.addCateDialogVisible = true;
    },
    // 获取父级分类的数据列表
    async getParentCateList() {
      const { data: res } = await this.$http.get("categories", {
        params: { type: 2 },
      });
      if (res.meta.status !== 200) {
        this.$message.error("获取父级分类数据失败！");
      }
      this.parentCateList = res.data;
    },
    // 选择项发生变化时触发
    parentCateChanged() {
      this.checkAddCate();
    },
    // 确定，添加分类
    addCate() {
      this.checkAddCate();
      this.$refs.addCateFormRef.validate(async valid => {
        if(!valid){
          return
        }
        const {data: res} = await this.$http.post('categories',this.addCateForm)
        if(res.meta.status !== 201){
          return this.$message.error('添加分类失败！')
        }
        this.$message.success('添加分类成功！')
        this.getCateList()
        this.addCateDialogVisible = false
      })
    },
    // 检查选择了多少个父级分类
    checkAddCate() {
      // 如果selectedKeys数组中的length大于0，证明选中了父级分类
      // 否则没有选择父级分类
      if (this.selectedKeys.length > 0) {
        // 父级分类的id
        this.addCateForm.cat_pid = this.selectedKeys[
          this.selectedKeys.length - 1
        ];
        // 赋值等级
        this.addCateForm.cat_level = this.selectedKeys.length;
        return;
      } else {
        this.addCateForm.cat_pid = 0;
        this.addCateForm.cat_level = 0;
      }
    },
    // 
    addCateDialogClosed() {
      this.$refs.addCateFormRef.resetFields();
      this.selectedKeys = [];
      this.addCateForm.cat_pid = 0;
      this.addCateForm.cat_level = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.treeTable {
  margin-top: 10px;
}
.el-cascader {
  width: 100%;
}
</style>
