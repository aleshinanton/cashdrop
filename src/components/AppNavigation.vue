<template>
  <v-toolbar app>
    <v-btn
      v-if="userIsAuthenticated"
      @click="signOut()"
    >
      <v-icon>exit_to_app</v-icon>
      Sign Out
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Appnavigation',
  data: function () {
    return {
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('signout')
      this.$router.push('/')
    }
  }
}
</script>
