export default {
  /**
   * Create type
   * @param namespace
   * @param type
   * @returns {{isLoading: string, SUCCESS: string, name, namespace, ERROR: string, PENDING: string, FAILURE: string}}
   */
  createType: (namespace, type) => ({
    SUCCESS: `${type}Success`,
    FAILURE: `${type}Failure`,
    PENDING: `${type}Pending`,
    isLoading: `${type}Loading`,
    ERROR: `${type}Error`,
    name: type,
    namespace
  }),

  /**
   * Create action
   * @param type
   * @param callback
   * @returns {function(*, *): Promise<*>}
   */
  createAction: function (type, callback) {
    return async function (store, payload) {
      store.state[type.isLoading] = true;
      const response = await callback.call(this, payload);
      this.commit(`${type.namespace}/${type.name}`, response, payload);
      store.state[type.isLoading] = false;

      return response;
    };
  },

  /**
   * Create mutation
   * @param type
   * @param callback
   * @returns {function(*, *): Promise<*>}
   */
  createMutation: function (type, callback) {
    return async function (store, payload) {
      //TODO::Add success, fail, pending, error handling
      return await callback.call(this, store, payload);
    };
  }
};
