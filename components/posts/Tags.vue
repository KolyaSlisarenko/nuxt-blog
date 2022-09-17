<template>
  <div class="tags-container">
    <div
      v-for="tag in tags"
      :key="tag"
      class="tag"
    >
      <span class="tag-text">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Component name
   */
  name: 'Tags',

  /**
   * Properties
   */
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.tags-container {
  display: flex;
  flex-flow: wrap;

  .tag {
    margin-right: 0.5em;
    line-height: 1.5em;
    transition: background 300ms ease 0s;

    .tag-text {
      padding: 0.1em 0.5em 0.1em 0.5em;
      border-radius: 5%;
      background: $main-gray-color--light;

      &:hover {
        background: $main-gray-color--light--accent;
      }
    }
  }
}
</style>
