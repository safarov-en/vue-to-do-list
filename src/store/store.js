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
        }
    }
})