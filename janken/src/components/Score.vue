<template>
  <div>
    <h2>{{ title }}</h2>
    <button class="subBtn" @click="resetStorage">リセット</button>
    <ul class="result">
      <li v-for="(score, index) in scores">{{ score.msg }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'scores',
    props: {
      'scores': {
        type: Array,
        required: true
      },
      'resetStorage': {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        title: '成績表'
      }
    }
  }
</script>

<style scoped>
  .result li {
    font-size: 20px;
    font-weight: bold;
  }
</style>
