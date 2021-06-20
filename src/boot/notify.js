import Vue from 'vue'
import { Notify } from 'quasar'

function success(message = 'Success') {
    Notify.create({
        type: 'positive',
        message: message
      })
}

function error(message = 'Error') {
    Notify.create({
        type: 'negative',
        message: message
      })
}

Vue.prototype.$success = success;
Vue.prototype.$error = error;