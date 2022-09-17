<template>
  <div>
    <p><b>Filters</b></p>
    <div
      v-if="allFilters.tags"
      class="filters-section-container"
    >
      <span><b>Tags</b></span>
      <hr>
      <div
        v-for="filter in allFilters.tags"
        :key="filter"
        class="filter-container"
      >
        <input
          :id="filter"
          :checked="isFilterActive(filter)"
          type="checkbox"
          name="tags"
          @change="onFilterChange($event, filter)"
        >
        <label
          :for="filter"
          v-text="filter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  /**
   * Name
   */
  name: 'Filters',

  /**
   * Computed
   */
  computed: {
    ...mapState('search', {
      allFilters: (state) => state.filters,
      selectedFilters: (state) => state.search.filters
    })
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Filter changed
     * @param event
     * @param filter
     */
    onFilterChange (event, filter) {
      if (event.target.checked) {
        this.$emit('filter-selected', filter);
      } else {
        this.$emit('filter-deselected', filter);
      }

      this.$emit('filter-changed', filter);
    },

    /**
     * Is filter active
     * @param filter
     * @returns {boolean}
     */
    isFilterActive (filter) {
      return this.selectedFilters.tags[filter] === true;
    }
  }
};
</script>

<style scoped lang="scss">
.filter-container {
  padding: 0.5em;
}
</style>
