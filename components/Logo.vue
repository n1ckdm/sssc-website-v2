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
      if (this.window.width < 749) {
        return 'Souths Shields SC'
      }
      if (this.window.width >= 749) {
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
  font-family: 'Monoton', cursive;
  font-size: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media screen and (max-width: 1095px) {
  .Logo {
    font-size: 6.5rem;
  }
}

@media screen and (max-width: 748px) {
  .Logo {
    font-size: 6.5rem;
  }
}

@media screen and (max-width: 519px) {
  .Logo {
    font-size: 8rem;
  }
}
</style>
