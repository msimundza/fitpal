<template>
  <v-form ref="form">
    <v-text-field label="Username" v-model="username" required></v-text-field>
    <v-text-field label="E-mail" v-model="email" required></v-text-field>
    <v-btn @click="submit">
      Register
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      username: '',
      email: ''
    };
  },
  methods: {
    submit () {
      axios.post('http://localhost:3000', {
        username: this.username,
        email: this.email
      });
    },
    clear () {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>

</style>
