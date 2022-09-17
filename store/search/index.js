/**
 * Store plugin
 */
import store from '~/plugins/store';

/**
 * Default vuex getter and mutations
 */
import { getField, updateField } from 'vuex-map-fields';

/**
 * Module namespace
 * @type {string}
 */
const NAMESPACE = 'search';

/**
 * Module types
 */
const types = {
  SET_QUERY_PARAM: store.createType(NAMESPACE, 'setQueryParam'),
  LOAD_POSTS: store.createType(NAMESPACE, 'loadPosts'),
  LOAD_FILTERS: store.createType(NAMESPACE, 'loadFilters'),
  ADD_FILTER: store.createType(NAMESPACE, 'addFilter'),
  REMOVE_FILTER: store.createType(NAMESPACE, 'removeFilter'),
  SET_SEARCH_FILTERS: store.createType(NAMESPACE, 'setSearchFilters'),
};

/**
 * Module state
 */
export const state = () => ({
  posts: [],
  filters: {
    tags: []
  },
  search: {
    query: '',
    filters: {
      tags: {}
    }
  },

  [types.LOAD_POSTS.isLoading]: false,
});

/**
 * Module getters
 * @type {{getField: ((function(*): function(*): *)|*)}}
 */
export const getters = {
  getField
};

/**
 * Module mutations
 * @type {*&{updateField: updateField}}
 */
export const mutations = {
  /**
   * Set searched posts
   */
  ...store.createMutation(types.LOAD_POSTS, {
    success (state, data) {
      state.posts = data;
    }
  }),

  /**
   * Set search query string
   */
  ...store.createMutation(types.SET_QUERY_PARAM, {
    success (state, data) {
      state.search.query = data;
    }
  }),

  /**
   * Set search filters
   */
  ...store.createMutation(types.LOAD_FILTERS, {
    success (state, data) {
      state.filters.tags = data.reduce((acc, current) => {
        return [...acc, ...current.tags.filter(item => !acc.includes(item))];
      }, []);
    }
  }),

  /**
   * Add selected tag to search filters. This tag will take a part in search result
   */
  ...store.createMutation(types.ADD_FILTER, {
    success (state, data) {
      state.search.filters.tags[data] = true;
    }
  }),

  /**
   * Remove selected tag from search filters. This tag won't take a part in search result
   */
  ...store.createMutation(types.REMOVE_FILTER, {
    success (state, data) {
      delete state.search.filters.tags[data];
    }
  }),

  /**
   * Set available tags filters
   */
  ...store.createMutation(types.SET_SEARCH_FILTERS, {
    success (state, tags) {
      tags.forEach(item => {
        state.search.filters.tags[item] = true;
      });
    }
  }),

  updateField
};

/**
 * Module actions
 * @type {{}}
 */
export const actions = {
  /**
   * Set query param
   */
  [types.SET_QUERY_PARAM.name]: store.createAction(types.SET_QUERY_PARAM, query => query),

  /**
   * Add filter
   */
  [types.ADD_FILTER.name]: store.createAction(types.ADD_FILTER, filter => filter),

  /**
   * Remove filter
   */
  [types.REMOVE_FILTER.name]: store.createAction(types.REMOVE_FILTER, filter => filter),

  /**
   * Set search filters
   */
  [types.SET_SEARCH_FILTERS.name]: store.createAction(types.SET_SEARCH_FILTERS, filter => filter),

  /**
   * Load search posts
   */
  [types.LOAD_POSTS.name]: store.createAction(types.LOAD_POSTS, async function (params) {
    let query = await this.$content('posts')
      .search('title', params.query);
    const tags = params?.filters?.tags?.filter(item => !!item);

    if (tags.length) {
      query = query.where({ 'tags': { $containsAny: params.filters.tags } });
    }

    return query.fetch();
  }),

  /**
   * Load all posts filter
   */
  [types.LOAD_FILTERS.name]: store.createAction(types.LOAD_FILTERS, async function () {
    return await this.$content('posts')
      .only(['tags'])
      .fetch();
  }),
};
