<template>
  <div class="filters-view-comp">
    <filter-by-country />
    <filter-by-score />
  </div>
</template>

<script>
import FilterByCountry from "@/components/content-block/FiltersView/FilterByCountry.vue";
import FilterByScore from "@/components/content-block/FiltersView/FilterByScore.vue";
export default {
  components: {
    FilterByCountry,
    FilterByScore
  },

  data() {
    return {
      name: "FiltersView",
    }
  }
}
</script>