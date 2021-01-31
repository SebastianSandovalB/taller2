import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "uno",
      },
      {
        id: 2,
        title: "dos",
      },
      {
        id: 3,
        title: "tres",
      },
    ],
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
  actions: {
    addTask({ commit }, task) {
      commit("add_task", task);
    },
    deleteTask({commit}, id) {
      commit("delete_task", id);
    },
    updateTask({commit}, task) {
      commit("update_task", task);
    },
  },
  mutations: {
    add_task(state, task) {
      state.tasks.push(task);
      console.log(task)
    },
    delete_task(state,id){
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
    update_task(state,task){
      let index = state.tasks.findIndex(t => t.id == task.id);
      console.log(index)
    },
  },

  modules: {
  }
})
