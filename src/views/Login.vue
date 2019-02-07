<template>
  <div
    class="login"
    @keyup.enter="login"
  >
    <h3>Sign In</h3>
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
    <mt-button @click="login">
      Login
    </mt-button>
    <router-link
      to="/registration"
      tag="mt-button"
    >
      Sign Up
    </router-link>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    } },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/home')
      }
    }
  },
  methods: {
    login () {
      store.dispatch('login', { email: this.email, password: this.password })
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
