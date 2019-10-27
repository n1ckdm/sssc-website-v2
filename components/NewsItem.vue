<template>
  <div class="news-item">
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
    <b-modal
      id="modal-xl modal-scrollable"
      v-model="newsShow"
      scrollable
      size="xl"
      :title="newsItem.title"
    >
      <template v-slot:modal-footer>
        <button style="display:none;" />
      </template>
      <img class="main-img" :src="newsItem.image" />
      <hr />
      <div>
        <p class="date">{{ date }}</p>
        <p class="description">{{ newsItem.description }}</p>
      </div>
      <!-- eslint-disable-next-line -->
      <div class="markdown" v-html="$md.render(newsItem.body)"></div>
    </b-modal>
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
.news-item .card {
  max-width: 25rem;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.news-item .card:hover {
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

.main-img {
  width: 400px;
}

.markdown img {
  width: 400px;
}
</style>
