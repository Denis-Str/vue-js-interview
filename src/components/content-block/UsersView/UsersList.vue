<template>
  <div class="users-list-comp">
    <template v-if="filterTransformUsers.length">
      <transition-group name="flip-list">
        <template v-for="(item, index) in filterTransformUsers">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          />

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          />

          <template v-else>
            <user-data :key="item.title" :item="item" />
          </template>
        </template>
      </transition-group>
    </template>
    <template v-else>
      <div style="text-align: center">:(</div>
      <v-skeleton-loader type="list-item-three-line" />
    </template>
  </div>
</template>

<script>
import UserData from "@/components/content-block/UsersView/UserData.vue";
import {mapState} from "vuex";

export default {
  name: "UsersList",
  components: {
    UserData
  },
  data() {
    return {
      users: [
        { header: 'List' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }
  },
  computed: {
    ...mapState(['currentFilterCountry', 'currentFilterScore']),
    transformUsers() {
      return this.users.map((item, index) => {
        if (item.title) {
          return {
            ...item,
            country: this.addParamsCountry(item),
            score: this.addParamsScore(item),
            address: `${this.addParamsCountry(item)}-${index}`
          }
        }
        return item
      })
    },
    commonCountry() {
      return this.transformUsers.filter(({ country }) => country === this.currentFilterCountry)
    },
    commonScore() {
      return this.transformUsers.filter(({ score }) => score === this.currentFilterScore)
    },
    unityFilters() {
      return this.transformUsers.filter(({ country, score }) => score === this.currentFilterScore && country === this.currentFilterCountry)
    },
    filterTransformUsers() {
      if (this.currentFilterCountry && this.currentFilterScore) return this.unityFilters
      if (this.currentFilterCountry) return this.commonCountry
      if (this.currentFilterScore) return this.commonScore
      return this.transformUsers
    }
  },
  methods: {
    getImgNumber(str) {
      const indexStart = str.lastIndexOf('.')
      const indexEnd = str.lastIndexOf('/')
      return +str.slice(indexEnd + 1, indexStart)
    },
    addParamsCountry(item) {
      return this.getImgNumber(item.avatar) % 2 === 0 ? 'russia' : 'usa'
    },
    addParamsScore(item) {
      return this.getImgNumber(item.avatar) % 2 === 0 ? '> 20' : '< 10'
    }
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 1s;
}
</style>