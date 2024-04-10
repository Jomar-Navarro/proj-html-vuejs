
<script>
  import { store } from '../data/store';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  export default {
    components:{
      Swiper,
      SwiperSlide,
    },

  data(){
      return{
        modules: [Pagination],
        store,
      }
    },

    props:{
      title: String,
      text: String,
      cardImg: String,
      name: String,
      position: String,
    }
  }
</script>

<template>

  <div class="carousel text-center">
    
    <div class="main-title">
      <h6 class="sub-title text-uppercase">Great words about maxcoach</h6>
      <h2 class="title">Our <span>top learners'</span> verbatim</h2>
    </div>

    <div class="swiper-wrapper">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in store.carouselEl" :key="item">
          <div class="inner-slider mt-1 d-flex flex-column align-items-start">
            <p class="title text-start">{{ item.title }}</p>
            <p class="text text-start">{{ item.text }}</p>
            <div class="card mt-3 border-0 d-flex justify-content-start" style="max-width: 540px;">
              <div class="card-wrapper row g-0">
                <div class="col-md-4 square">
                  <img :src="item.cardImg" class="rounded-circle" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body text-start d-flex flex-column">
                    <h6 class="card-title text-uppercase">{{ item.name }}</h6>
                    <p class="card-text"><small class="text-body-secondary">{{ item.position }}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </swiper-slide>
      </swiper>
    </div>

    <div class="certification my-5">
        <h4>Start today for getting <span>Online Certification</span></h4>
        <h2>You can be your own guiding star with out help!</h2>
        <div class="mt-5"><button class="btn ">Get started now</button></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.carousel{
  background-image: 
  url('/img/maxcoach-shape-02.png'),
  url('/img/maxcoach-shape-01.png'),
  ;
  background-repeat: no-repeat;
  background-position: 80% 100%, 20% 90%;
  position: relative;
}
.main-title{
  margin: 150px 0 80px 0;
  .sub-title{
    color: $jumbotext;
    font-size: 1rem;
    opacity: .8;
  }
  
  .title{
    color: $title-color;
    font-weight: 700;
    font-size: 2.1rem;
    span{
      color: $text-green;
      font-weight: 400;
    }
  }
}

.swiper-wrapper{
  height: 50vh;
}

.square{
  img{
    width: 70px;
    height: 70px;
  }
}

.card-wrapper{
  display: flex;
  align-items: center;
}

.inner-slider{
  padding: 0 100px;
  .title{
    color: $title-color;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .text{
    color: $text-footer;
    font-size: 1.07rem;
    font-weight: 500;
  }
}

.card-body{
  width: 150%;
  .card-title{
    color: $title-color;
    font-weight: 700;
  }
}


.certification{
  position: relative;
  height: 22vh;
  h4{
    color: $title-color;
    font-weight: 700;
  }

  span{
    color: $text-green;
    font-weight: 400;
    font-size: 1.7rem;
  }

  h2{
    color: $title-color;
    font-weight: 700;
  }

  .btn{
    background-color: $text-green;
    color: white;
    padding: 15px 60px;
    text-align: center;
    font-weight: 700;
    font-size: 0.9rem;
    &:hover{
      background-color: $title-color;
      color: white;
      transform: scale(1.1);
    }
  }

  .circle{
    position: absolute;
    z-index: 99;
    top: 120px;
    left: 80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid rgba(47, 173, 150, 0.5);
  }
}

</style>