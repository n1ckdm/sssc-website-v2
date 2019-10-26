<template>
  <div>
    <Background />
    <Menu />
    <b-container fluid>
      <b-row class="heading">
        <p>News</p>
      </b-row>
      <b-row>
        <NewsItem
          v-for="(news, index) in newsItems"
          :key="index"
          :news-item="news"
          class="news-item"
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
.heading {
  text-align: center;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 6rem;
  color: snow;
}

.news-item {
  margin: 1rem;
}
</style>
