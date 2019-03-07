import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        isLogin: false,
        username: '',
    },
    getters:{
        caseLogin: state => {
            if(window.localStorage.isLogin == 'true'){
                state.isLogin = true
            }
            state.username = window.localStorage.username
        }
    },
    mutations:{
        resetLogin: (state,payload) => {
            state.isLogin = payload
            window.localStorage.setItem('isLogin',payload)
        },
        resetName: (state,payload) => {
            state.username = payload
            window.localStorage.setItem('username',payload)
        },
    },
    actions:{

    }
})

export default store;