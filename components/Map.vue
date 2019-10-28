<template>
  <b-container fluid class="contact">
    <b-row class="sub-heading">
      <p class="mx-auto">Contact Us</p>
    </b-row>
    <b-row>
      <p>
        If you need to get in contact, you can do so on social media:
        <a href="https://www.instagram.com/southshieldssailingclub/">
          Facebook
        </a>
        and
        <a href="https://www.facebook.com/groups/SouthShieldsSailingClub/">
          Instagram
        </a>
      </p>
      <p>
        Alternatively, you can email us: secretary@soshields-sailing.co.uk or
        sailing@soshields-sailing.co.uk. We also have a telephone number which
        we'll answer when racing is on: 0191 456 5821
      </p>
    </b-row>
    <div id="map" class="map">
      <client-only>
        <l-map :zoom="15" :center="latLong">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="latLong"></l-marker>
        </l-map>
      </client-only>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      latLong: [55.006513, -1.428029]
    }
  }
}
</script>

<style>
.contact p {
  color: snow;
}

.contact a {
  color: snow;
  text-decoration: none;
}

.contact a:hover {
  color: rgb(206, 206, 206);
  text-decoration: none;
}

.map {
  height: 600px;
  width: auto;
  margin: 0px;
  margin-bottom: 1rem;
}
</style>
