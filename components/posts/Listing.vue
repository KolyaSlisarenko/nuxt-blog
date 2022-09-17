<template>
  <div class="posts-container">
    <nuxt-link
      v-for="post in posts"
      :key="post.id"
      :to="post.path"
      class="post-container"
    >
      <span><b>{{ post.title }}</b></span>
      <span>{{ formatDescription(post.description) }}</span>
      <tags
        v-if="post.tags"
        :tags="post.tags"
      />
      <span class="post-date">{{ formatTime(post.updatedAt) }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import Tags from '~/components/posts/Tags';

const MAX_DESCRIPTION_LENGTH = 60;

export default {
  /**
   * Name
   */
  name: 'Listing',

  /**
   * Components
   */
  components: {
    Tags
  },

  /**
   * Props
   */
  props: {
    /**
     * Home page posts
     */
    posts: {
      type: Array,
      required: true,
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Format time to exact format
     * @param time
     * @returns {string}
     */
    formatTime (time) {
      return new Date(time).toDateString();
    },

    /**
     * Format post description
     * @param description
     * @returns {string|*}
     */
    formatDescription (description) {
      return description && description.length > MAX_DESCRIPTION_LENGTH
        ? description.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
        : description;
    }
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.posts-container {
  display: flex;
  flex-flow: wrap;

  .post-container {
    width: 30%;
    line-height: 2em;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .post-date {
      color: $main-gray-color;
    }
  }
}
</style>
