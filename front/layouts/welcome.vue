<template>
  <v-app>
    <wel-app-bar />
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWith: '1280px' }"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
          <v-col cols="12">
            <div :is="`wel-${menu.title}`" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <bef-login-footer />
  </v-app>
</template>

<script>
import welAbout from '~/components/welcome/welAbout'
import welProducts from '~/components/welcome/welProducts'
import welPrice from '~/components/welcome/welPrice'
import welContact from '~/components/welcome/welContact'
import welCompany from '~/components/welcome/welCompany'
import welAppBar from '~/components/welcome/welAppBar'
import befLoginFooter from '~/components/beforeLogin/befLoginFooter'

export default {
  components: {
    welAbout,
    welProducts,
    welPrice,
    welContact,
    welCompany,
    welAppBar,
    befLoginFooter
  },
  data () {
    return {
      menus: [
        { title: 'about', subtitle: 'このサイトはブログ”独学プログラマ”で公開されているチュートリアルのデモアプリです' },
        { title: 'products', subtitle: '他にはない優れた機能の数々' },
        { title: 'price', subtitle: '会社の成長に合わせた3つのプラン' },
        { title: 'contact', subtitle: 'お気軽にご連絡を' },
        { title: 'company', subtitle: '私たちの会社' }
      ]
    }
  }
}
</script>
