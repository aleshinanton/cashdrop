<template>
  <v-app>
    <AppNavigation />
    <v-content>
      <v-container fluid>
        <div id="app">
          <header>
            <span>CashDrop</span>
          </header>
          <main>
            <img
              src="./assets/iconfinder_14_3319630_128.png"
              alt="Vue.js PWA"
            >
            <router-view />
          </main>
        </div>
      </v-container>
    </v-content>
    <v-footer app />
  </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation'

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  text-align: center;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
