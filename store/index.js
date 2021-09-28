import Vue from 'vue'
import Vuex from 'vuex'
import createVuexPersistedState from "vuex-persistedstate";
const files = require.context('./modules', false, /.js$/);
const modules = {};
files.keys().forEach(key => {
	modules[key.replace(/(\.js|\.\/)/g, '')] = files(key).default
});

Vue.use(Vuex)

const store = new Vuex.Store({
	modules,
	plugins: [
		createVuexPersistedState ({
			// key:'vuexCache',
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key, value) => uni.setStorageSync(key, value),
				removeItem: key => uni.removeStorageSync(key)
			},
			reducer (state){
				return {
					user:{
						token:state.user.token,
						hosId:state.user.hosId,
						hosName:state.user.hosName
					}
				}
			}
		})
	],
})
export default store