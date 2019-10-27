<template>
  <div>
    <b-container fluid class="page">
      <Background :mark-dark="true" />
      <Menu />
      <b-row class="heading">
        <p class="mx-auto">About</p>
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
.page {
  padding-bottom: 2.5rem;
}
</style>
