<template>
  <div>
    <Background :makedark="true" />
    <Menu />
    <b-container fluid class="page">
      <b-row>
        <p class="heading mx-auto">About</p>
      </b-row>
      <Committee />
      <Map />
    </b-container>
  </div>
</template>

<script>
import Background from '~/components/Background'
import Menu from '~/components/Menu'
import Committee from '~/components/Committee'
import Map from '~/components/Map'

export default {
  components: {
    Background,
    Menu,
    Committee,
    Map
  }
}
</script>

<style>
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

.sub-heading {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 3rem;
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
