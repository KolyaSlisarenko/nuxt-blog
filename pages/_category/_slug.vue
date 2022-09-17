<template>
  <main>
    <article>
      <container>
        <h2>{{ post.title }}</h2>
        <nuxt-content :document="post" />
      </container>
    </article>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Container from '~/layouts/default/Container';

export default {
  /**
   * Components
   */
  components: {
    Container
  },

  /**
   * Load async data
   * @param params
   * @param dispatch
   * @returns {Promise<void>}
   */
  async asyncData ({ params, store: { dispatch } }) {
    await dispatch('post/loadPost', params);
  },

  /**
   * Computed properties
   */
  computed: {
    ...mapState('post', {
      post: (state) => state.post
    })
  },
};
</script>
