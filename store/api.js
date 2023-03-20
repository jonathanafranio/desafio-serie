export const state = () => ({
    loading: false,
})

export const mutations = {
    update_state(state, values) {
      Object.keys(values).forEach(key => {
        state[key] = values[key]
      })
    }
}
export const actions = {
    async get_products({ commit }, {}) {
        //const baseUrl = 'https://fakestoreapi.com/products/'
        const baseUrl = `${location.origin}/fakestoreapi.com.json`
        commit('update_state', { loading: true })
        let products = null;
        const optionRequest = {
            method: "GET", 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        await fetch(`${baseUrl}`, optionRequest)
            .then((r) => r.json())
            .then(p => {
                commit('update_state', { loading: false })
                products = p
            })
            .catch( _ => {
                commit('update_state', { loading: false })
                return 'Ops. Deu erro ao requisitar os posts.'
            })
        return products
    },
    

}