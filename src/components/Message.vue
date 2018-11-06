<template>
  <div class="message" :style="{
    backgroundColor: isUser ? '#8EC5FC' : '#E0C3FC',
    borderRadius: isUser ? '8px 8px 8px 0' : '8px 0 8px 8px'
  }">
    {{ text }} ({{ isUser ? 'user' : 'bot'}})
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['text', 'isUser']
}
</script>

<style lang="scss" scoped>
  .message {
    padding: 0.5rem;
    border-radius: 8px 8px 8px 0;
    background-color: #8EC5FC;
    color: white;
  }
</style>
