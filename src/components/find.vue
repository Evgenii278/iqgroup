<template>
  <div v-if="$store.getters.getFind.length" class="find">
    <div class="find__block">
      <div class="find__title_" v-for="(item, i) in getSearch" :key="i">
        <h3 class="find__title"> {{ item.event }} </h3>
        <p class="find__date"> {{ item.date }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'find',

  data: () => ({
    search: ''
  }),

  computed: {
    getSearch () {
      return this.$store.getters.getFind
    }
  }
}
</script>

<style scoped>
.find {
  position: absolute;
}

.find__block {
  overflow: auto;
  overflow-y: auto;
  margin-right: 10px;
  margin-top: 12px;
  text-align: left;
  width: 225px;
  max-height: 320px;
  border-radius: 3px;
  border: 3px solid #27A1FF;
  background-color: #FFFFFF;
}
.find__title {
  margin: 8px;
}

.find__date {
  margin: 8px;
  margin-top: 0px;
  font-size: 12px;
}
</style>
