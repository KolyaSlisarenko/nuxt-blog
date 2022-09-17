<template>
  <main>
    <container>
      <div class="search-results">
        <filters
          v-if="hasPosts"
          class="filters-container"
          @filter-selected="onFilterSelected"
          @filter-deselected="onFilterDeselected"
        />
        <posts-listing
          v-if="hasPosts"
          :posts="posts"
        />
        <div v-if="!hasPosts">
          Sorry, we couldn't find any results for "{{ query }}"
        </div>
      </div>
    </container>
  </main>
</template>

<script>
import Container from '~/layouts/default/Container';
import Listing from '~/components/posts/Listing';
import Filters from '~/components/search/Filters';
import search from '~/components/search/mixin/search';
import { mapActions, mapState } from 'vuex';

export default {
  /**
   * Component name
   */
  name: 'Search',

  /**
   * Components
   */
  components: {
    postsListing: Listing,
    Filters,
    Container
  },

  /**
   * Mixins
   */
  mixins: [search],

  /**
   * Before route leave
   */
  beforeRouteLeave (to, from, next) {
    this.setQueryParam('');
    next();
  },

  /**
   * Async data
   * @param query
   * @param dispatch
   * @returns {Promise<void>}
   */
  async asyncData ({ store: { dispatch } }) {
    await dispatch('search/loadFilters');
  },

  /**
   * Head properties
   * @returns {{title: string}}
   */
  head () {
    return {
      title: 'Search',
    };
  },

  /**
   * Computed properties
   */
  computed: {
    ...mapState('search', {
      posts: (state) => state.posts,
    }),

    /**
     * Has posts
     * @returns {number}
     */
    hasPosts () {
      return this.posts.length;
    }
  },

  /**
   * Created hook
   * @returns {Promise<void>}
   */
  async created () {
    await this.searchPosts();
  },

  /**
   * Methods
   */
  methods: {
    ...mapActions('search', [
      'setQueryParam',
      'addFilter',
      'removeFilter'
    ]),

    /**
     * On filter selected
     * @param filter
     */
    async onFilterSelected (filter) {
      await this.addFilter(filter);
      await this.searchPosts();
    },

    /**
     * On filter deselected
     * @param filter
     */
    async onFilterDeselected (filter) {
      await this.removeFilter(filter);
      await this.searchPosts();
    },
  },
};
</script>

<style lang="scss">
.search-results {
  display: flex;
  padding: 1em;

  .filters-container {
    flex: auto 0 0;
  }
}
</style>
