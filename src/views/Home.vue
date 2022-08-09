<template>
  <div class="wrap">
    <h1>Календарь</h1>
    <div class="header">
      <div class="header__row">
        <div class="header__left">
          <button class="header__btn"> Добавить </button>
          <button class="header__btn"> Обновить </button>
        </div>

        <div class="header__right">
          <svg class="icon">
            <use xlink:href="icons.svg#search"></use>
          </svg>
          <input
            v-model="search"
            class="header__input"
            type="text"
            placeholder="Placeholder"
          />
          <div class="header__list">
            <find/>
        </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="menu">
        <button class="menu__btn-previous" @click="previous">
          <svg class="menu__svg">
            <use xlink:href="icons.svg#left"></use>
          </svg>
        </button>
        <div class="menu__display"> {{ $store.getters.getDisplay }} </div>
        <button class="menu__btn-next" @click="next">
          <svg class="menu__svg">
            <use xlink:href="icons.svg#right"></use>
          </svg>
        </button>
        <button class="menu__text" @click="initialiseDate"> Сегодня </button>
      </div>
      <div class="main__row">
        <card-days />
      </div>
    </div>
  </div>
</template>

<script>
import cardDays from '../components/month.vue'
import find from '../components/find.vue'
export default {
  name: 'Home',

  components: {
    cardDays,
    find
  },

  data: () => ({
    search: ''
  }),

  watch: {
    search (search) {
      this.$store.dispatch('find', search)
    }
  },

  methods: {
    initialiseDate () {
      this.$store.dispatch('initialiseDate')
      this.$store.dispatch('setMonth')
    },

    previous () {
      this.$store.commit('decrementMonth')
      this.$store.dispatch('setMonth')
    },

    next () {
      this.$store.commit('incrementMonth')
      this.$store.dispatch('setMonth')
    }

  },

  created () {
    this.initialiseDate()
  }
}
</script>

<style scoped>
.wrap {
  max-width: 1440px;
  margin: 0 auto;
}
.icon {
  position: absolute;
  height: 29px;
  width: 25px;
  padding-top: 35px;
  padding-right: 63px;
  transform: translate(-50%,-50%);
}

.header {
  background-color: #F4F4F4;
  text-align: right;
}

.header__row {
  display: flex;
  align-items: flex-end;
  max-width: 1024px;
  height: 100px;
  margin: 0 auto;
}

.header__left {
  order: 1;
  display: inline-block;
  text-align: left;
  flex-grow: 1;
  padding-bottom: 21px;
}

.header__right {
  order: 2;
  display: inline-block;
  text-align: right;
  flex-grow: 1;
  padding-bottom: 21px;
}

.header__list {
  display: flex;
  flex-direction: row-reverse;
}

.header__btn {
  background: #0271C7;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #FFFFFF;
  padding: 6px 12px;
  border-radius: 2px;
  margin-left: 12px;

  line-height: 100%;
  vertical-align: top;
}

.main {
}

.menu {
  display: flex;
  max-width: 1024px;
  height: 28px;
  margin: 12px auto;
  padding-left: 20px;
  text-align: right;
}

.menu__svg {
  width: 25px;
  height: 20px;
}

.menu__btn-previous {
  padding-left: 0px;
}

.menu__btn-next {
  padding-left: 0px;
}

.menu__display {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #292929;
  padding-top: 3px;
  text-align: center;
  min-width: 150px;
}

.menu__text {
  height: 18px;
  color: #292929;
  background-color: #FFFFFF;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 12px;
  padding: 1px 6px;
  margin-left: 14px;
  margin-top: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.main__row {
  max-width: 1024px;
  margin: 0 auto;
}

.main__column {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 12px;
  border: 1px solid #0e0d0d;
}

.header__icon {
  padding-right: 21px;
}
.header__input {
  width: 210px;
  height: 26px;
  padding-left: 12px;
  margin-right: 12px;
  border-radius: 4px;
  border: 3px solid #CFCFCF;
  background-color: #FFFFFF;
  color: #CFCFCF;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
}
*::-webkit-input-placeholder {
    color: #CFCFCF;
}
</style>
