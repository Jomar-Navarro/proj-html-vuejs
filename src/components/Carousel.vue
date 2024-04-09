
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  // import required modules
  export default {
    components:{
      Swiper,
      SwiperSlide,
    },

  data(){
      return{
        modules: [Pagination],
      }
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
    <swiper-slide>
      <div class="inner-slider mt-1 d-flex flex-column align-items-start">
        <p class="title text-start">High level of efficiency and scientific teaching methods</p>
        <p class="text text-start">I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
        <div class="card mt-3 border-0 d-flex justify-content-start" style="max-width: 540px;">
          <div class="card-wrapper row g-0">
            <div class="col-md-4 square">
              <img src="/img/testimonial-avata-03.jpg" class="rounded-circle" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body text-start d-flex flex-column">
                <h6 class="card-title text-uppercase">Florence Themes</h6>
                <p class="card-text"><small class="text-body-secondary">/Multimedia admin</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
  </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.main-title{
  margin: 150px 0 80px 0;
  .sub-title{
    color: $jumbotext;
  }
  
  .title{
    color: $title-color;
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
</style>