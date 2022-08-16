<template>
  <article>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async asyncData ({ params, store: { dispatch } }) {
    await dispatch('post/loadPost', params.slug);
  },

  computed: {
    ...mapState('post', {
      post: (state) => state.post
    })
  },
};
</script>
