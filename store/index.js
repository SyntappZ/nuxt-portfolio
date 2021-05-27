import jump from "jump.js";

const state = () => ({
  prevTarget: null,
  aboutPosition: 0,
  skillsPosition: 0,
  projectsPosition: 0,
  contactPosition: 0
});

const getters = {};

const mutations = {
  updateTarget(state, target) {
    state.prevTarget = target;
  },
  setSelectionPosition(state, data) {
    const { section, position } = data;

    state[section] = position;
  }
};

const actions = {
  scrollTo({ commit, state }, target) {
    if (state.prevTarget !== target) {
      jump(target);
    }
    commit("updateTarget", target);
  },
  resetScroll({ commit }) {
    commit("updateTarget", null);
  },
  getSelectionPosition({ commit }, data) {
    commit("setSelectionPosition", data);
  }
};

export { state, getters, mutations, actions };
