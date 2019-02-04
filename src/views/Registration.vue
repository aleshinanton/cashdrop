<template>
  <div class="registration">
    <h3>Registration</h3>
    <mt-field class="input" type="name" v-model="name" name="Name" placeholder="Full Name" required></mt-field>
    <br>
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
    <mt-button @click="createAccount">Create Account</mt-button>
    <router-link to="/login" tag="mt-button">Back to login</router-link>
  </div>
</template>

<script>
  import firebase from 'firebase'
  
  export default {
    name: 'registration',
    data () {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      createAccount () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.push('/login')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>

<style scoped>
.registration {
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
