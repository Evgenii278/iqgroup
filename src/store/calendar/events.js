export default {
  state: {
    events: {},
    tempEvents: {},
    arrFind: []
  },

  mutations: {
    initialiseEvent (state) {
      state.events = JSON.parse(localStorage.events)
    },

    updateEvents (state, event) {
      state.tempEvents.event = event
    },

    updateNames (state, names) {
      state.tempEvents.names = names
    },

    updateDescription (state, description) {
      state.tempEvents.description = description
    },

    updateTempEvents (state) {
      state.tempEvents = {}
    },

    updateFind (state, find) {
      state.arrFind = find
    },

    saveEventsDate (state, key) {
      const event = state.events[key]

      state.events[key] = {
        ...event,
        ...state.tempEvents,
        date: key.split(',')[0]
      }
      localStorage.setItem('events', JSON.stringify(state.events))
    },

    removeEventsDate (state, key) {
      state.events[key] = {}
      localStorage.setItem('events', JSON.stringify(state.events))
    }
  },

  getters: {
    getEvents (state) {
      return state.tempEvents
    },

    getEventsToDate: (state) => (key) => {
      const event = state.events[key]
      if (event === undefined) return ''
      return event.event
    },

    getNamesToDate: (state) => (key) => {
      const event = state.events[key]
      if (event === undefined) return ''
      return event.names
    },

    getDescriptionToDate: (state) => (key) => {
      const event = state.events[key]
      if (event === undefined) return ''
      return event.description
    },

    getFind (state) {
      return state.arrFind
    }
  },

  actions: {
    find ({ state, commit }, search) {
      if (!search) return commit('updateFind', [])
      const arrFind = Object.values(state.events).filter(i => Object.values(i).find(i => i.includes(search)))
      commit('updateFind', arrFind)
    }
  }

}
