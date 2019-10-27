<template>
  <div>
    <b-container fluid>
      <Background :make-dark="true" />
      <Menu />
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
