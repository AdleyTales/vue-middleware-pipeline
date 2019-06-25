import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loginedIn: true,
            isSubscribed: false
        }
    },

    getters: {
        auth(state) {
            return state.user
        }
    }
})