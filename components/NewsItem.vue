<template>
  <div>
    <b-card
      :title="newsItem.title"
      :img-src="newsItem.image"
      tag="article"
      class="mb-2 card"
      @click="newsShow = !newsShow"
    >
      <div>
        <p class="date">{{ date }}</p>
        <p class="description">{{ newsItem.description }}</p>
      </div>
    </b-card>
    <b-modal v-model="newsShow">Hello From Modal!</b-modal>
  </div>
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
  data() {
    return {
      newsShow: false
    }
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.card:hover {
  box-shadow: 0px 15px 30px rgba(32, 32, 75, 0.5),
    0 10px 10px rgba(32, 32, 75, 0.5);
  cursor: pointer;
}

.date {
  font-weight: bold;
}

.description {
  font-style: italic;
}
</style>
