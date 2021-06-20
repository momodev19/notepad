<template>
  <q-layout view="lHh LpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Notepad
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-scroll-area class="fit">
        <drawer-links
          v-for="(link, index) in drawerLinks"
          :link="link"
          :key="index"
        >
        </drawer-links>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import DrawerLinks from 'components/DrawerLinks.vue'

var guestLinks = [
  {
    label: 'Register',
    link: '/register',
    icon: ''
  },
  {
    label: 'Log in',
    link: '/login',
    icon: ''
  },
]

export default {
  data () {
    return {
      left: false,
      drawerLinks: guestLinks
    }
  },
  methods: {
    register() {

    }
  },
  created() {

  },
  components: { DrawerLinks },  
}
</script>