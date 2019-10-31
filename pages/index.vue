<template>
  <div>
    <b-container fluid>
      <Menu />
      <Background :usevideo="true" />
      <b-row>
        <logo />
      </b-row>
      <b-row>
        <Flag />
      </b-row>
      <b-row>
        <nuxt-link class="ghost-button mx-auto" to="/join">
          Let's Go Sail!
        </nuxt-link>
      </b-row>
      <b-row>
        <a
          class="ghost-button mx-auto"
          href="https://www.myclubhouse.co.uk/SSSC"
        >
          Member Area
        </a>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Background from '~/components/Background'
import Logo from '~/components/Logo'
import Menu from '~/components/Menu'
import Flag from '~/components/Flag'
import Footer from '~/components/Footer'

export default {
  components: {
    Background,
    Logo,
    Menu,
    Flag,
    Footer
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
body {
  position: relative;
  min-width: 300px;
  min-height: 200px;
  font-family: 'Quicksand', 'Source Sans Pro';
}

.heading {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 6rem;
  color: snow;
  text-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

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
  box-shadow: 4px 6px 5px rgba(0, 0, 0, 0.5);
  margin-top: 3rem;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: inline-block;
  width: 250px;
  padding: 8px;
  font-size: 2rem;
  border-radius: 10px;
  color: snow;
  border: 1px solid snow;
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
  background-color: snow;
  color: #000;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
  text-decoration: none;
}
</style>
