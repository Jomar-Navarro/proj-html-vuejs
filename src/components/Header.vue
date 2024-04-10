<script>  
  import { store } from '../data/store'
  import Dropdown from './comp/Dropdown.vue'
  export default {
    // Definizione dei dati del componente
    data(){
      return{
        store, // Assegna lo store dei dati alla variabile store
      }
    },

    // Definizione delle proprietà (props) del componente
    props:{
      dropDownMenu: Array, // Definisce la proprietà dropDownMenu come un array
    },

    // Definizione dei componenti figlio del componente principale
    components:{
      Dropdown,
    }
  }
</script>


<template>
  <div class="shadow">
    <div class="container py-3 p-0">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <!-- Logo del sito -->
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
        <!-- /Logo del sito -->
        <div class="collapse navbar-collapse justify-content-end justify-content-between" id="navbarScroll">

          <!-- DropDown, loop per la creazione di elementi Dropdown -->
          <dropdown
            v-for="(menuTitle,index) in store.dropDownMenu"
            :key="index"
            :droptitle="menuTitle.title" />
          <!-- /DropDown -->

          <!-- Icona per l'utente-->
          <div class="icon">
            <i class="fa-regular fa-circle-user"></i>
          </div>
          <!-- /Icona -->
          
          <!-- SearchBar -->
          <form class="d-flex align-items-center" role="search">
            <input class="form-control border-0" type="search" placeholder="Search" aria-label="Search">
            <button class="border-0"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <!-- /SearchBar -->

        </div>
      </div>
    </nav>
    </div>
  </div>

</template>


<style lang="scss">
@use '/src/assets/scss/main.scss' as *;

// Stile per il logo
  .logo{
    img{
    width: 160px;
    margin-right: 150px;
  }
  }

// Stile per l'icona utente
  .icon{
    i{
      font-size: large;
      &:hover{
        color: $text-green;
      }
    }
  }

  // Stile per l'input di ricerca
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