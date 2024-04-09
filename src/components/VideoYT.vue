<script>
  export default {
    
  }
</script>

<template>
  <div class="wrapper mt-5">
    <div class="container text-center">
      <div class="row">
        <div class="youtube col-7">
          <img src="/img/home-2-popup-video-poster.jpg" alt="#">
          <img src="/img/icon-youtube-play.png" alt="#">
        </div>
  
        <div class="col-5 text-start my-5">
          <p class="sub-title text-uppercase">Get started <span>Efforlessly</span></p>
          <h2 class="title">Enjoy Our <span>Companionship</span></h2>
          <p class="text">Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some hidden hints of early-bird rewards as well</p>
          <p class="link my-5"><a href="#">Download free guidebook <i class="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.wrapper{
  height: 60vh;
  background: 
  url('/img/maxcoach-shape-07.png'),
  url('/img/maxcoach-shape-05.png');
  background-repeat: no-repeat;
  background-position: 49% 100%, 14% 10%, 59% -10% ;
  background-size: auto, auto, 100px;
}
.container{
  .youtube{
    img:first-child{
      position: relative;
    }
  
    img:last-child{
      position: absolute;
      left: 28%;
      top: 310%;
      transform: translate(100%);
    }
  }
}

.sub-title{
  color: $jumbotext;
  font-weight: 500;
  font-size: large;
  span{
    color: $title-color;
  }
}

.title{
  font-size: 3rem;
  color: $title-color;
  font-weight: 700;
  span{
    color: $text-green;
    font-weight: 400;
  }
}

.text{
  margin: 20px 120px 0 0;
  font-size: large;
  color: $text-body-secondary;
}

.link{
  a{
    text-decoration-color: $text-body-secondary;
    color: $text-green;
    font-weight: 700;
  }
}
</style>