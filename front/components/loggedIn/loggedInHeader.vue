<template>
  <div>
    <logged-in-nav-drawer
      :drawer.sync="drawer"
    />
    <logged-in-app-bar #nav-icon>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />
    </logged-in-app-bar>
  </div>
</template>

<script>
import loggedInAppBar from './header/loggedInAppBar.vue'

export default {
  data () {
    return {
      drawer: null
    }
  },
  components: {
    loggedInAppBar
  }

}
</script>
