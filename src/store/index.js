import { createStore } from 'vuex'
import events from './calendar/events.js'
import date from './calendar/date.js'

export default createStore({
  modules: {
    events,
    date
  }
})
