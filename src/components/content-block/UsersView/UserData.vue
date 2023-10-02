<template>
  <v-list-item class="user-data-comp">
    <v-list-item-avatar @click="handleChangeShow">
      <v-img :src="item.avatar" :alt="item.title" />
      <v-tooltip
        v-model="show"
        location="top"
      >
        <span>{{ item.address }}</span>
      </v-tooltip>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-html="item.title" />
      <v-list-item-subtitle v-html="item.subtitle" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "UserData",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleChangeShow() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.user-data-comp {
  position: relative;
}
</style>