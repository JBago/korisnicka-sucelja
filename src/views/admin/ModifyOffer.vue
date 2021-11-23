<template>
    <layout>
      <v-container 
      style="margin-top: 20px">
        <v-alert align="center"  v-if="success" type="success">
          Offer updated successfully.
        </v-alert>
        <v-alert align="center"   v-if="deleted" type="success">
          Offer deleted successfully.
        </v-alert>
        <v-card       
        class="mx-auto"
        max-width="560"      
        v-if="!deleted">
            <v-card-text>
                <v-list-item-title class="headline">Modify Offer</v-list-item-title>
            </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
            <v-file-input
                @change="uploadPic"
                multiple
                placeholder="Select your pictures"
                prepend-icon="mdi-image"
                outlined
                :show-size="1000"
            >
            Pictures Here
            </v-file-input>
          <v-row
          
          no-gutters
          >
            <div v-bind:key="pic.id" v-for="pic in pictures">
              <v-hover  v-slot:default="{ hover }">
                  <v-card @click="removePic(pic.id)" flat tile>
                        <v-img
                        :src="pic.src"
                        height="80"
                        width="80"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                                
                            </template>
                            <v-expand-transition>
                                    <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                    >
                                        <v-icon dark large>mdi mdi-close-circle</v-icon>
                                    </div>
                                </v-expand-transition>
                        </v-img>
                    </v-card> 
                </v-hover>
            </div>
          </v-row>
                   <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
            <v-text-field
                v-model="item.title"
                :counter="40"
                label="Title"
                required
            ></v-text-field>
            <v-text-field
                v-model="item.price"
                append-icon="mdi-currency-eur"
                label="Price"
                required
             ></v-text-field>
             <v-text-field
                v-model="item.capacity"
                append-icon="mdi-account"
                label="Capacity"
                required
             ></v-text-field>
            <v-text-field
                v-model="item.location"
                label="Location"
                required
            ></v-text-field>
            <v-textarea
                v-model="item.description"
                label="Description"
            ></v-textarea>
          </v-form>
          </v-card-text>
        <footer>
          <v-row class="row-fix">
             <v-col class="column">
         <v-card-actions style="padding: 0">
             <v-btn
            large
            tile
            @click="overlay=true"
            block
            class="delete-button"
            >
                Delete Offer
            </v-btn>
    </v-card-actions>
            </v-col>
             <v-col class="column">
    <v-card-actions style="padding: 0">
             <v-btn
            large
            tile
            block
            class="create-button"
            @click="create()"
            >
                Update Offer
            </v-btn>
    </v-card-actions>
             </v-col>
          </v-row>
        </footer>
      </v-card>
  </v-container>
  <v-overlay :value="overlay">
    <v-card
    class="mx-auto"
    max-width="344"
    raised
  >
    <v-card-text style="padding: 5px 16px">
      <v-row class="row-fix">
      <div class="subtitle-1 d-flex align-center">Confirmation</div>
      <v-btn
        class="d-flex float-right ml-auto"
        icon
        @click="overlay = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      </v-row>
    </v-card-text>
       <v-divider></v-divider>
    <v-card-text>
      <div class="title">
        Are you sure you want to delete this offer?
      </div>
    </v-card-text>
    <footer>
          <v-row class="row-fix">
             <v-col class="column">
         <v-card-actions style="padding: 0">
             <v-btn
            large
            tile
            text
            color="primary"
            @click="overlay=false"
            block
            >
                Cancel
            </v-btn>
    </v-card-actions>
            </v-col>
             <v-col class="column">
    <v-card-actions style="padding: 0">
             <v-btn
            large
            tile
            @click="deleteOffer"
            block
            class="create-button"
            >
                Confirm
            </v-btn>
    </v-card-actions>
             </v-col>
          </v-row>
        </footer>
  </v-card>  
    </v-overlay>
    </layout>
</template>
<script>
  import Layout from "../Layout";
  import {DATA} from "../../main";
  export default {
    components: {Layout},

    data() {
      return {
        valid: true,
        
        items: [],
        item: {},
        success: false,
        pictures: [],
        overlay: false,
        rules: [
        v => !!v || 'This field is required',
        ],
        i:0,
        reset: 0,
        deleted: false
      }
    },
    computed: {

    },
        mounted() {
            this.items = DATA.items;

            this.items.forEach(element => {
                if(element.id==this.$route.params.id) this.item=element;
            });
            this.item.pictures.forEach(element => {
                this.pictures.push({
                "id":this.i,
                "src": element
            })
            this.i++;
            });
        },
    methods: {
        uploadPic(){
          const image = event.target.files[0];
          const that = this;
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = event =>{
            that.pictures.push({
                "id":that.i,
                "src": event.target.result
            });
            that.i++;
            that.reset++;
          } 
        },
        removePic(id){
            this.pictures.forEach(element => {
                if(element.id===id)this.pictures.splice(this.pictures.indexOf(element), 1);
            });
        },
        create(){
            this.success=this.valid;
        },
        deleteOffer (){
          this.deleted=true;
          this.overlay=false;
        }
      }
    }
</script>

<style>
 .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.column {
  padding: 0 !important
}
.row-fix {
  margin: 0 !important
}
.delete-button {
        background: #762b2b;
        background: -webkit-linear-gradient(to right, #5f2b2b, #803131);
        background: linear-gradient(to right, #5f2b2b, #803131);
    }
</style>