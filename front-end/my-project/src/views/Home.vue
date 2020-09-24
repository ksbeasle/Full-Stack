<template>
    <div>
       <h1>HOME</h1>
       <!-- <h1>{{games}}</h1> -->
       <li v-for="game in games" :key="game">{{ game  }}</li>
       <h1 v-if="error">{{error}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
  data () {
    return {
      games: null,
      error: null
    }
  },
  mounted(){
    console.log('mounted')
    //'https://api.coindesk.com/v1/bpi/currentprice.json'
    axios 
      .get('http://localhost:3000/')
      .then(response => (this.games = response)).catch((err) => {
        this.error = err
      })
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
