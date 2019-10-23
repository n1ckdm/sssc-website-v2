<template>
  <div>
    <Menu />
    <ul>
      <li v-for="(news, index) in newsItems" :key="index">
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  },
  computed: {
    newsItems() {
      return this.$store.state.newsItems
    }
  }
}
</script>
