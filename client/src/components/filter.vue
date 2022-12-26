<style scoped>
  .filter{
    overflow-y: scroll;
  }
  .btn{
    margin-top: 200px;
    margin-left: 5px;
  }

</style>
<template>
  <v-card height = 650 class = "filter">
    <v-row>
      <v-col>
        <v-card-title>FILTER</v-card-title>
      </v-col>
      <v-col>
        <v-card-title>
          <v-btn plain @click="sendRenitialiser">Rénitialiser</v-btn>
        </v-card-title>

      </v-col>
    </v-row>

    <v-treeview
        class = "treeview"
        selectable
        selection-type="all"
        activatable
        item-disabled="locked"
        :items="dataToFilters"
        @input="getActiveValue"
    ></v-treeview>
    <v-btn block class="btn" color="#2E7D32"  @click = "sendFilters">
      Recherche
    </v-btn>

  </v-card>
</template>

<script>
export default {
  props : ['dataToFilters'],
  data: () => ({
    selectedFilters : []
  }),
  methods :{
    getActiveValue(value){
      this.selectedFilters = value;
      console.log("selected values",value)
    },
    sendFilters(){
      this.$emit("selectedFilters",this.selectedFilters)
    },
    sendRenitialiser(){
      this.$emit("Renitialiser")
    }

  }
}
</script>