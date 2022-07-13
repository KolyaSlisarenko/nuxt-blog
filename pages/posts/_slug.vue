<template>
  <article>
    <nuxt-content :document="article"/>
  </article>
</template>

<script>
export default {
  data () {
    return {
      article: null
    };
  },
  async asyncData ({ $content, params }) {
    try {
      const article = await $content('posts', params.slug).fetch();

      return { article };
    } catch (exception) {
      if (exception?.response?.status === 404) {
        this.$router.push({ name: 'posts-notFound' });
      }
    }
  }
};
</script>
