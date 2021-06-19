<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md justify-center">
      <note-card
        v-for="x in [1,2,3,4]"
        :key="x"
      >
      </note-card>
    </div>
    <!-- <div absolute-center> -->
      <q-btn round id="add" color="primary" icon="shopping_cart" />  
    <!-- </div>   -->
  </q-page>
</template>

<script>
console.log(`${process.env.DB_host}`)
import NoteCard from 'components/NoteCard.vue'

export default {  
  name: 'PageIndex',
  components: { NoteCard },  
}
</script>
