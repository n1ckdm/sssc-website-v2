<template>
  <b-container fluid class="section">
    <b-row>
      <p class="sub-heading"></p>
    </b-row>
    <b-row>
      <b-col v-if="even">
        <!-- eslint-disable-next-line -->
        <div class="markdown" v-html="$md.render(content.body)"></div>
      </b-col>
      <b-col>
        <b-img :src="content.image" fluid-grow :alt="content.sub_heading" />
      </b-col>
      <b-col v-if="!even">
        <!-- eslint-disable-next-line -->
        <div class="markdown" v-html="$md.render(content.body)"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
const defaultContent = {
  sub_heading: '',
  image: '',
  body: ''
}
const defaultIndex = 0
export default {
  props: {
    content: defaultContent,
    index: defaultIndex
  },
  computed: {
    even() {
      return this.index % 2 === 0
    }
  }
}
</script>

<style>
.section .markdown img {
  width: 400px;
}
</style>
