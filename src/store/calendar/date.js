export default {
  state: {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNames_2: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    date: {}
  },

  mutations: {
    updateDate (state, date) {
      state.date = date
    },

    updateMonth (state, obj) {
      state.date.previousDays = obj.previousDays
      state.date.amountOfDays = obj.amountOfDays
      state.date.showMonth = obj.setMonth
    },

    decrementMonth (state) {
      state.date.month--
      if (state.date.month < 0) {
        state.date.year--
        state.date.month = 11
      }
    },

    incrementMonth (state) {
      state.date.month++
      if (state.date.month > 11) {
        state.date.year++
        state.date.month = 0
      }
    }
  },

  getters: {
    getDisplay (state) {
      const month = state.date.month
      return `${state.monthNames[month]}, ${state.date.year}`
    },

    getCurrentDay (state) {
      if (state.date.currentYear === state.date.year &&
          state.date.currentMonth === state.date.month) return state.date.dayInMont
    },

    getMonth (state) {
      return state.date.showMonth
    },

    getDate (state) {
      return state.date
    },

    getMonthNames (state) {
      return state.monthNames_2
    }
  },

  actions: {
    initialiseDate ({ commit }) {
      const date = new Date()
      const month = date.getMonth()
      const year = date.getFullYear()

      const currentDate = {
        year: year,
        currentYear: year,
        month: month,
        currentMonth: month,
        dayInMont: date.getDate()
      }

      commit('updateDate', currentDate)
    },

    setMonth ({ state, commit }) {
      const nextMonth = new Date(state.date.year, state.date.month + 1, 0).getDate()
      const previousMonth = new Date(state.date.year, state.date.month, 0)

      const previousDays = previousMonth.getDay()
      const allDaysOfMonth = previousMonth.getDate()

      const arrMonth = []
      const arrNextMonth = []
      let setMonth = []

      if (previousDays) for (let i = allDaysOfMonth; i > allDaysOfMonth - previousDays; i--) arrNextMonth.unshift(i)
      for (let i = 0; i < nextMonth; i++) arrMonth.push(i + 1)

      setMonth = [...arrNextMonth, ...arrMonth]
      const addEmptyDays = 35 - setMonth.length

      if (setMonth.length < 35) for (let i = 0; i < addEmptyDays; i++) setMonth.push(i + 1)
      if (setMonth.length > 35) setMonth.splice(35 - setMonth.length, setMonth.length - 35)

      commit('updateMonth', {
        setMonth: setMonth,
        amountOfDays: nextMonth + previousDays,
        previousDays: previousDays
      })
    }
  }

}
