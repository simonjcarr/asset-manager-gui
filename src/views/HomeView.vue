<template>
  <div>
    <div>
      <router-link to="/org">Manage Organisations</router-link>
      <div>
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null
    }
  },
  mounted() {
    fetch('/.netlify/functions/helloWorld')
      .then(response => response.json())
      .then(data => {
        this.message = data.message
      });
  }
}
</script>

<style>

</style>