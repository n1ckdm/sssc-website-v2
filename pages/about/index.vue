<template>
  <div>
    <Background />
    <Menu />
    <b-row><p class="heading mx-auto">About</p></b-row>
    <Committee />
  </div>
</template>

<script>
import Background from '~/components/Background'
import Menu from '~/components/Menu'
import Committee from '~/components/Committee'

export default {
  components: {
    Background,
    Menu,
    Committee
  }
}
</script>
