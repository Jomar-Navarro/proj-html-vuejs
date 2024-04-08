<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import Newsletter from './components/Newsletter.vue';
  export default {
    components:{
      Header,
      Main,
      Newsletter,
      Footer,

    }
  }
</script>

<template>
  <div>
    <Header />
    <Main />
    <Newsletter />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>