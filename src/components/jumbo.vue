<script>
  export default {
    
  }
</script>

  <template>
    <div class="container text-center my-5">
      <div class="row align-items-center">
        <div class="col-4 text-start">
          <h1>Distant learning for further expansion</h1>
          <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process</p>
          <button><i class="fa-solid fa-download"></i> <span>Download free guide</span></button>
          <p>Have questions? <a href="#">Get Free Sample &rightarrow;</a></p>
        </div>
        <div id="other-bg-jumbo" class="col-8 bg-jumbo">
          <img src="/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="#">
        </div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.container{
  height: 100vh;
  
  .bg-jumbo{
    background:
    url('/img/maxcoach-shape-02.png') right,
    url('/img/maxcoach-shape-07.png') right bottom,
    url('/img/maxcoach-shape-08.png'),
    url('/img/maxcoach-shape-08.png');
    background-repeat: no-repeat, no-repeat,;
    background-position: right, 68% 99%, 10% 40%, 10% 73%;
  }
  img{
    width: max-content;
    border-radius: 50%;
    margin: 0 auto;
  }
}

#dot{
  position: absolute;
}
</style>