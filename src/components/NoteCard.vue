<template>
    <q-card flat class="pointer col-5">
        <q-card-section>
            <div class="text-h6"> Title </div>
            <div class="text-caption"> time </div>
        </q-card-section> 

        <q-separator dark inset />

        <q-card-section>
            {{ lorem }}
        </q-card-section>      
    </q-card>     
</template> 
<script>
export default {
  name: 'NoteCard',
  props: {
    // title: {
    //   type: String,
    //   required: true
    // },
    // date: {
    //     type: String,
    //     required: true
    // },
    // content: {
    //   type: String,
    //   default: ''
    // },
  },
  data() {
      return {
          lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      }
  }
}
</script>
