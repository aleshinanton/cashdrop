<template>
  <v-toolbar app>
    <v-btn>Sign Out</v-btn>
  </v-toolbar>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Appnavigation',
  data: function () {
    return {}
  },
  methods: {
    login () {
      firebase
        .auth()
        .signOut()
        .then(x => {
          this.$router.push('/login')
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>
