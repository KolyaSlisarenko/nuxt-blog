<template>
  <main>
    <div class="main-hero">
      <container>
        <span class="fs-4em">
          <b>Learn with confidence</b>
        </span>
        <p class="fs-2em">
          Education makes a person a responsible citizen.
        </p>
      </container>
    </div>
    <container>
      <posts-listing :posts="posts" />
    </container>
  </main>
</template>

<script>
import Container from '~/layouts/default/Container';
import Listing from '~/components/posts/Listing';
import { mapState } from 'vuex';

export default {
  /**
   * Component name
   */
  name: 'Home',

  /**
   * Components
   */
  components: {
    postsListing: Listing,
    Container
  },

  /**
   * Load async data
   * @param params
   * @param dispatch
   * @returns {Promise<void>}
   */
  async asyncData ({ params, store: { dispatch } }) {
    await dispatch('post/loadHome', params.slug);
  },

  /**
   * Title
   * @returns {{title: string}}
   */
  head () {
    return {
      title: 'Home',
    };
  },

  /**
   * Computed properties
   */
  computed: {
    ...mapState('post', {
      posts: (state) => state.posts,
    }),
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.post-container {
  padding: 1em;
}

.main-hero {
  background: $main-mango-color;
  padding: 5em 0 3em 0;
}
</style>
