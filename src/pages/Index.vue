<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md justify-center">
      <note-card
        v-for="note in notes"
        :key="note.id"
      >
      </note-card>
    </div>
    <!-- <div absolute-center> -->
      <q-btn round id="add" color="primary" icon="shopping_cart" @click="$router.push('new')" />  
    <!-- </div>   -->
  </q-page>
</template>

<script>
import NoteCard from 'components/NoteCard.vue'

export default {  
  name: 'PageIndex',
  data() {
    return {
      notes: []
    }
  },
  method: {
    getNotes() {
      axios.get(`${API_URL}`).then((response) => {
        this.notes = response;
      }).catch((e) => {

      });
    }
  },
  created() {

  },
  components: { NoteCard },  
}
</script>
