import store from '../../store'

function saveStore () {
  if (localStorage.getItem('events')) store.commit('initialiseEvent')
}

export {
  saveStore
}
