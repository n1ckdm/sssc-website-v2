<template>
  <b-container fluid>
    <Background />
    <Menu />
    <b-row class="heading">
      <p class="mx-auto">About</p>
    </b-row>
    <Committee />
    <Map />
    <Footer />
  </b-container>
</template>

<script>
import Background from '~/components/Background'
import Menu from '~/components/Menu'
import Committee from '~/components/Committee'
import Map from '~/components/Map'
import Footer from '~/components/Footer'

export default {
  components: {
    Background,
    Menu,
    Committee,
    Map,
    Footer
  }
}
</script>

<style>
.sub-heading {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 4rem;
  color: snow;
  text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
