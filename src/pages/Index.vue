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
  methods: {
    getNotes() {
      this.$axios.get('/notes').then((res) => {
        this.notes = res.data;
      }).catch((e) => {

      });
    }
  },
  created() {
    this.getNotes();
  },
  components: { NoteCard },  
}
</script>
