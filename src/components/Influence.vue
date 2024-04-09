<script>
  import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
      }
    },

    props:{
      title: String,
      num: String,
      subTitle: String,
    }
  }
</script>

<template>
  <div id="world" class="container my-5">
    <div class="row d-flex justify-content-center">
      <div v-for="(item,index) in store.worldwide" :key="index" class="card border-0" style="width: 18rem;">
        <div class="card-body text-center">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text number">{{ item.num }}</p>
          <p class="card-subtitle text-uppercase">{{ item.subTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

#world{
  .row{
    margin-top: 125px;
    margin-bottom: 125px;
  }

  .card-title{
    font-size: 1.9rem;
    color: $title-color;
  }

  .number{
    font-size: 4rem;
    font-weight: 700;
    color: $text-green;
  }

  .card-subtitle{
    color: $jumbotext;
    font-weight: 700;
  }
}
</style>