<template>
  <div>
    <Background :usevideo="true" />
    <div class="container">
      <logo />
    </div>
    <div>
      <Menu />
    </div>
    <div class="container">
      <nuxt-link class="ghost-button" to="/join">
        Let's Go Sail!&nbsp;
        <i class="material-icons">sentiment_satisfied_alt</i>
      </nuxt-link>
    </div>
    <div class="container">
      <a class="ghost-button" href="#">
        Member Area&nbsp;
        <i class="material-icons">vpn_key</i>
      </a>
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
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

.material-icons {
  width: 24px;
}

.ghost-button {
  margin-top: 3rem;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: inline-block;
  width: 310px;
  padding: 8px;
  font-size: 2rem;
  border-radius: 10px;
  color: #fff;
  border: 1px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ghost-button:hover,
.ghost-button:active {
  background-color: #fff;
  color: #000;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}
</style>
