import { createStore } from 'vuex';

export default createStore({
  state: {
    PreviewConfig: null,
  },
  mutations: {
    SET_PREVIEW_CONFIG(state, conf) {
      state.PreviewConfig = conf;
    },
  },
  actions: {
  },
  modules: {},
});
