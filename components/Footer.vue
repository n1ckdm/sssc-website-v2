<template>
  <b-navbar toggleable="xs" fixed="bottom" variant="faded">
    <a href="https://www.coacha.co.uk/">
      <img
        class="coacha-logo"
        :src="require('~/assets/coacha-NFP-award.png')"
      />
    </a>
    <span>
      Made by <a class="me" href="http://nickdmartin.com/">Nick Martin</a>
    </span>
    <a href="https://www.facebook.com/groups/SouthShieldsSailingClub/">
      <i class="fab fa-facebook-square fa-3x"></i>
    </a>
  </b-navbar>
</template>

<style>
.coacha-logo {
  height: 80px;
}

span {
  color: snow;
}

.me {
  color: snow;
  text-decoration: none;
}

.me:hover {
  color: snow;
  text-decoration: none;
}
</style>
