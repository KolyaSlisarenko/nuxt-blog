<template>
  <div>
    <h1>Post #{{ id }}</h1>
    <PostComponent v-if="post" :post="post"></PostComponent>
  </div>
</template>

<script>
import PostComponent from '../../../components/posts/post.vue';

export default {
  name: 'Post',
  data () {
    return {
      id: this.$route.params.id,
      post: {},
    };
  },
  async created () {
    try {
      const result = await this.$axios.get(`posts/${this.id}.json`);
      this.post = result.data.data;
    } catch (exception) {
      if (exception?.response?.status === 404) {
        this.$router.push({ name: 'posts-notFound' });
      }
    }

  },
  components: { PostComponent },
};
</script>
