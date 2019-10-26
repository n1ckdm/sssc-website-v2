<template>
  <b-container fluid>
    <b-row>
      <b-card
        v-for="(member, index) in committee"
        :key="index"
        :title="member.name"
        :img-src="member.photo"
        class="mb-2 card"
      >
        <p class="date">{{ member.position }}</p>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    committee() {
      return this.$store.state.committee
    }
  }
}
</script>

<style>
.card {
  width: 300px;
  overflow: hidden;
  margin: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card img {
  height: auto;
  width: 300px;
}
</style>
