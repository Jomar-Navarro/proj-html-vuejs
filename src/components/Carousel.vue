
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import '../style.css'
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
  <div class="my-5">
    <div class="swiper-wrapper text-center">
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
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="/img/testimonial-avata-01.jpg" class="img-fluid rounded-circle" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
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
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-wrapper{
  height: 60vh;
}

.square{
  width: 70px;
  height: 70px;
}

</style>