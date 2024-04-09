<script>
  export default {
    data(){
      return{
        content: [
          {
            cardImage: '/img/home-2-image-box-01.png',
            title: 'Customize Preferences',
            text: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
            link: 'Start here',
          },

          {
            cardImage: '/img/about-us-02-image-box-02.png',
            title: 'Cloud Storage',
            text: 'You can store online lessons via online cloud or download to your device and revise lessons on the way',
            link: 'Get Free Quote',
          },

          {
            cardImage: '/img/home-2-image-box-03.png',
            title: 'Multimedia Channels',
            text: 'We provide study material with varius formats: video, audio, slides, doc, prints, books, and applications.',
            link: 'Start Now',
          }
        ]
      }
    }
  }
</script>

  <template>
    <div class="container text-center">
      <h6 class="sub-title text-uppercase">maxcoach available courses</h6>
      <h2 class="title">Access <span>Smart Tutoring</span> Program For Benefits</h2>

      <div class="d-flex justify-content-center text-start mt-5">
        <div v-for="item in content" :key="item" class="card" style="width: 18rem;">
          <div class="card-body">
              <img :src="item.cardImage" class="card-img-top" alt="...">
              <h4 class="card-title my-3">{{ item.title }}</h4>
              <p class="card-text ">{{ item.text }}</p>
              <p><a href="#">{{ item.link }} <i class="fa-solid fa-arrow-right-long"></i></a></p>
          </div>
        </div>
      </div>

    </div>
  </template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.container{
  margin-top: 200px;
}

.sub-title{
  color: $jumbotext;
  font-weight: 500;
}

.title{
  color: $title-color;
  font-weight: 700;
  span{
    color: $text-green;
    font-weight: 400;
  }
}

.card{
  border: none;
  margin: 2rem 5rem;
  .card-img-top{
    width: fit-content;
  }
}

.card-body{
  width: 130%;
  p{
    color: $text-footer;
    font-size: 0.99rem;
    font-weight: 400;
  }

  p:last-child{
    a{
      color: $jumbotext;
      font-weight: 800;
      text-decoration: none;
      font-size: 0.8rem;
    }
  }
}

</style>