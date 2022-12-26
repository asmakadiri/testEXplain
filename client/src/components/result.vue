<style scoped>
  .result{
    overflow-y: scroll;
  }
  .dataCard{
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .toolbar{
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

<template>
  <di>
    <v-card height= 650 class = "result" color="#FAFAFA">
      <v-card-title>{{ dataToResult.length}} Résultats </v-card-title>
        <v-toolbar
            color="blue"
            class = "toolbar"
        >
          <v-text-field
              v-model="search"
              clearable
              flat
              prepend-inner-icon="mdi-magnify"
              label="Recherche par nom prénom ..."
          ></v-text-field>
        </v-toolbar>
      <v-card v-for="item in dataToResult"  :key="item.id"  class ="dataCard">
        <v-row>
          <v-col v-for="col in [0,1,2]" :key="col">
            <v-row  v-for="row in [0,1,2]" :key="row">
              <v-card-text>
                {{ key[col][row]}} : {{ item[key[col][row]] }}
              </v-card-text>

            </v-row>

          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </di>


</template>

<script>
//{{ key[col][row]}} : {{ item[key[col][row]] }}
  export default {
    components : {},
    props : ['dataToResult'],
    data : ()=>{
      return {
        key : [
          ["code","name","kind"],
          ["created_at","is_current","population"],
          ["articles_count","websites_count","sources_count"]
        ],
        search : null,
      }
    }
  }

</script>