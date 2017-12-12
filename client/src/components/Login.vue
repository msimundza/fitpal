<template>
  <v-form>
    <v-text-field label="Username" v-model="username" required></v-text-field>
    <v-text-field label="E-mail" v-model="email" required></v-text-field>
    <v-btn @click="submit">
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: ''
    };
  }
};
</script>

<style>

</style>
