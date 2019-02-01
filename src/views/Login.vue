<template>
  <div class="login">
    <h3>Sign In</h3>
    <mt-field class="input" type="text" v-model="email" name="Email" placeholder="Email" required></mt-field>
    <br>
    <mt-field
      class="input"
      type="password"
      v-model="password"
      name="Password"
      placeholder="Password"
      required
    ></mt-field>
    <br>
    <mt-button @click="login">Login</mt-button>
    <router-link to="/registration" tag="mt-button">Sign Up</router-link>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/home')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  align-self: center;
  margin: 10px 0;
  width: auto;
  padding: 15px;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>




