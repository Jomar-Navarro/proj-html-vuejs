<script>
  import Header from './components/Header.vue';
  import Jumbo from './components/jumbo.vue'
  import Card from './components/Card.vue';
  import Smart from './components/Smart.vue'
  import VideoYT from './components/VideoYT.vue';
  import Blog from  './components/Blog.vue';
  import Newsletter from './components/Newsletter.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    components:{
      Header,
      Jumbo,
      Card,
      Smart,
      VideoYT,
      Blog,
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
    <VideoYT />
    <Blog />
    <Newsletter />
    <Footer />
  </div>
</template>

<style lang="scss">
@use './assets/scss/main.scss';

</style>