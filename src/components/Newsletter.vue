<script>
  export default {
    
  }
</script>

  <template>
    <div id="news">
      <div class="container text-center">
        <div class="newsletter justify-content-center flex-column d-flex">
          <h2><strong>Subscribe</strong> <span>Newsletter</span></h2>
          <h5>Enter your email address to register to our newsletter subscription delivered on a regular basis!</h5>
          <form class="subscribe d-flex position-relative">
            <input type="text" class="form-control" placeholder="Enter your email...">
            <button><strong>Subscribe</strong></button>
          </form>
        </div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

#news{
  // Immagine in background
  background-image:
  url('/img/maxcoach-shape-02.png'),
  url('/img/maxcoach-shape-09.png');
  background-position: 80% 60%, 79% 26%;
  background-repeat: no-repeat;
  .container{
  height: 100%;
  padding: 0px 200px;
    .newsletter{
      height: 100%;
      margin: 140px;
      h2{
        padding-bottom: 20px ;
        strong{
          color: $title-color;
        }

        span{
          color: $text-green;
        }
      }

      h5{
        line-height: 40px;
      }
      
      .subscribe{
        input{
          height: 50px;
          width: 97%;
        }
        
        button{
          position: absolute;
          background-color: $text-green;
          color: white;
          height: 100%;
          border: none;
          border-radius: 0px 5px 5px 0px;
          width: 20%;
        }
      }
    }
  }
}
</style>