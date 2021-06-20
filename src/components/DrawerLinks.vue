<template>
  <q-item clickable v-ripple @click="$router.push(link.link)"> <!-- :active="menuItem.label === 'Outbox'" -->
    <q-item-section avatar>
      <q-icon :name="link.icon" />
    </q-item-section>
    <q-item-section>
      {{ link.label }}
    </q-item-section>
  </q-item>
  <!-- <q-separator /> -->
</template>

<script>
export default {
  name: 'DrawerLinks',
  props: {
    link: {
      type: Object,
      required: true
    }
    // label: {
    //   type: String,
    //   required: true
    // },

    // link: {
    //   type: String,
    //   default: '#'
    // },

    // icon: {
    //   type: String,
    //   default: ''
    // }
  }
}
</script>
