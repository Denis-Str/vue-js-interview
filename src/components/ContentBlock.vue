<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="ma-4"
    >

      <v-col cols="12">
        <logo-view />
      </v-col>
      <v-col cols="12" md="4">
        <filters-view />
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <users-view />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LogoView from "@/components/content-block/LogoView.vue";
import FiltersView from "@/components/content-block/FiltersView/index.vue";
import UsersView from "@/components/content-block/UsersView";
  export default {
    name: 'ContentBlock',
    components: {
      LogoView,
      FiltersView,
      UsersView
    },
  }
</script>
