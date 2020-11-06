<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from '../firebase'
const db = firebase.firestore();
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
created(){
    db.collection('employee').get().then(snapshot=>{
      snapshot.forEach(doc =>{
        console.log(doc.data());
      })
    })
  }
}
</script>

