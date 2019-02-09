<template>
  <div>
    <h1>テキストバインディング</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'message',
  data: {
    message: 'hello'
  }
}
</script>
