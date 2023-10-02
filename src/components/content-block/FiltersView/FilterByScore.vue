<template>
  <v-select
    v-model="score"
    :items="scores"
    clearable
    label="Filter by score"
  />
</template>

<script>
export default {
  name: "FilterByScore",
  data() {
    return {
      scores: [
        '> 20',
        '< 10',
      ],
      score: '',
    }
  },
  watch: {
    score() {
      this.$store.commit('SET_FILTER_SCORE', this.score, { root: true })
    }
  }
}
</script>
