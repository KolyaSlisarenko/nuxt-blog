<template>
  <div>
    <h1>Posts page</h1>
    <!-- Auto import by directory structure component name -->
    <PostsPost v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  head () {
    return {
      title: 'Posts',
    };
  },
  data () {
    return {
      posts: [],
    };
  },
  async created () {
    const response = await this.$axios.get('posts.json');
    this.posts = response.data.data;
  },
};
</script>
