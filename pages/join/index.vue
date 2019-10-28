<template>
  <div>
    <Background :makedark="true" />
    <Menu />
    <b-container fluid>
      <b-row class="heading text-center">
        <b-col>
          <p class="mx-auto">Join</p>
        </b-col>
      </b-row>
      <b-row>
        <SectionTemplate
          v-for="(join, index) in joinSections"
          :key="index"
          :content="join"
          :index="index"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Background from '~/components/Background'
import Menu from '~/components/Menu'
import SectionTemplate from '~/components/SectionTemplate'

export default {
  components: {
    Background,
    Menu,
    SectionTemplate
  },
  computed: {
    joinSections() {
      return this.$store.state.joinSections
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
