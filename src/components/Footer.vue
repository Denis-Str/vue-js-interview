<template>
  <v-card
    flat
    tile
    width="100%"
    class="red lighten-1 text-center"
  >
    <v-divider />
    <v-card-text class="white--text">
      {{ currentYear }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>