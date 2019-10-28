<template>
  <div class="section">
    <b-row>
      <p class="sub-heading mx-auto">{{ content.sub_heading }}</p>
    </b-row>
    <b-row>
      <b-col v-if="even" md="12" lg="6">
        <!-- eslint-disable-next-line -->
        <div class="markdown" v-html="$md.render(content.body)"></div>
      </b-col>
      <b-col md="12" lg="6">
        <b-img :src="content.image" fluid-grow :alt="content.sub_heading" />
      </b-col>
      <b-col v-if="!even" md="12" lg="6">
        <!-- eslint-disable-next-line -->
        <div class="markdown" v-html="$md.render(content.body)"></div>
      </b-col>
    </b-row>
  </div>
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
      return this.index % 2 !== 0
    }
  }
}
</script>

<style>
.row {
  margin-left: 0px;
  margin-right: 0px;
}

.markdown {
  color: snow;
  font-size: 1.2rem;
}

.markdown img {
  width: 400px;
}

.section {
  margin-bottom: 2rem;
}
</style>
