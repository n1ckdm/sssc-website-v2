<template>
  <b-card
    :title="newsItem.title"
    :img-src="newsItem.image"
    tag="article"
    class="mb-2 ni-card"
    @click="newsShow = !newsShow"
  >
    <div>
      <p class="date">{{ date }}</p>
      <p class="description">{{ newsItem.description }}</p>
    </div>
    <b-modal v-model="newsShow" :title="newsItem.title">
      <template v-slot:modal-footer>
        <button style="display:none;" />
      </template>
      <b-img :src="newsItem.image" fluid-grow :alt="newsItem.title" />
      <div>
        <p class="date">{{ date }}</p>
        <p class="description">{{ newsItem.description }}</p>
      </div>
      <!-- eslint-disable-next-line -->
      <div class="markdown" v-html="$md.render(newsItem.body)"></div>
    </b-modal>
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
.ni-card {
  max-width: 25rem;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.ni-card:hover {
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

.markdown p {
  color: black;
}

.markdown img {
  width: 400px;
}
</style>
