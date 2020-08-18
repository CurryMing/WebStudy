<template>
  <div class='container'>
    <el-input v-model="input" placeholder="请输入内容" @keydown.enter="add"></el-input>
    <el-button type="primary" @click="add" class="add">添加任务</el-button>
    <div class="list">
      <ul>
        <li v-for="item in list" :key='item.id'>
          <el-checkbox v-model="item.checked"></el-checkbox>
          <p>{{ item.msg }}</p>
          <i class="el-icon-delete" @click="del(item)"></i>
        </li>
      </ul>
      <div class="menu">
        <p :remain='remain'>{{ remain }}条剩余</p>
        <el-button type="primary" class="all">全部</el-button>
        <el-button type="success" class="done">已完成</el-button>
        <el-button type="danger" class="todo">未完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default{
  name: 'todolist',
  data: function(){
    return {
      input: '',
      id: 0,
      list: [
      ],
      total: 0,
      remain: 0,
    }
  },
  methods: {
    add(){
      if(this.input == ''){
        alert('添加失败！请输入内容~')
      }else if(this.total>=5){
        alert('添加失败！任务已满~')
      }else{
        this.total++
        var li = {id: this.id++,msg: this.input,checked: false}
        this.list.unshift(li)
        this.input = ''
      }
    },
    del(items){
      var index = this.list.findIndex(item => {
          if(item.id == items.id){
              return true
          }
      })
      this.list.splice(index,1)
      this.total--
    }
  }
}
</script>

<style lang="scss">
  body{
    background-color: #F56C6C;
  }
  *{
    box-sizing: border-box;
  }
  .container{
    position: absolute;
    left: 50%;
    top: -5%;
    transform: translate(-50%,-20%);
    width: 800px;
    height: 300px;
    // background-color: bisque;
  }
  .el-input{
    width: 650px !important;
    position: absolute;
    left: 0;
    top: 50%;
  }
  .add{
    position: absolute;
    right: 0;
    top: 50%;
  }
  .list{
    width: 800px;
    height: 600px;
    background-color: #E6A23C;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .1);
    position: absolute;
    left: 0%;
    top: 100%;
    transform: translate(0%,-15%);
  }
  li{
    position: relative;
    width: 90%;
    list-style: none;
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 25px;
    border-bottom: 1.5px dashed #303133;
    display: flex;
    align-items: center;
  }
  p{
    margin-left: 20px;
    font-size: 20px;
  }
  .el-icon-delete{
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .menu{
    width: 800px;
    height: 50px;
    display: flex;
    position: absolute;
    bottom: 20px;
    align-items: center;
  }
  .menu p{
    font-size: 20px;
    color: white;
    position: absolute;
    left: 15px;
    letter-spacing: 8px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .todo{
    position: absolute;
    right: 10px;
  }
  .done{
    position: absolute;
    right: 110px;
  }
  .all{
    position: absolute;
    right: 210px;
  }
</style>