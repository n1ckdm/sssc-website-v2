<template>
  <footer>
    <b-container fluid>
      <b-row>
        <b-col class="col">
          <img
            class="coacha-logo"
            :src="require('~/assets/coacha-NFP-award.png')"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Made by&nbsp;
          <a class="me" href="http://nickdmartin.com/">Nick Martin</a>
          <i class="material-icons">favorite_border</i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.facebook.com/groups/SouthShieldsSailingClub/">
            <i class="fab fa-facebook-square fa-5x"></i>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style>
.fa:hover {
  opacity: 0.7;
}

.fa-facebook-square {
  color: #4367b2;
  transform: translateY(30px);
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: snow;
  font-weight: bold;
  text-align: center;
}

footer .me {
  color: snow;
  text-decoration: none;
}

footer .me:hover {
  color: snow;
  text-decoration: none;
}

footer i {
  transform: translateY(5px);
}

.coacha-logo {
  height: 90px;
}
</style>
