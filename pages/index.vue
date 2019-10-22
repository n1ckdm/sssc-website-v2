<template>
  <div>
    <Background />
    <div class="container">
      <logo />
    </div>
    <div class="container">
      <Menu />
    </div>
  </div>
</template>

<script>
import Background from '~/components/Background.vue'
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Background,
    Logo,
    Menu
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
