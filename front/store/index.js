export const state = () => ({
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  },
  current: {
    user: null,
    project: null
  },
  projects: [
    { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
    { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
    { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
    { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
    { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
  ]
})

export const getters = {}

export const mutations = {
  getCurrentProject (state, payload) {
    state.current.project = payload
  },
  setCurrentUser (state, payload) {
    state.current.user = payload
  }
}

export const actions = {
  getCurrentProject ({ state, commit }, params) {
    const currentProject = state.projects.find(project => project.id === Number(params.id))
    commit('getCurrentProject', currentProject)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  }
}
