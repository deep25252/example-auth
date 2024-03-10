<template>
  <div>
    <button v-if="$auth.loggedIn" @click="$auth.logout()">Sign Off</button>
    <button v-else @click="$auth.loginWith('auth0')">Sign In</button>
  </div>
</template>
<script>
export default {
  name: "Example",
  mounted() {
    console.log("dssdsdsdsdsdsd", this.$auth);
  },
};
</script>
