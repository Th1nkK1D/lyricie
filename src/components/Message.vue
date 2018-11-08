<template>
  <div class="wrapper">
    <div class="message" :style="{
      backgroundColor: isUser ? '#8EC5FC' : '#E0C3FC',
      borderRadius: isUser ? '8px 8px 8px 0' : '8px 0 8px 8px'
    }">
      {{ text }}
    </div>
    <div class="subtext">
      {{ subtext }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['text', 'subtext', 'isUser']
}
</script>

<style lang="scss" scoped>
  .message {
    padding: 0.5rem;
    border-radius: 8px 8px 8px 0;
    background-color: #8EC5FC;
    color: white;
  }

  .subtext {
    font-size: 0.75rem;
    text-align: right;
    color: gray;
  }
</style>
