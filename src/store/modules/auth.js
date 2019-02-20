import { ruleList, ruleDelete, addRule, editRule } from '@/api/auth/rule'
import { groupList, groupDelete, addGroup, editGroup } from '@/api/auth/group'

const auth = {
  state: {
    rules: [],
    groups: [],
    groups_tree: []
  },

  mutations: {
    SET_RULES: (state, data) => {
      state.rules = data
    },
    SET_GROUPS: (state, data) => {
      state.groups = data
    },
    SET_GROUPS_TREE: (state, data) => {
      state.groups_tree = data
    }
  },

  actions: {
    fetchRules({ commit }) {
      return new Promise((resolve, reject) => {
        ruleList().then(res => {
          const data = res.data
          commit('SET_RULES', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    deleteRule(state, id) {
      return new Promise((resolve, reject) => {
        ruleDelete(id).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    addRule(state, params) {
      return new Promise((resolve, reject) => {
        addRule(params).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    editRule(state, params) {
      return new Promise((resolve, reject) => {
        editRule(params).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    fetchGroup({ commit }) {
      return new Promise((resolve, reject) => {
        groupList().then(res => {
          const data = res.data
          commit('SET_GROUPS', data.groups)
          commit('SET_GROUPS_TREE', data.rules)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    deleteGroup(state, id) {
      return new Promise((resolve, reject) => {
        groupDelete(id).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    addGroup(state, params) {
      return new Promise((resolve, reject) => {
        addGroup(params).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    editGroup(state, params) {
      return new Promise((resolve, reject) => {
        editGroup(params).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default auth