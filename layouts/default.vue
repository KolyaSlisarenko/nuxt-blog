<template>
  <div class="default-layout">
    <default-header />
    <Nuxt />
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

<style lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    flex: 1;
  }
}

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
