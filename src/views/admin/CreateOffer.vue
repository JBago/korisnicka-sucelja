<template>
  <layout>
      <v-container 
      style="margin-top: 60px">
        <v-alert  v-if="success" type="success">
          <p>Offer created successfully.</p>
        </v-alert>
        <v-card       
        class="mx-auto"
        max-width="460"      
        v-if="!success">
            <v-card-text>
                <v-list-item-title class="headline">Create Offer</v-list-item-title>
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
                v-model="name"
                :counter="40"
                :rules="nameRules"
                label="Name"
                required
            ></v-text-field>
            <v-text-field
                v-model="price"
                append-icon="mdi-currency-eur"
                :rules="rules"
                label="Price"
                required
             ></v-text-field>
             <v-text-field
                v-model="capacity"
                append-icon="mdi-account"
                :rules="rules"
                label="Capacity"
                required
             ></v-text-field>
            <v-text-field
                v-model="location"
                label="Location"
                :rules="rules"
                required
            ></v-text-field>
            <v-textarea
                v-model="description"
                label="Description"
            ></v-textarea>
          </v-form>
          </v-card-text>
        <footer>
         <v-card-actions style="padding: 0">
             <v-btn
            large
            tile
            block
            color="primary"
            @click="create()"
            >
                Create
            </v-btn>
    </v-card-actions>
        </footer>
      </v-card>
  </v-container>
  </layout>
</template>
<script>
  export default {
    components: {

       },
    data() {
      return {
        valid: true,
        name: '',
        price: '',
        capacity: '',
        location: '',
        description: '',
        success: false,
        pictures: [],
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length<=40 || 'Name is too long',
        ],
        rules: [
        v => !!v || 'This field is required',
        ],
        i:0,
        reset: 0
      }
    },
    computed: {

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
</style>
