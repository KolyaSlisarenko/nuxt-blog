<template>
  <footer>
    <div class="footer-links">
      <div
        v-for="(linksColumn, key) in linksColumns"
        :key="key"
        class="footer-links--column"
      >
        <nuxt-link
          v-for="link in linksColumn"
          :key="link.name"
          :to="link.params"
        >
          {{ link.title }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  /**
   * Name
   */
  name: 'Footer',

  /**
   * Data
   * @returns {{linksColumns: []}}
   */
  data () {
    return {
      linksColumns: [
        [
          { title: 'About us', params: this.getDefaultParams('about-us') },
          { title: 'Contact us', params: this.getDefaultParams('contact-us') },
          { title: 'Terms', params: this.getDefaultParams('terms') }
        ],
        [
          { title: 'Privacy policy', params: this.getDefaultParams('privacy-policy') },
          { title: 'Cookie settings', params: this.getDefaultParams('cookie-settings') }
        ],
      ]
    };
  },

  /**
   * Methods
   */
  methods: {
    getDefaultParams (slug) {
      return { name: 'category-slug', params: { category: 'static', slug } };
    }
  }
};
</script>

<style scoped lang="scss">
footer {
  background: #000000;
}

.footer-links {
  padding: 1em;
  display: flex;

  &--column {
    padding: 1em;
    flex-direction: column;
    display: flex;

    a {
      line-height: 2em;
      color: #ffffff;
    }
  }
}
</style>
