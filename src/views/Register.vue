<template>
  <v-card
     class="mx-auto"
    max-width="400"
    style="margin-top: 60px"
  >

    <v-card-text>
        <v-list-item-title class="headline">Sign Up</v-list-item-title>
    </v-card-text>
           <v-divider></v-divider>
    <v-alert  v-if="success" type="success">
      You have registered successfuly. You can now <router-link :to="{name:'login'}">sign in.</router-link>
    </v-alert>
    <div v-if="!success">
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
        hint="At least 8 characters"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
      <v-text-field
        :type="show ? 'text' : 'password'"
        v-model="confirmPassword"

                :rules="passwordConfirmationRule"
        label="Confirm Password"
        required
      ></v-text-field>

    </v-form>
    </v-card-text>  
    <v-divider></v-divider>
    <v-card-actions style="padding: 0">
      <v-btn
        large
        tile
        block
        color="primary"
        @click="register()"
      >
        Submit
      </v-btn>
    </v-card-actions>
    </div>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      password: '',
      confirmPassword: '',
      show: false, 
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false,
      success: false
    }),
    computed: {
    passwordConfirmationRule() {
      return [
          () => (this.password === this.confirmPassword) || 'Password must match',
          v => !!v || 'Password is required',
          v => v.length >= 8 || 'Min 8 characters',
      ]
    }
  },
  methods: {
      register(){
        this.success=this.valid;
      }
    }
  }
</script>

<style scoped>

</style>
