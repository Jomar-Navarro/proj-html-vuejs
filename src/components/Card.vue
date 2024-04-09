<script>
import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
      }
    },

    
  }
</script>


<template>
  <div class="container text-center">
    <h6 class="text-uppercase">Stimulated to learn?</h6>
    <h1>Featured Online Courses</h1>

    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="(item,index) in store.cardContent" :key="index" class="card mt-5 border-0" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 square d-flex">
            <img :src="item.cardImage" class="img-fluid rounded-circle" alt="#">
          </div>
          <div class="col-md-8">
            <div class="card-body text-start ps-4">
              <h4 class="card-title">{{ item.price }}</h4>
              <h4 class="card-text">Learning to Write as a Professional Author</h4>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>


<style lang="scss" scoped>
.square{
  width: 180px;
  height: 180px;
  img{
    object-fit: cover;
  }
}
</style>