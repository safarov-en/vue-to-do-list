import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            tasks: localStorage.getItem('my-tasks') ? JSON.parse(localStorage.getItem('my-tasks')) : []
        }
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        tasksLength(state) {
            return state.tasks.length
        },
        activeTasks(state) {
            return state.tasks.filter((item) => item.status === 'active').length
        }
    },
    mutations: {
        addTask(state, payload) {
            state.tasks.push(payload)
            localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
        },
        changeStatus(state, payload) {
            state.tasks.map((item) => {
                if(item.id === payload.id) {
                    item.status = payload.status;
                }
                return state.tasks
            })
            localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
        }
    }
})