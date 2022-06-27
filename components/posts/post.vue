<template>
  <div>
    <nuxt-link :to="{ name: 'posts-id', params: {id: post.id}}">{{post.text}}</nuxt-link>
    <div style="display: flex; justify-content: space-between">
      <span v-for="tag in post.tags" :key="tag"># {{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>
