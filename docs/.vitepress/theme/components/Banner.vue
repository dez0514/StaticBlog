<template>
  <div class="banner" :style="{
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }"></div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  src: string;
}>()
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .banner {
    height: 220px;
  }
}
@media (min-width: 768px) {
  .banner {
    height: 220px;
  }
}
@media (min-width: 960px) {
  .banner {
    height: 350px;
  }
}
</style>