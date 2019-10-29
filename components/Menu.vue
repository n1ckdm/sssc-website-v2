<template>
  <b-navbar toggleable="lg" variant="faded">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/join">Join</b-nav-item>
        <b-nav-item href="/news">News</b-nav-item>
        <b-nav-item href="/about">About</b-nav-item>
        <b-nav-item href="/racing">Racing</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.navbar-light .navbar-nav .nav-link {
  color: snow;
}

.navbar-light .navbar-toggler {
  color: rgba(255, 250, 250, 0.4);
  border-color: rgba(255, 250, 250, 0.4);
}
</style>
