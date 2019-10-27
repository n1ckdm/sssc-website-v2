<template>
  <div>
    <video
      v-if="showVideo"
      id="video-background"
      playsinline
      autoplay
      loop
      muted
    >
      <source type="video/mp4" src="~/assets/sc_bg.mp4" />
      <source type="video/webm" src="~/assets/sc_bg.webm" />
    </video>
    <img
      v-else
      id="image-background"
      :class="{ darker: makeDark }"
      :src="require('~/assets/sc_bg.jpg')"
    />
  </div>
</template>

<script>
const useVideoDefault = false
const makeDarkDefault = false
export default {
  props: {
    usevideo: useVideoDefault,
    makeDark: makeDarkDefault
  },
  computed: {
    showVideo() {
      if (this.$props.usevideo) {
        return this.$props.usevideo && !this.$device.isMobile
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
#video-background {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: url(~assets/sc_bg.jpg) no-repeat;
  background-size: cover;
  background: rgba(0, 0, 0);
  filter: brightness(80%);
}

.darker {
  filter: brightness(30%);
}

#image-background {
  position: fixed;
  top: 20%;
  left: 50%;
  min-width: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  background-size: cover;
  background: rgba(0, 0, 0);
  filter: brightness(80%);
}
</style>
