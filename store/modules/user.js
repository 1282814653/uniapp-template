export default {
	namespaced: true,
	state: {
		token: "",
		hosId: "",
		hosName: ""
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.hosId = token
		},
		SET_HOSID(state, id) {
			state.hosId = id
		},
		SET_HOSNAME(state, name) {
			state.hosName = name
		},
		RESET(state) {
			state.token = null
			state.hosId = null
			state.hosName = null
		}
	},
	actions: {

	}
}
