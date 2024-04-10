<script>  
  import { store } from '../data/store'
  import Dropdown from './comp/Dropdown.vue'
  export default {
    data(){
      return{
        store,
      }
    },

    props:{
      titles: Array,
    },

    components:{
      Dropdown,
    }
  }
</script>


<template>
  <div class="container my-3 p-0">
    <nav class="navbar navbar-expand-lg">
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
        <div class="collapse navbar-collapse justify-content-end justify-content-between" id="navbarScroll">
          <!-- DropDown -->
          <dropdown
            v-for="(title,index) in store.titles"
            :key="index"
            :droptitle="title" />
          <!-- DropDown -->
          <div class="icon">
            <i class="fa-regular fa-circle-user"></i>
          </div>
          <!-- SearchBar -->
          <form class="d-flex align-items-center" role="search">
            <input class="form-control border-0" type="search" placeholder="Search" aria-label="Search">
            <button class="border-0"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <!-- SearchBar -->

        </div>
      </div>
    </nav>
  </div>
</template>


<style lang="scss">
@use '/src/assets/scss/main.scss' as *;

  .logo{
    img{
    width: 160px;
    margin-right: 150px;
  }
  }

  .icon{
    i{
      font-size: large;
      &:hover{
        color: $text-green;
      }
    }
  }

  form{
    button{
      position: absolute;
      right: 0;
      margin-right: 20px;
      color: $text-green;
      i{
        font-size: large;
      }
    }
  }
</style>