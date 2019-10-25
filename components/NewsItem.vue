<template>
  <b-card :title="newsItem.title">
    <h5>{{ newsItem.date }}</h5>
    <h6>{{ newsItem.description }}</h6>
    <div class="markdown" v-html="$md.render(newsItem.body)" />
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
  }
}
</script>

<style>
.markdown img {
  width: 400px;
}

.card {
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 5vh;
  margin: 0;
}
</style>
