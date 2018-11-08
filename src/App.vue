<template>
  <div id="app">
    <div class="container">
      <div class="title">Lyricie ♪</div>
      <div class="cardbox">
        <div class="chat">
          <div v-for="(msg, m) in conversation" :key="m" :class="{'msg': true , 'bot': !msg.isUser }">
            <Message :text="msg.text" :subtext="msg.subtext || ''" :isUser="msg.isUser" />
          </div>
        </div>
        <div class="form">
          <input type="text" v-model="inputLyric" autofocus/>
          <button type="submit" @click="submit">Send</button>
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
import axios from 'axios'

const MX_API_KEY = '74d2315f07802f305be12ca8705e0b1a'
const BASE_API_URL = 'https://cors.io/?https://api.musixmatch.com/ws/1.1'

export default {
  name: 'app',
  components: {
    Message
  },
  data () {
    return {
      inputLyric: '',
      conversation: []
    }
  },
  methods: {
    submit () {
      if (this.inputLyric.length > 0) {
        this.conversation.push({
          isUser: true,
          text: this.inputLyric
        })

        const splittedInput = this.inputLyric.split(' ')
        const keyword = splittedInput[splittedInput.length - 1].toLowerCase()

        this.inputLyric = ''

        axios.get(BASE_API_URL + '/track.search?apikey=' + MX_API_KEY + '&q_lyrics=' + keyword + '&page_size=5&f_lyrics_language=en&f_has_lyrics=1', { crossdomain: true }).then(
          res => {
            const track = res.data.message.body.track_list[parseInt(Math.random() * res.data.message.body.track_list.length)].track

            axios.get(BASE_API_URL + '/track.lyrics.get?apikey=' + MX_API_KEY + '&track_id=' + track.track_id, { crossdomain: true }).then(
              res => {
                const lyrics = res.data.message.body.lyrics.lyrics_body.split('\n')

                const replyMsg = lyrics.find(s => s.toLowerCase().indexOf(keyword) > -1)

                this.conversation.push({
                  isUser: false,
                  text: replyMsg,
                  subtext: track.artist_name + ' - ' + track.track_name
                })
              }
            )
          }
        )
      }
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

    &:focus {
      outline-width: 0;
    }
  }
}
</style>
