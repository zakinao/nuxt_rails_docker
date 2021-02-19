<template>
  <v-app-bar
    app
    :height="appBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>
    <app-title
      class="hidden-mobile-and-down"
    />
    <v-spacer />

    <signup-link />
    <login-link />
  </v-app-bar>
</template>

<script>
import AppLogo from '../ui/appLogo.vue'
import AppTitle from '../ui/appTitle.vue'
import LoginLink from './loginLink.vue'
import signupLink from './signupLink.vue'
export default {
  components: {
    signupLink,
    LoginLink,
    AppLogo,
    AppTitle
  },
  data ({ $store }) {
    return {
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  }
}
</script>
