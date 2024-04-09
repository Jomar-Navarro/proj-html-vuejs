
<script>
  export default {
    
  }
</script>

<template>
  <div class="blog-wrapper">
    <div class="container text-start ">
      <div class="row">
      <div class="col-4">
        <p class="sub-title text-uppercase">Enjoyable insights</p>
        <h2 class="title">Most Viewed <span>Best Blogs</span></h2>
        <div class="options">
          <p><i class="fa-solid fa-arrow-right-long"></i> Become a Better Blogger: Content Planning</p>
          <p><i class="fa-solid fa-arrow-right-long"></i> Promoting Your Online Business on Pinterest</p>
          <p><i class="fa-solid fa-arrow-right-long"></i> Gamification and Game-Based Learning</p>
          <p><i class="fa-solid fa-arrow-right-long"></i> Designing an Online Course from Expert's Perspective</p>
          <p><i class="fa-solid fa-arrow-right-long"></i> Why Online Courses Are the Future of Education</p>
        </div>
      </div>

      <div class="col-4 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/main.scss' as *;

.blog-wrapper{
  margin: 250px 0;
}

.options{
  margin-top: 30px;
  color: $title-color;
  font-weight: 500;
}
</style>