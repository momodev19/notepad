<template>
    <q-card flat class="pointer col-5">
        <div v-if="notes.length > 0">
            <q-card-section>
                <div class="text-h6"> {{ notes.title }} </div>
                <div class="text-caption"> {{ notes.date_modified }} </div>
            </q-card-section> 

            <q-separator dark inset />

            <q-card-section>
                {{ notes.content }}
            </q-card-section> 
        </div>  
    </q-card>     
</template> 
<script>
export default {
  name: 'NoteCard',
  props: {
    notes: {
        type: Object,
        required: false,
        default: () => {
            return {}
        }
    }
  },
  created() {
      console.log(this.notes)
  }
}
</script>
