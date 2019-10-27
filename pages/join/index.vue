<template>
  <b-container>
    <Background />
    <Menu />
    <b-row class="heading">
      <p class="mx-auto">About</p>
    </b-row>
    <b-row v-for="(join, index) in joinSections" :key="index">
      <SectionTemplate :content="join" />
    </b-row>
    <Footer />
  </b-container>
</template>

<script>
import Background from '~/components/Background'
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
import SectionTemplate from '~/components/SectionTemplate'

export default {
  components: {
    Background,
    Menu,
    Footer,
    SectionTemplate
  },
  computed: {
    joinSections() {
      return this.$store.state.joinSections
    }
  }
}
</script>
