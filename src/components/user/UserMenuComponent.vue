<template>
  
  <div v-if="user">
    <div>{{user.email}} | <span @click="logout" class="cursor-pointer hover:text-gray-500">Logout</span></div>
  </div>
  <div class="flex space-x-2" v-else>
    <div @click="login" class="cursor-pointer hover:text-gray-500">Login</div>
    <div @click="signup" class="cursor-pointer hover:text-gray-500">Signup</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    login() {
      netlifyIdentity.open('login');
    },
    signup() {
      netlifyIdentity.open('signup');
    },
    logout() {
      netlifyIdentity.open();
    }
  }
}
</script>

<style>

</style>