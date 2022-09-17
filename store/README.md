Module store example:

```js
/**
 * It's requred to use store plugin
 */
import store from '~/plugins/store';

/**
 * It's required to use vuex default getters and mutations
 */
import { getField, updateField } from 'vuex-map-fields';

/**
 * Modules namespace. It's required to create namespace constant
 * for indentifying methods with the same name in different modules
 * @type {string}
 */
const NAMESPACE = 'namespace';

/**
 * Module action type
 * @type  ACTION: {
 * SUCCESS: actionSuccess,
 * FAILURE: actionFailure,
 * PENDING: actionPending,
 * isLoading: actionLoading,
 * ERROR: actionError,
 * name: action,
 * namespace: search
 * }
 */
const types = {
  ACTION: store.createType(NAMESPACE, 'action')
}

/**
 * Module state
 * @returns {{}}
 */
export const state = () => ({});

/**
 * Module getters
 * @type {{}}
 */
export const getters = {
  getField
};

/**
 * Module mutations
 * @type {*&{updateField: updateField}}
 */
export const mutations = {
  updateField,

  ...store.createMutation(types.ACTION, {
    success (state, data) {

    }
  }),
};

/**
 * Module actions
 * @type {{}}
 */
export const actions = {
  /**
   * Action
   */
  [types.ACTION.name]: store.createAction(types.ACTION, query => query),
};
```
