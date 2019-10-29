<template>
  <div class="year-item mx-auto">
    <b-list-group-item href="#" @click="showWinners = !showWinners">
      {{ title }}
    </b-list-group-item>
    <b-modal v-model="showWinners" size="lg" :title="title">
      <template v-slot:modal-footer>
        <button style="display:none;" />
      </template>
      <b-table striped hover :items="winners"></b-table>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
      required: true,
      default: 2018
    }
  },
  data() {
    return {
      showWinners: false
    }
  },
  computed: {
    winners() {
      return this.$store.state.trophies.filter(
        (t) => t.title === this.$props.year
      )
    },
    title() {
      return `${this.$props.year} Winners`
    }
  }
}
</script>

<style>
.year-item {
  max-width: 400px;
}
</style>
