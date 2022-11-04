export const state = () => ({
  baseURL: process.env.baseUrl,
  accessToken : null,
  user : {}
})

export const getters = {
  getUrl : (state) => (uri) => state.baseURL + uri
}

export const mutations = {
  // increment(state) {
  //   state.counter++
  // }
  setToken (state,token) {
    state.accessToken = token
  },
  setUser (state,user) {
    state.user = user
  }
}

export const actions = {
  // async fetchCounter({ state }) {
  //   // make request
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;
  // }
}
