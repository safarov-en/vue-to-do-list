import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            tasks: []
        }
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        tasksLength(state) {
            return state.tasks.length
        }
    },
    mutations: {
        addTask(state, payload) {
            state.tasks = [...state.tasks, payload]
        }
    }
})