<template>
  <div class="about-page">
    <div class="banner-wrap">
      <banner :src="bg" />
    </div>
    <div>
      <div class="title">关于我</div>
      <div>一个微不足道的青年</div>
      <div style="margin-top: 5px;">Be kind</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import banner from '../components/Banner.vue'
// @ts-ignore
import bg from '/test.jpg'
</script>
<style lang="scss" scoped>
.title {
  padding-top: 32px;
  padding-bottom: 16px;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(234, 234, 234, 0.75);
}
.about-page {
  width: 800px;
  margin: 0 auto;
}
@media (max-width: 800px) {
  .about-page {
    width: 100%;
  }
}
@media (max-width: 640px) {
  .about-page {
    padding: 0 24px;
    .banner-wrap {
      margin-top: 24px;
    }
  }
}
@media (min-width: 640px) {
  .about-page {
    padding: 0 48px;
    .banner-wrap {
      margin-top: 48px;
    }
  }
}
@media (min-width: 960px) {
  .about-page {
    padding: 0 64px;
    .banner-wrap {
      margin-top: 64px;
    }
  }
}

</style>