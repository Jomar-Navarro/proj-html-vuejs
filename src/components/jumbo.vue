<script>
  export default {
    data(){
      return{
        logoImage: ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png']
      }
    }
  }
</script>

  <template>
    <div class="circle">
      <div class="container text-center my-5">
        <div class="row align-items-center">

          <div class="col-5 text-start">
            <h1>Distant learning for further expansion</h1>
            <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process</p>
            <button><i class="fa-solid fa-download"></i> <span><strong>Download free guide</strong></span></button>
            <p class="link">Have questions? <a href="#">Get Free Sample <i class="fa-solid fa-arrow-right-long"></i></a></p>
          </div>

          <div class="col-7 bg-jumbo">
            <img class="cover" src="/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="#">
          </div>
        </div>

        <div class="client-logo justify-content-around d-flex">
          <img v-for="item in logoImage" :key="item" :src="`/img/client-logo-${item}`" alt="#">
        </div>
      </div>
    </div>

  </template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.circle{
  display: block;
  background: url('/img/maxcoach-shape-02.png') right;
  background-repeat: no-repeat;
  background-position: 85% 17%;
}

.container{
  height: 100vh;
  h1{
    color: $title-color;
    font-size: 3rem;
    font-weight: 700;
  }
  p{
    color: $jumbotext;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .bg-jumbo{
    background:
    url('/img/maxcoach-shape-07.png') right bottom,
    url('/img/maxcoach-shape-08.png'),
    url('/img/maxcoach-shape-08.png');
    background-repeat: no-repeat, no-repeat,;
    background-position: 68% 100%, 5% 40%, 5% 73%;
  }
  .cover{
    width: max-content;
    border-radius: 50%;
    margin: 0 auto;
  }
}

.container{
  button{
    background-color: $text-green;
    color: white;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    margin: 20px 0px;
  }

  .link{
  color: $jumbotext;
  font-size: 0.9rem;
  font-weight: 500;
    a{
      text-decoration-color: lightgrey;
      color: $text-green;
    }
  }

  .client-logo{
    margin-top: 100px;
    img{
      opacity: .5;
    }
    img:nth-child(2){
      width: 80px;
      height: 80px;
    }

    img:nth-child(3),
    img:nth-child(4),
    img:nth-child(5),
    img:nth-child(6)
    {
      margin-top: 25px;
      width: 150px;
      height: 40px;
    }
  }
}
</style>