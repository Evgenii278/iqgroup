<template>
  <transition>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="svg" @click="$emit('close')"> X </div>

          <div class="modal-body">
            <div class="popup">
              <input v-model="event" class="popup__event popup__input" placeholder="Событие">
              <input class="popup__date popup__input" :placeholder="`${date} Ноября 2021`" disabled>
              <input v-model="names" class="popup__members popup__input" placeholder="Имена участников">
              <textarea v-model="description" class="popup__description popup__input" placeholder="Описание"></textarea>

              <div class="popup__row">
                  <button class="popup__btn-ready popup__btn" @click="saveDate"> Готово </button>
                  <button class="popup__btn-delete popup__btn" @click="remove"> Удалить </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'month',

  computed: {
    event: {
      get () {
        return this.$store.getters.getEventsToDate(this.uuid)
      },

      set (event) {
        this.$store.commit('updateEvents', event)
      }
    },
    names: {
      get () {
        return this.$store.getters.getNamesToDate(this.uuid)
      },

      set (names) {
        this.$store.commit('updateNames', names)
      }
    },

    description: {
      get () {
        return this.$store.getters.getDescriptionToDate(this.uuid)
      },

      set (description) {
        this.$store.commit('updateDescription', description)
      }
    }
  },

  methods: {
    saveDate () {
      this.$store.commit('saveEventsDate', this.uuid)
      this.$emit('close')
    },

    remove () {
      console.log('test___')
      this.$store.commit('removeEventsDate', this.uuid)
    }
  },

  props: {
    date: Number,
    uuid: Number
  }

}
</script>
<style scoped>
@import '../assets/css/style.css';
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 25px;
  border-radius: 2px;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}
.popup {
  display: flex;
  flex-direction: column;
  height: 320px;
}

.popup__row {
    display: flex;
}

.popup__btn {
  margin: 10px 5px;
  height: 18px;
  color: #292929;
  background-color: #FFFFFF;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 1px 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.popup__btn-ready {
}

.popup__btn-delete {
}
.popup__input {
  height: 24px;
  margin-top: 10px;
  padding-left: 10px;
  border-radius: 4px;
  border: 3px solid #CFCFCF;
  background-color: #FFFFFF;
  color: #CFCFCF;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
}
.popup__description {
  margin-top: 20px;
  height: 100px;
}

.svg {
  position: relative;
  float: right;
  cursor: pointer;
}
</style>
