<template>
  <v-list three-line>
    <template v-if="isFetchUsersData">
      <v-skeleton-loader
        v-for="i in 3"
        :key="`skeleton-${i}`"
        type="list-item-three-line"
      />
    </template>
    <template v-else>
      <users-list />
    </template>
  </v-list>
</template>

<script>
import UsersList from "@/components/content-block/UsersView/UsersList.vue";
export default {
  name: "UsersView",
  components: {
    UsersList
  },
  computed: {
    isFetchUsersData() {
      return this.$store.state.users.isLoading
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  }
}
</script>
