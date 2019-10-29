<template>
  <div>
    <Background />
    <Menu />
    <b-container fluid>
      <b-row>
        <p class="heading mx-auto">Race Results</p>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('~/assets/raceresults.jpg')" />
        </b-col>
        <b-col sm="12">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Background from '~/components/Background'

export default {
  components: {
    Menu,
    Background
  }
}
</script>
