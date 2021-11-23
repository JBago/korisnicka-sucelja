<template>
  <v-card
     class="mx-auto"
    max-width="400"
    style="margin-top: 60px"
  >

    <v-card-text>
        <v-list-item-title class="headline">Log In</v-list-item-title>
    </v-card-text>
           <v-divider></v-divider>
    <v-card-text
     style="padding: 10px"
    >
         <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-Mail"
        required
      ></v-text-field>
      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        label="Remember me"
      ></v-checkbox>
    </v-form>
    </v-card-text>  
    <v-divider></v-divider>
    <v-card-actions style="padding: 0">
      <v-btn
        large
        tile
        block
        color="primary"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      password: '',
      show: false, 
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      checkbox: false,
      lazy: false,
    }),

    methods: {

    },
  }
</script>

<style scoped>

</style>
