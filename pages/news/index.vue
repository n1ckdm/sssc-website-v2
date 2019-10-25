<template>
  <div class="newslist">
    <Menu />
    <h1>News</h1>
    <NewsItem
      v-for="(news, index) in newsItems"
      :key="index"
      :newsItem="news"
    />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import NewsItem from '~/components/NewsItem'

export default {
  components: {
    Menu,
    NewsItem
  },
  computed: {
    newsItems() {
      return this.$store.state.newsItems
    }
  }
}
</script>
