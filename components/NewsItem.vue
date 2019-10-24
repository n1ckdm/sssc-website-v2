<template>
  <div>
    <h1>{{ newsItem.title }}</h1>
    <h5>{{ newsItem.date }}</h5>
    <h6>{{ newsItem.description }}</h6>
    <div class="markdown" v-html="$md.render(newsBody)" />
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
  computed: {
    newsBody() {
      console.log(this.newsItem.body)
      return this.newsItem.body
    }
  }
}
</script>

<style>
.markdown img {
  width: 400px;
}
</style>
