<template>
  <b-card
    :title="newsItem.title"
    :img-src="newsItem.image"
    tag="article"
    class="mb-2 card"
  >
    <div>
      <p class="date">{{ date }}</p>
      <p class="description">{{ newsItem.description }}</p>
    </div>
  </b-card>
</template>

<script>
const defaultNewsItem = {
  title: '',
  date: Date.now().toString(),
  description: '',
  body: ''
}

export default {
  props: {
    newsItem: defaultNewsItem
  },
  computed: {
    date() {
      const date = new Date(this.newsItem.date)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style>
.card {
  max-width: 25rem;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.date {
  font-weight: bold;
}
</style>
