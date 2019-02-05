<template>
  <div class="registration">
    <h3>Registration</h3>
    <mt-field
      v-model="name"
      class="input"
      type="name"
      name="Name"
      placeholder="Full Name"
      required
    />
    <br>
    <mt-field
      v-model="email"
      class="input"
      type="text"
      name="Email"
      placeholder="Email"
      required
    />
    <br>
    <mt-field
      v-model="password"
      class="input"
      type="password"
      name="Password"
      placeholder="Password"
      required
    />
    <br>
    <mt-button @click="createAccount">
      Create Account
    </mt-button>
    <router-link
      to="/login"
      tag="mt-button"
    >
      Back to login
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Registration',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    createAccount () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/login')
        })
        .catch(err => {
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
