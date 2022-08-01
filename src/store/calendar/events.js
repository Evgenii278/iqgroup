export default {
  state: {
    events: {},
    tempEvents: {}
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

    saveEventsDate (state, date) {
      const event = state.events[date]
      state.events[date] = { ...event, ...state.tempEvents }
      localStorage.setItem('events', JSON.stringify(state.events))
    },

    removeEventsDate (state, date) {
      state.events[date] = {}
      localStorage.setItem('events', JSON.stringify(state.events))
    }
  },

  getters: {
    getEvents (state) {
      return state.tempEvents
    },

    getEventsToDate: (state) => (date) => {
      const event = state.events[date]
      if (event === undefined) return ''
      return event.event
    },

    getNamesToDate: (state) => (date) => {
      const event = state.events[date]
      if (event === undefined) return ''
      return event.names
    },

    getDescriptionToDate: (state) => (date) => {
      const event = state.events[date]
      if (event === undefined) return ''
      return event.description
    }
  }

}
