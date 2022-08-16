<template>
  <div>
    <default-header />
    <div class="container">
      <Nuxt />
    </div>
    <default-footer />
  </div>
</template>

<script>
import Header from '@/layouts/default/Header';
import Footer from '@/layouts/default/Footer';

export default {
  /**
   * Name
   */
  name: 'DefaultLayout',

  /**
   * Components
   */
  components: {
    DefaultHeader: Header,
    DefaultFooter: Footer
  }
};
</script>

<style>
body {
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: auto;
}

* {
  font-family: Georgia;
}
</style>
