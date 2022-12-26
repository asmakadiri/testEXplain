<style>
.img{
  height: 50px;
  width: 120px;
  margin-left: 0px;
  margin-right: 20px;
}
</style>
<template>
  <div>
    <v-app-bar
        color="#E64A19"
        dense
    >
      <img src = '../assets/logoExplain.png' class="img"/>
      <v-tabs>
        <v-tab>ACCEUIL</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Aide</v-tab>
        <v-tab>Log Out</v-tab>

      </v-tabs>
    </v-app-bar>
  </div>

</template>


<script>
export default{
  props : {},
  components : {},
  data : ()=>{
    return{
      search : null,
    }
  }
}
</script>