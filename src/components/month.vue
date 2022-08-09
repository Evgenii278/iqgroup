<template>
  <div class="main__row">
    <div class="item" v-for="(day, i) in $store.getters.getMonth" :key="i" @click="openModal(day, i)">
      <div :class="{'item__current': $store.getters.getCurrentDay === day}">
        <div class="item__heading" :class="i">{{ getWeek(i, day) }}</div>
        <div class="item__title" v-html="getEventsToDate(day, i)"></div>
        <div class="item__names" v-html="getNamesToDate(day, i)"></div>
        </div>
      </div>
    <modal
      v-if="showModal"
      @close="eventClose"
      :day="day"
      :index="index"
    />
  </div>
</template>

<script>
import modal from '../components/modal.vue'
import { getKey } from '../util/util.js'
export default {
  name: 'month',

  components: {
    modal
  },

  data: () => ({
    showModal: false,
    day: 0,
    index: null,
    week: {
      0: 'Понедель­ник',
      1: 'Вторник',
      2: 'Среда',
      3: 'Четверг',
      4: 'Пятница',
      5: 'Суббота',
      6: 'Воскре­сенье'
    }
  }),

  methods: {
    eventClose () {
      this.showModal = false
    },

    getEventsToDate (day, i) {
      return this.$store.getters.getEventsToDate(getKey(day, i))
    },

    getNamesToDate (day, i) {
      return this.$store.getters.getNamesToDate(getKey(day, i))
    },

    getWeek (i, date) {
      if (i > 6) return date
      return `${this.week[i]}, ${date}`
    },

    openModal (day, i) {
      this.$store.commit('updateTempEvents')
      this.day = day
      this.index = i
      this.showModal = true
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

.item__current {
  width: 100%;
  background-color: #9dcbee;
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
