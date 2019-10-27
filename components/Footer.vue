<template>
  <footer>
    <b-container>
      <b-row>
        <b-col class="col">
          <img
            class="coacha-logo"
            :src="require('~/assets/coacha-NFP-award.png')"
          />
          &nbsp;&nbsp;Made by&nbsp;
          <a class="me" href="http://nickdmartin.com/">Nick Martin</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.facebook.com/groups/SouthShieldsSailingClub/">
            <i class="fab fa-facebook-square fa-3x"></i>
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
  transform: translateY(10px);
}

footer {
  position: fixed;
  bottom: 5rem;
  width: 100%;
  height: 2.5rem;
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
  height: 60px;
}
</style>
