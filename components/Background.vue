<template>
  <div>
    <video
      id="video-background"
      :poster="require('~/assets/sc_bg.jpg')"
      playsinline
      autoplay
      loop
      muted
    >
      <source type="video/mp4" src="~/assets/sc_bg.mp4" />
      <source type="video/webm" src="~/assets/sc_bg.webm" />
    </video>
  </div>
</template>

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
  background: rgba(0, 0, 0, 0);
}
</style>
