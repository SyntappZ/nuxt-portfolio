import jump from "jump.js";

const state = () => ({
  prevTarget: null
});

const getters = {
 
};

const mutations = {
    updateTarget(state, target) {
        state.prevTarget = target;
    }
};

const actions = {
  scrollTo({ commit, state }, target) {
    if (state.prevTarget !== target) {
      jump(target);
    }
    commit("updateTarget", target);
  },
  resetScroll({commit}) {
    commit("updateTarget", null);
  }
  
};

export { state, getters, mutations, actions };
