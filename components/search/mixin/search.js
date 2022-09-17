import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';

export default {
  /**
   * Computed
   */
  computed: {
    ...mapFields('search', {
      query: 'search.query',
      filters: 'search.filters'
    })
  },

  /**
   * Mounted
   */
  created () {
    this.setQuery();
    this.setFilters();
  },

  /**
   * Methods
   */
  methods: {
    ...mapActions('search', [
      'setQueryParam',
      'setSearchFilters',
      'loadPosts'
    ]),

    /**
     * Set query from search parameters
     */
    setQuery () {
      this.setQueryParam(this.$router.currentRoute.query.query || '');
    },

    /**
     * Set filters from search parameters
     */
    setFilters () {
      this.setSearchFilters((this.$router.currentRoute.query?.tags || '').split(','));
    },

    /**
     * On search query param is changed
     */
    onSearchEnter () {
      this.searchPosts();
    },

    /**
     * Search posts by query parameters
     */
    async searchPosts () {
      const tags = Object.keys(this.filters.tags);
      const queryParams = {
        query: this.query,
        filters: {
          tags
        }
      };

      await this.$router.push({
        name: 'search', query: {
          query: this.query,
          tags: tags.join(',')
        }
      });
      this.loadPosts(queryParams);
    }
  }
};
