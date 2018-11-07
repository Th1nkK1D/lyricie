<template>
  <div id="app">
    <div class="container">
      <div class="title">Riff-Off Bot</div>
      <div class="cardbox">
        <div class="chat">
          <div v-for="(msg, m) in conversation" :key="m" :class="{'msg': true , 'bot': !msg.isUser }">
            <Message :text="msg.text" :isUser="msg.isUser" />
          </div>
        </div>
        <div class="form">
          <input type="text" />
          <button>Sing!</button>
        </div>
      </div>
      <div class="footer">
        Lyrics powered by musiXmatch - Developed by Th1nkK1D 2018 - View on Github
      </div>
    </div>
  </div>
</template>

<script>
import Message from './components/Message'

export default {
  name: 'app',
  components: {
    Message
  },
  data () {
    return {
      conversation: [
        { isUser: true, text: 'Look at the srats, look how they shine for you' },
        { isUser: false, text: 'If you love me, why you leave me' }
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Dosis', sans-serif;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FBDA61;
  background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
}

.title {
  text-align: center;
  color: white;
  font-family: 'Pattaya', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.footer {
  color: white;
  text-align: center;
  margin-top: 1rem;
}

.container {
  width: 100%;
  max-width: 600px;
  height: 85vh;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.cardbox {
  background-color: white;
  border-radius: 10px;
  height: 100%;
  box-shadow: 2px 2px 20px rgba($color: #000000, $alpha: 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5rem;
}

.chat {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  .msg {
    display: flex;
    padding-bottom: 0.5rem;

    &.bot {
      justify-content: flex-end;
    }
  }
}

.form {
  display: flex;

  input {
    display: flex;
    flex: 1;
    font-family: 'Dosis', sans-serif;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 8px 0 0 8px;
    border: 1px solid lightgray;

    &:focus {
      outline-width: 0;
    }
  }

  button {
    font-family: 'Pattaya', sans-serif;
    font-size: 1rem;
    background-color: #039be5;
    color: white;
    border: none;
    border-radius: 0 8px 8px 0;
  }
}
</style>
