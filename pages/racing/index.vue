<template>
  <div>
    <Background />
    <Menu />
    <b-container fluid>
      <b-row>
        <p class="heading mx-auto">Race Results</p>
      </b-row>
      <b-row>
        <p class="mx-auto">
          <span>
            Race results can be found on the
            <a href="http://www.halsraceresults.com/crs/crs.aspx?ClubKey=1111">
              SSSC HAL Server
            </a>
          </span>
        </p>
      </b-row>
      <b-row>
        <b-col>
          <TrophyWinners v-for="y in years" :key="y" :year="y" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Background from '~/components/Background'
import TrophyWinners from '~/components/TrophyWinners'

export default {
  components: {
    Menu,
    Background,
    TrophyWinners
  },
  computed: {
    years() {
      const years = this.$store.state.trophies.map((t) => t.title)
      return [...new Set(years)]
    }
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
</style>

<style>
span {
  color: snow;
}

span a {
  color: snow;
}

span a:hover {
  color: snow;
}
</style>
