<style>
  .bar{
    margin-bottom: 30px;
  }

</style>

<template>
  <div>
      <headerBar class="bar"></headerBar>
      <v-row>
        <v-col cols = "3">
          <filters v-bind:dataToFilters = "dataToFilters" v-on:selectedFilters="captureFilters" v-on:Renitialiser="Renitialisation"></filters>
        </v-col>
        <v-col cols = "9">
          <result v-bind:dataToResult = "dataToResult" ></result>
        </v-col>
      </v-row>
  </div>

</template>

<script>

import axios from "axios";
import filters from "../components/filter.vue"
import headerBar from "../components/headerExplain.vue"
import result from "../components/result.vue"

const PORT = 'http://localhost:3000';

export default {
  components : {headerBar,filters,result},
  data : () =>{
      return {
        myData : [],
        filterdData : [],
      }
  },
  mounted() {
    axios
        .get(PORT)
        .then((response) =>{
          this.myData = response.data;
          console.log(this.myData)
        })

  },
  computed : {
    dataToFilters(){
      let result = this.myData.map((item) =>({
        "id" : item["id"],
        "name" : item["name"],
        "children" : this.mapChildren(item["children"],[])
      }))
      return result
    },
    dataToResult(){
      let dataToResult = this.filterdData.length>0 ? this.filterdData : this.myData;
      return dataToResult;
    }
  },

  methods : {
    mapChildren(tabChildren,dataToFilters){
      if(tabChildren && tabChildren.length > 0){
        console.log("tabChildren",tabChildren)
        tabChildren.forEach((child)=>{
          dataToFilters.push({
            "id" : child["id"],
            "name" : child["name"],
            "children" : this.mapChildren(child["children"],[])
          })
        })
      }
      return dataToFilters
    },
    captureFilters(selectedFilters){
      console.log("from main je capte",selectedFilters)
      axios
          .post(PORT + '/selectedData', selectedFilters)
          .then((response) =>{
            this.filterdData = response.data;
          })
    },
    Renitialisation(){
      this.filterdData = [];
      console.log("filtred data",this.filtredData)
    }
  },



}

</script>