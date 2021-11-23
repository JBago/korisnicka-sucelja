<template>
  <layout>
      <v-tabs style="margin-top: 20px">
    <v-tab @click="selected=1">Offers</v-tab>
    <v-tab @click="selected=2">Users</v-tab>
    <v-tab @click="selected=3">Reservations</v-tab>
  </v-tabs>
    <v-data-table
    :headers="headers"
    :items="items"
    calculate-widths 
    
    loading-text="Loading... Please wait"
    class="elevation-1"
    
  >
     <template v-slot:item.thumbnail="{ item }">
        <v-list-item-avatar tile>
          <v-img :src="item.thumbnail"></v-img>
        </v-list-item-avatar>
    </template>
    <template v-slot:item.title="{ item }">
      <router-link :to="'/modify/'+item.id"><v-list-item-title class="font-weight-medium" v-text="item.title"></v-list-item-title></router-link>
    </template>
  </v-data-table>
   <v-btn fab v-if="selected==1"
               large
               fixed
               bottom
               right
               class="add-button"
               @click="addOffer"
              >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
  </layout>
</template>

<script>
  import Layout from "../Layout";
  import {DATA} from "../../main";
  export default {
    components: {Layout},
    data () {
      return {
        selected: 1,
        items: [],
        headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: true,
            value: 'id',
          },
          { text: 'Image', value: 'thumbnail' },
          { text: 'Title', value: 'title' },
          { text: 'Capacity', value: 'capacity' },
          { text: 'Price', value: 'price' },
        ],
      }
    },
    watch: {
      selected: function (newVal) {
        if(newVal==1){
          this.items= DATA.items;
          this.headers= [
          {
            text: 'Id',
            align: 'left',
            sortable: true,
            value: 'id',
          },
          { text: 'Image', value: 'thumbnail' },
          { text: 'Title', value: 'title' },
          { text: 'Capacity', value: 'capacity' },
          { text: 'Price', value: 'price' },
        ]
        }
        if(newVal==2){
          this.items= DATA.users;
          this.headers= [
          {
            text: 'Id',
            align: 'left',
            sortable: true,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' }
          ]
        }
        if(newVal==3){
          this.items= DATA.reservations;
          this.headers= [
          {
            text: 'Id',
            align: 'left',
            sortable: true,
            value: 'id',
          },
          { text: 'Date', value: 'date' },
          { text: 'User ID', value: 'userid' },
          { text: 'Offer ID', value: 'offerid' }
          ]
        }
      
    }
    },
    mounted() {
            this.items = DATA.items;
    },
    methods: {
      addOffer() {
        this.$router.push("/create");
      }
    }
  }
</script>

<style scoped>
      .add-button {
        background: #2b5876;
        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);
        background: linear-gradient(to right, #4e4376, #2b5876);
    }
</style>