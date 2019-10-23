<template>
  <div>
    <div id="nav-action" class="bars">
      <span class="bar"> </span>
    </div>
    <nav id="nav">
      <ul>
        <li class="shape-circle circle-one">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="shape-circle circle-two">
          <nuxt-link to="/news">News</nuxt-link>
        </li>
        <li class="shape-circle circle-three">
          <nuxt-link to="/join">Join</nuxt-link>
        </li>
        <li class="shape-circle circle-five">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      menuItems: ['News', 'About', 'Join', 'Contact', 'Results', 'Members'],
      lastClicked: 'click on something!',
      bars: null,
      nav: null
    }
  },
  mounted() {
    this.bars = document.getElementById('nav-action')
    this.nav = document.getElementById('nav')
    this.bars.addEventListener('click', this.barClicked, false)
  },
  methods: {
    barClicked() {
      this.bars.classList.toggle('active')
      this.nav.classList.toggle('visible')
    }
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  position: relative;
  background: url('http://thecodeplayer.com/u/m/b1.png') no-repeat center center
    fixed;
  background-size: cover;
  min-width: 500px;
  min-height: 200px;
  color: #fff;
  font-family: 'Montserrat';
  height: 100vmax;
}

.bars {
  /*   background-color:pink; */
  position: absolute;
  width: 27px;
  height: 27px;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 101;
  padding-top: 9px;
}

.bar {
  width: 100%;
  height: 4px;
  background-color: #fff;
  position: absolute;
}

span::before,
span::after {
  content: '';
  display: block;
  background-color: #fff;
  width: 100%;
  height: 4px;
  position: absolute;
}

.bar::before {
  transform: translateY(-9px);
}

.bar::after {
  transform: translateY(9px);
}

.bars.active .bar {
  background-color: transparent;
}

.bars.active span::before {
  animation: top-bar 1s;
  animation-fill-mode: forwards;
}

.bars.active span::after {
  animation: bottom-bar 1s;
  animation-fill-mode: forwards;
}

/* Navbar Links CSS */
#nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 1s;
  z-index: -1;
  overflow: hidden;
  opacity: 0;
}

#nav a {
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  line-height: 70vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-indent: 50vw;
  border-radius: 50%;
  transition: all 0.5s;
}

@media screen and (max-width: 850px) {
  #nav a {
    font-size: 1rem;
  }
}

#nav a:hover {
  background: #357ffd;
}

ul {
  list-style: none;
}

.visible {
  z-index: 100 !important;
  opacity: 1 !important;
}

.shape-circle {
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  top: -10vw;
  right: -10vw;
  position: absolute;
  transition: all 1s ease-in-out;
  background: #2979ff;
  box-shadow: 0 0px 0px rgba(4, 26, 62, 0.5);
}

nav.visible li:first-child {
  width: 200vw;
  height: 200vw;
  top: -100vw;
  right: -100vw;
  z-index: 5;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0px 80px rgba(4, 26, 62, 0.5);
}

nav.visible li:nth-child(2) {
  width: 150vw;
  height: 150vw;
  top: -75vw;
  right: -75vw;
  z-index: 6;
  transition: all 0.6s ease-in-out;
  box-shadow: 0 0px 80px rgba(4, 26, 62, 0.5);
}

nav.visible li:nth-child(3) {
  width: 100vw;
  height: 100vw;
  top: -50vw;
  right: -50vw;
  z-index: 7;
  transition: all 0.7s ease-in-out;
  box-shadow: 0 0px 80px rgba(4, 26, 62, 0.5);
}

nav.visible li:last-child {
  width: 50vw;
  height: 50vw;
  top: -25vw;
  right: -25vw;
  z-index: 8;
  transition: all 0.8s ease-in-out;
  box-shadow: 0 0px 80px rgba(4, 26, 62, 0.5);
}

nav.visible li:first-child a {
  line-height: 295vw !important;
  text-indent: 17vw !important;
}

nav.visible li:nth-child(2) a {
  line-height: 220vw !important;
  text-indent: 17vw !important;
}

nav.visible li:nth-child(3) a {
  line-height: 150vw !important;
  text-indent: 17vw !important;
}

nav.visible li:last-child a {
  line-height: 80vw !important;
  text-indent: 12vw !important;
}

@keyframes top-bar {
  50% {
    transform: translateY(0);
  }
  100% {
    transform: rotate(45deg) translateY(0);
  }
}

@keyframes bottom-bar {
  50% {
    transform: translateY(0);
  }
  100% {
    transform: rotate(-45deg) translateY(0);
  }
}
@media screen and (max-width: 800px) {
  h1 {
    padding-top: 80px;
    font-size: 60px;
  }
}
</style>
