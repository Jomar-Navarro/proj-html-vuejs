
<script>
  import { store } from '../data/store'; // Importa lo store dei dati
  import { Swiper, SwiperSlide } from 'swiper/vue'; // Importa il componente Swiper e SwiperSlide da Swiper Vue
  import { Pagination } from 'swiper/modules'; // Importa il modulo Pagination da Swiper
  import 'swiper/css'; // Importa gli stili di base di Swiper
  import 'swiper/css/pagination'; // Importa gli stili della paginazione di Swiper

  export default {
    components:{
      Swiper,
      SwiperSlide,
    },

  data(){
      return{
        modules: [Pagination], // Array di moduli da utilizzare con Swiper
        store, // Assegna lo store dei dati alla variabile store
      }
    },

     // Definizione delle proprietà (props) del componente
    props:{
      title: String, // Titolo del componente
      text: String, // Testo del componente
      cardImg: String, // Immagine della carta del componente
      name: String, // Nome del componente
      position: String, // Posizione del componente
    }
  }
</script>

<template>

  <div class="carousel text-center">
    <!-- Titolo principale -->
    <div class="main-title">
      <h6 class="sub-title text-uppercase">Great words about maxcoach</h6>
      <h2 class="title">Our <span>top learners'</span> verbatim</h2>
    </div>

    <!-- Contenitore per il componente Swiper -->
    <div class="swiper-wrapper">
      <!-- Inizializzazione del componente Swiper -->
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
      <!-- Loop per la creazione delle diapositive Swiper -->
        <swiper-slide v-for="item in store.carouselEl" :key="item">
          <div class="inner-slider mt-1 d-flex flex-column align-items-start bg-white py-5 rounded-3">
            <p class="title text-start">{{ item.title }}</p>
            <p class="text text-start">{{ item.text }}</p>
            <!-- Contenitore della carta -->
            <div class="card mt-3 border-0 d-flex justify-content-start" style="max-width: 540px;">
              <div class="card-wrapper row g-0">
                <!-- Immagine della carta -->
                <div class="col-md-4 square">
                  <img :src="item.cardImg" class="rounded-circle" alt="...">
                </div>
                <div class="col-md-8">
                  <!-- Contenuto della carta -->
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

    <!-- Sezione per la certificazione -->
    <div class="certification">
        <h4>Start today for getting <span>Online Certification</span></h4>
        <h2>You can be your own guiding star with out help!</h2>
        <div class="mt-5"><button class="btn ">Get started now</button></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.carousel{
  // Stili per il carousel
  // Immagini di background
  padding: 20px 0;
  background-color: $bg-gray;
  background-image: 
  url('/img/maxcoach-shape-02.png'),
  url('/img/maxcoach-shape-01.png'),
  ;
  background-repeat: no-repeat;
  background-position: 80% 95%, 20% 87%;
  position: relative;
}

 /* Stili per il titolo principale */
.main-title{
  margin: 50px 0 80px 0;
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

// Altezza del contenitore dello swiper
.swiper-wrapper{
  height: 50vh;
}

// Forma dell'immagine
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

/* Stili per il contenuto delle diapositive */
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

 /* Stili per il corpo della carta */
.card-body{
  width: 150%;
  .card-title{
    color: $title-color;
    font-weight: 700;
  }
}

/* Stili per la sezione di certificazione */
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

  /* Stili per il pulsante di certificazione */
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
}

</style>