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
      this.commit(`${type.namespace}/${type.isLoading}`, true);
      const response = await callback.call(this, payload);
      this.commit(`${type.namespace}/${type.name}`, response, payload);
      this.commit(`${type.namespace}/${type.isLoading}`, false);

      return response;
    };
  },

  /**
   * Create mutation
   * @param type
   * @param callbacks
   * @returns {{}}
   */
  createMutation: function (type, callbacks) {
    const mutations = {
      [type.name]: async function (store, payload) {
        //TODO::Add success, fail, pending, error handling
        return await callbacks.success.call(this, store, payload);
      },
    };

    if (type.isLoading) {
      mutations[type.isLoading] = async function (store, isLoading) {
        store[type.isLoading] = isLoading;
      };
    }

    return mutations;
  },
};
