<script>
  import Header from './components/Header.vue';
  import Jumbo from './components/jumbo.vue'
  import Card from './components/Card.vue';
  import Smart from './components/Smart.vue'
  import Footer from './components/Footer.vue';
  import Newsletter from './components/Newsletter.vue';
  import Video from './components/Video.vue';
  
  export default {
    components:{
      Header,
      Jumbo,
      Card,
      Smart,
      Video,
      Newsletter,
      Footer,

    }
  }
</script>

<template>
  <div>
    <Header />
    <Jumbo />
    <Card />
    <Smart />
    <Video />
    <Newsletter />
    <Footer />
  </div>
</template>

<style lang="scss">
@use './assets/scss/main.scss';

</style>