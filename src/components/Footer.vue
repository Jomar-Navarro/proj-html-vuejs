<script>
  export default {
    
  }
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h5>Adress</h5>
        <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
        <p>+1 (305) 547-9909 (9am - 5pm EST,Monday - Friaday)</p>
        <p>support@maxcoach.com</p>
        <div class="icons">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div class="col-3">
        <h5>Explore</h5>
        <div class="row">
          <div class="col-6 text">
            <p>Start here</p>
            <p>Blog</p>
            <p>About us</p>
          </div>
          <div class="col-6 text">
            <p>Success story</p>
            <p>Courses</p>
            <p>Contact us</p>
          </div>

        </div>
      </div>
      <div class="col-2 text">
        <h5>Information</h5>
        <p>Membership</p>
        <p>Purchase guide</p>
        <p>Privacy policy</p>
        <p>Terms of services</p>
      </div>
    </div>
  </div>

  <div class="text-center my-5 opacity-50">
    <p><i class="fa-regular fa-copyright"></i> 2020 Maxcoach. All Rights Reserved</p>
  </div>
</template>


<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

p{
  color: $text-footer;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 600;

    &:hover{
    color: $text-green;
    cursor: pointer;
    }
}

.icons{
  i{
    font-size: 25px;
    margin: 15px 30px 0px 0px;
    color: $text-footer;
    opacity: .6;

    &:hover{
      color: $text-green;
      cursor: pointer;
    }
  }
}
</style>