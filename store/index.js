import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		address: "",
	},
	getters: {
		isLogin: state => Object.keys(state.member).length > 0	//是否登录
	},
	mutations: {
		SET_ADDRESS(state, address) {
			state.address = address
		},
	},
	actions: {
		async getStore({commit}) {
			const store = await api('store')
			commit('SET_STORE', store)
		}
	}
})

export default store