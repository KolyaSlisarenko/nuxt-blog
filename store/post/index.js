import store from '~/plugins/store';

const NAMESPACE = 'post';

const types = {
  LOAD_POST: store.createType(NAMESPACE, 'loadPost')
};

export const state = () => ({
  post: {
    slug: '',
    path: '',
    title: '',
    description: null,
    updatedAt: null,
    createdAt: null,
  },

  [types.LOAD_POST.isLoading]: false
});

export const mutations = {
  [types.LOAD_POST.name]: store.createMutation(types.LOAD_POST, (state, data) => {
    state.post = data;
  })
};

export const actions = {
  loadPost: store.createAction(types.LOAD_POST, async function (postName) {
    return await this.$content('posts', postName).fetch();
  })
};
