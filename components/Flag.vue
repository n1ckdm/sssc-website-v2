<template>
  <div class="mx-auto">
    <svg viewBox="-50 -75 400 300">
      <polygon class="flag-tri" points="0,0, 300,100 0,200" />
      <polygon
        class="flag-mark"
        points="120,35, 170,52 150,110 170,167 120,183 100,110"
      />
    </svg>
  </div>
</template>

<style>
svg {
  margin-top: -2.5rem;
  width: 310px;
  height: 100%;
}

.flag-tri {
  fill: rgba(65, 105, 225, 0.8);
  transform: translate(10px, 10px);
}

.flag-mark {
  fill: rgba(255, 250, 250, 0.7);
  transform: translate(-12px, 0px);
}
</style>
