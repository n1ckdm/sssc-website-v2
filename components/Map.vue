<template>
  <b-container fluid>
    <b-row class="sub-heading">
      <p class="mx-auto">Finding Us</p>
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
.map {
  height: 600px;
  width: auto;
  margin: 0px;
  overflow: hidden;
}
</style>
