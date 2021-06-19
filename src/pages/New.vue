<template>
    <div class="q-pa-md">
        <div class="q-gutter-md">
            <q-input type="text" v-model="title" placeholder="Title" />
            <q-editor v-model="content" min-height="30rem" />
            <div class="q-gutter-sm">
                <q-btn color="primary" label="Save" @click="save()"/>
                <q-btn color="standard" label="Cancel" @click="$router.push('/')"/>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            content: '',
            title: ''
        }
    },
    computed: {
        isValidTitle() {
            if('' != this.title ) {
                return true;
            }

            return false;
        }
    },
    methods: {
        save() {
            if(this.isValidTitle) {
                this.$axios.post('/notes', {
                    title: this.title,
                    content: this.content
                }).then((res) => {
                    console.log(res)
                }).catch((e) => {

                });    
            }      
        }
    }
}
</script>