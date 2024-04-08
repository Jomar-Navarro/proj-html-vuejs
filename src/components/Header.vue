<script>  
  import { store } from '../data/store'
  import Dropdown from './comp/Dropdown.vue'
  export default {
    data(){
      return{
        store,
      }
    },

    components:{
      Dropdown,
    }
  }
</script>


<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="logo">
          <a class="navbar-brand" href="#">
            <img src="/img/dark-logo.png" alt="">
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <!-- DropDown -->
          <dropdown v-for="item in 6" :key="item" />
          <!-- DropDown -->

          <!-- SearchBar -->
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <!-- SearchBar -->

        </div>
      </div>
    </nav>
  </div>
</template>


<style lang="scss" scoped>
  img{
    width: 160px;
    margin-right: 150px;
  }
</style>