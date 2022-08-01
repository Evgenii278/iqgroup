<template>
  <div class="main__row">
    <div class="item" v-for="(item, i) in date" :key="i" @click="openModal(item, i)">
      <div>
        <div class="item__heading"> {{ i > 6 ? item : getWeeks(i, item) }} </div>
        <div class="item__title" v-html="$store.getters.getEventsToDate(uuid / i)"></div>
        <div class="item__names" v-html="$store.getters.getNamesToDate(uuid / i)"></div>
        </div>
      </div>
    <modal
      v-if="showModal"
      @close="eventClose"
      :date="dateEvent"
      :uuid="eventUuid"
    />
  </div>
</template>

<script>
import modal from '../components/modal.vue'
export default {
  name: 'month',

  components: {
    modal
  },

  data: () => ({
    showModal: false,
    eventUuid: null,
    dateEvent: 0,
    uuid: 100,
    weeks: {
      0: 'Понедель­ник',
      1: 'Вторник',
      2: 'Среда',
      3: 'Четверг',
      4: 'Пятница',
      5: 'Суббота',
      6: 'Воскре­сенье'
    }
  }),

  props: {
    date: Array
  },

  methods: {
    openModal (date, i) {
      this.$store.commit('updateTempEvents')
      this.dateEvent = date
      this.eventUuid = this.uuid / i
      this.showModal = true
    },

    getWeeks (i, date) {
      return `${this.weeks[i]}, ${date}`
    },

    eventClose () {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.item {
  display: inline-flex;
  width: 125px;
  height: 100px;
  background-color: #FFFFFF;
  border: 1px solid #292929;
  padding: 8px;
}
.item__heading {
  height: 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6B6B6B;
  text-align: start;
}

.item__title {
  height: 16px;
  margin-top: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #292929;
  text-align: start;
}
.item__names {
  height: 56px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #6B6B6B;
  text-align: start;
}
</style>
