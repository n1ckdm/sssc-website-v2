<template>
  <div>
    <Background />
    <Menu />
    <b-container fluid>
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

.news-item {
  margin: 0.5rem;
}
</style>
