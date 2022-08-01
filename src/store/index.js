import { createStore } from 'vuex'
import events from './calendar/events.js'

export default createStore({
  modules: {
    events
  }
})
