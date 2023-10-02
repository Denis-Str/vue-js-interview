<template>
  <v-select
    v-model="country"
    :items="countries"
    clearable
    label="Filter by country"
  />
</template>

<script>
export default {
  name: "FilterByCountry",
  data() {
    return {
      countries: [
        'russia',
        'usa',
      ],
      country: "",
    }
  },
  watch: {
    country() {
      this.$store.commit('SET_FILTER_COUNTRY', this.country, { root: true })
    }
  }
}
</script>
