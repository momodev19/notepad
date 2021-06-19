<template>
    <div class="q-pa-md">
        <div class="q-gutter-md">
            <q-input type="text" v-model="title" placeholder="Title" />
            <q-editor v-model="editor" min-height="30rem" />
            <div class="q-gutter-sm">
                <q-btn color="primary" label="Save" />
                <q-btn color="standard" label="Cancel" />
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            editor: '',
            title: ''
        }
    },
    computed: {
        save() {
            if('' != this.editor || '' != this.title ) {
                return true;
            }

            return false;
        }
    }
}
</script>