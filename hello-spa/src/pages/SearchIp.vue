<template>
  <div id="search-ip">
    <div>
      <p v-text="ip" class="ip-text"></p>
      <div>
        <input @click="getIp" type="button" class="btn" value="IPを取得する">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchIp',
    data() {
      return {
        ip: 'ここにIPが表示されます'
      }
    },
    methods: {
      getIp() {
        this.ip = 'IPを取得しています'
        this.$axios.get('https://httpbin.org/get')
          .then((response) => {
            this.ip = response.data.origin;
          })
          .catch((reason) => {
           this.ip = 'IPの取得に失敗しました';
          });
      }
    }
  }
</script>

<style lang="scss">

  #search-ip {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-area {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ip-text {
    font-size: 2rem;
    color: #ffffff;
  }

  .btn {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #e67e22;
    padding: 10px 20px;
    border-radius: .3em;
    cursor: pointer;
    display: block;

    &:hover {
      background-color: #e67e22;
      border-color: #e67e22;
      color: #ffffff;
    }

    &:focus {
      outline: 0;
    }
  }
</style>
