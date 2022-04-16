<template lang="">
  <div class="header">
    <div class="header__title">Pharmacology &amp; Pathophysiology</div>
    <p class="header__subtitle">Interactive tool to help you learn</p>
  </div>
</template>
<script>
export default {
  name: "TopHeader",
};
</script>
<style>
.header {
  color: white;
}

.header__title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 73px;
  text-align: center;
}

.header__subtitle {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 49px;
  /* identical to box height */

  text-align: center;
}
</style>
