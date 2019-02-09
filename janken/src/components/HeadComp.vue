<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="nav">
      <li>
        <router-link class="btn navBtn" to="/janken">ゲーム</router-link>
      </li>
      <li>
        <router-link class="btn navBtn" to="/score">成績</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'headComp',
    data () {
      return {
        title: 'じゃんけんゲーム'
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: center;
  }
  .nav > li + li {
    margin-left: 24px;
  }
  .nav a {
    text-decoration: none;
  }
</style>
