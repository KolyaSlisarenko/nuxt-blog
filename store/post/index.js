/**
 * Store plugin
 */
import store from '~/plugins/store';

/**
 * Default vuex getter and mutations
 */
import { getField, updateField } from 'vuex-map-fields';

/**
 * Modules namespace
 * @type {string}
 */
const NAMESPACE = 'post';

/**
 * Module types
 */
const types = {
  LOAD_POST: store.createType(NAMESPACE, 'loadPost'),
  LOAD_HOME: store.createType(NAMESPACE, 'loadHome')
};

/**
 * Module state
 */
export const state = () => ({
  post: {
    slug: '',
    path: '',
    title: '',
    description: null,
    updatedAt: null,
    createdAt: null,
  },
  posts: [],

  [types.LOAD_POST.isLoading]: false,
  [types.LOAD_HOME.isLoading]: false
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
 * @type {*}
 */
export const mutations = {
  /**
   * Set post
   */
  ...store.createMutation(types.LOAD_POST, {
    success (state, data) {
      state.post = data;
    }
  }),

  /**
   * Set home page posts
   */
  ...store.createMutation(types.LOAD_HOME, {
    success (state, data) {
      state.posts = data;
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
   * Load posts from content dir by category and slug
   */
  [types.LOAD_POST.name]: store.createAction(types.LOAD_POST, async function (params) {
    return await this.$content(params.category, params.slug).fetch();
  }),

  /**
   * Load latest 12 posts from content/posts directory
   */
  [types.LOAD_HOME.name]: store.createAction(types.LOAD_HOME, async function () {
    return await this.$content('posts', { deep: true }).sortBy('createdAt', 'asc').limit(12).fetch();
  })
};
