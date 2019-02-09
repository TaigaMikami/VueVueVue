<template>
  <div>
    <h1>Todo List</h1>
    <el-input ref="new_task" class="task-input" placeholder="追加するタスクを入力してください。" v-model="newTask" @keydown.enter.native="addTask"></el-input>
    <el-button type="primary" plain @click="addTask">追加</el-button>
    <el-table
      :data="list"
      stripe
      class="list">
      <el-table-column>
        <template slot-scope="scope">
          <span :class="{ complete: scope.row.isComplete }">{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="scope.row.isComplete=true" type="primary" plain size="small" v-if="!scope.row.isComplete">達成</el-button>
          <el-button @click="scope.row.isComplete=false" type="primary" plain size="small" v-if="scope.row.isComplete">戻す</el-button>
          <el-button @click="deleteTask(scope.row)" type="danger" plain size="small">削除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          { id:1, value: "たまご買う", isComplete: false },
          { id:2, value: "図書館に本を返す", isComplete: false },
          { id:3, value: "宅急便を受け取る", isComplete: false }
        ],
        newTask: "",
        nextId: 4
      }
    },
    methods : {
      addTask() {
        if(!this.newTask.trim()) {
          return
        }
        this.list.push({
          id: this.nextId++,
          value: this.newTask,
          isComplete: false
        })
        this.newTask = ""
      },
      deleteTask(obj) {
        this.list = this.list.filter(e => e !== obj)
      }
    },
    mounted() {
      this.$refs.new_task.focus()
    }
  }
</script>

<style scoped>
  .list {
    width: 80%;
    margin: auto;
    text-align: left;
  }
  .complete {
    text-decoration: line-through;
  }
  h1 {
    position: relative;
    line-height: 1.4;
  }
  h1:before {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-size: 0.7em;
    left: 0;
    top: 0;
    color: #5ab9ff;
  }
  .task-input {
    width: 60%
  }
  .el-table {
    padding: 8px
  }
</style>
