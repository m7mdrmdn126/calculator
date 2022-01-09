<template>
  <v-container class="grey lighten-5">
         <!-- output -->

        <v-row
          class="mt-6 "
        >
        <p class="dispaly-4 mx-auto"> {{ $store.state.result }}</p>
        
        </v-row>

        <!--inputs -->  
        <v-row
           style="height: 150px;"
        >
        <v-text-field
          v-model="$store.state.num1"
          label="first number "
          class="ma-5"
          type="number"
          
        > 
        </v-text-field>


      <v-text-field
          v-model="$store.state.opp"
          label="opreator "
          class="ma-5"
          
        > 
        </v-text-field>


        <v-text-field
          v-model="$store.state.num2"
          label="second number "
          class="ma-5"
          type="number"
        > 
        </v-text-field>
        </v-row>

        <v-row>
          <v-btn
            @click="$store.commit('res')"
            color="primary"
            elevation="7"
            block
            plain
            small
            text
            class="mx-auto"
          >
            calculate
          </v-btn>
        </v-row>
      </v-container>

 

</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
    alignments: [
      'start',
      'center',
      'end',
    ],
  }),
  }
</script>
