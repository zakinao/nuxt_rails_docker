<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <bef-login-footer />
  </v-app>
</template>

<script>
import beforeLoginAppBar from '~/components/beforeLogin/beforeLoginAppBar.vue'
import BefLoginFooter from '~/components/beforeLogin/befLoginFooter.vue'
export default {
  components: {
    beforeLoginAppBar,
    BefLoginFooter
  }

}
</script>
