<template>
  <div>
    <b-container fluid>
      <Background />
      <Menu />
      <b-row>
        <p class="heading mx-auto">News</p>
      </b-row>
      <b-row>
        <NewsItem
          v-for="(news, index) in newsItems"
          :key="index"
          :news-item="news"
          class="news-item mx-auto"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import NewsItem from '~/components/NewsItem'
import Background from '~/components/Background'

export default {
  components: {
    Menu,
    NewsItem,
    Background
  },
  computed: {
    newsItems() {
      return this.$store.state.newsItems
    }
  }
}
</script>

<style>
.news-item {
  margin: 0.5rem;
}
</style>
