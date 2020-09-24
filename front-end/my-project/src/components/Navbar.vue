<template>
  
<div>
    <v-layout row justify-center>
      <v-toolbar app dark color="blue-grey darken-1" class="hidden-xs-and-down">
        <v-toolbar-title>Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn @click="$router.push('/')">
           <v-icon>home</v-icon>Home
         </v-btn>
         <v-btn @click="$router.push('about')">
           <v-icon>info</v-icon>About
         </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-layout>
</div>

  
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
