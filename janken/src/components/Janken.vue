<template>
  <div>
    <div v-if="resultMessage">
     <h2>{{ resultMessage }}</h2>
      <button class="subBtn" @click="start">もう一度</button>
    </div>
    <div class="imgArea">
      <img :src="srcList[strNum]">
    </div>
    <ul class="btnWrapper">
      <li>
        <button class="btn janken" @click="onSelected" value="0">グー</button>
      </li>
      <li>
        <button class="btn janken" @click="onSelected" value="1">チョキ</button>
      </li>
      <li>
        <button class="btn janken" @click="onSelected" value="2">パー</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'janken',
    data () {
      return {
        resultMessage: '',
        srcList: [
          require('../../static/image/gu.jpg'),
          require('../../static/image/tyoki.jpg'),
          require('../../static/image/pa.jpg'),
        ],
        strNum: 0,
        timer: null
      }
    },
    props: {
      'pushScore': {
        type: Function,
        required: true
      }
    },
    created () {
      this.start()
    },
    methods: {
      changeStrNum() {
        this.strNum++
        this.strNum = this.strNum % 3
      },
      onSelected(e) {
        const clickedBtn = e.target
        this.stop()
        this.judgeGame(+clickedBtn.value, this.strNum)
        this.pushScore({ msg: this.resultMessage })
        this.changeToNoActiveBtn()
        clickedBtn.classList.add('selectedBtn')
      },
      judgeGame(val, _strNum) {
        switch (_strNum) {
          case val:
            this.resultMessage = 'あいこ'
            break
          case (val+1) % 3:
            this.resultMessage = '勝ち！'
            break
          case (val+2) % 3:
            this.resultMessage = '負け...'
            break
        }
      },
      start() {
        this.reset()
        this.timer = setInterval(() => {
          this.changeStrNum()
        }, 100)
      },
      stop() {
        clearInterval(this.timer)
      },
      resetBtnClass () {
        const btns = document.querySelectorAll(`.btn`)
        for (let btn of btns) {
          btn.removeAttribute('disabled')
          btn.classList.remove('selectedBtn')
        }
      },
      reset() {
        this.resultMessage = ''
        this.timer = null
        this.resetBtnClass()
      },
      changeToNoActiveBtn () {
        const btns = document.querySelectorAll(`.btn`)
        for (let btn of btns) {
          btn.setAttribute('disabled', true)
        }
      }
    }
  }
</script>

<style scoped>
  .btnWrapper {
    display: flex;
    justify-content: center;
  }
  .btnWrapper > li + li {
    margin-left: 24px;
  }
  .imgArea {
    position: relative;
    width: 200px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
  }
  .imgArea img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
