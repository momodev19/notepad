<template>
  <div class="q-pa-md" style="max-width: 400px">    
    <q-form
      @submit="submit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="user.firstname"
        hint="First name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="user.lastname"
        hint="Last name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="user.email"
        hint="Email address"
        lazy-rules
        :rules="[ val => (emailRegex.test(val)) || 'Please enter a valid email']"
      />

      <q-input
        filled
        type="password"
        v-model="user.password"
        hint="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary">
          <q-spinner-ios
            color="white"
            size="1rem"            
            v-if="loading"
          />
        </q-btn>
        <q-btn label="Cancel" type="a" color="primary" flat class="q-ml-sm" @click="$router.push('/')" />
      </div>
    </q-form>

  </div>
</template>

<script>

export default {  
  name: 'Register',
  data () {
    return {
      user: {},
      loading: false,
      emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },

  methods: {
    submit () {
      this.loading = true;
      
      this.$axios.post(`${process.env.API_URL}/register`, 
        this.user
      )
      .then((res) => {        
        this.$success(res.data.msg);
        // this.$router.push('login');
      }).catch((e) => {
        this.loading = false;
        this.$error(e.response.data.msg)
      })
    }
  }
}
</script>
