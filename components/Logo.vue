<template>
  <div class="Logo">
    {{ title }}
  </div>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    title() {
      if (this.window.width < 520) {
        return 'SSSC'
      }
      if (this.window.width < 1100) {
        return 'Souths Shields SC'
      }
      if (this.window.width >= 1101) {
        return 'South Shields Sailing Club'
      }
      return ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
})
</script>

<style>
.Logo {
  font-family: 'Quicksand', sans-serif;
  font-size: 8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
  color: #000000;
}

@media screen and (max-width: 1400px) {
  .Logo {
    font-size: 6rem;
    margin-left: 5%;
    margin-right: 5%;
  }
}

@media screen and (max-width: 748px) {
  .Logo {
    font-size: 6.5rem;
    margin-left: 2%;
    margin-right: 2%;
  }
}

@media screen and (max-width: 519px) {
  .Logo {
    font-size: 8rem;
    margin-left: 0%;
    margin-right: 0%;
  }
}
</style>
