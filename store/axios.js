export const state = () => ({
  baseURL: process.env.baseUrl
})

export const getters = {
  getUrl : (state) => (uri) => {
    return state.baseURL + uri
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
