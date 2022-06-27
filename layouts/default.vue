<template>
  <div class="container">
    <TheHeader/>
    <Nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/layouts/default/TheHeader.vue';
import TheFooter from '../components/layouts/default/TheFooter.vue';

export default {
  name: 'DefeaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped="scss">
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
