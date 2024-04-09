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
    <h6 class="sub-title text-uppercase">Stimulated to learn?</h6>
    <h2 class="title">Featured Online Courses</h2>

    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="(item,index) in store.cardContent" :key="index" class="card mt-5 border-0" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 square d-flex">
            <img :src="item.cardImage" class="img-fluid rounded-circle" alt="#">
          </div>
          <div class="col-md-8">
            <div class="card-body text-start ps-4">
              <h4 v-if="item.price" class="card-title">{{ item.price }}<span class="digit">.00</span></h4>
              <h4 class="free" v-else>Free</h4>
              <h5 class="card-text">{{ item.program }}</h5>
              <div class="classes d-flex">
                <p class="card-text pe-5"><small class="text-body-secondary"><i class="fa-regular fa-file-lines"></i> <span>{{ item.lessons }} Lessons</span></small></p>
                <p class="card-text"><small class="text-body-secondary"><i class="fa-regular fa-user"></i> <span>{{ item.students }} Students</span></small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <button class="btn"><strong>View all courses <i class="fa-solid fa-arrow-right-long"></i></strong></button>
    </div>
    
  </div>
</template>


<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;



.sub-title{
  color: $jumbotext;
}

.title{
  color: $title-color;
  font-weight: 700;
}

.square{
  width: 180px;
  height: 180px;
  img{
    object-fit: cover;
  }
}

.free{
  color: $text-green;
  font-weight: 800;
}


.card-title{
  color: $text-green;
  font-weight: 800;
  .digit{
    font-size: 1.2rem;
  }

}

.card-text{
  color: $title-color;
}

.classes{
  p{
    color: $jumbotext;
    opacity: .8;
    font-weight: 500;
    i{
      padding-right: 5px;
    }
  }
}

.btn{
  background-color: $text-green;
  color: white;
  padding: 15px 55px;
  text-align: center;
}
</style>