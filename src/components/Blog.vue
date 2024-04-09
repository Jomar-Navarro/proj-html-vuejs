
<script>
  export default {
    
  }
</script>

<template>
  <div class="blog-wrapper">
    <div class="container text-start ">
      <div class="row">
      <div class="col-4 flex-column justify-content-center d-flex ps-4">
        <p class="sub-title text-uppercase">Enjoyable insights</p>
        <h2 class="title">Most Viewed <span>Best Blogs</span></h2>
        <div class="options">
          <div class="d-flex"><span class="pe-3 arrow"><i class="fa-solid fa-arrow-right-long"></i></span><p>Become a Better Blogger: Content Planning</p></div>
          <div class="d-flex"><span class="pe-3 arrow"><i class="fa-solid fa-arrow-right-long"></i></span><p>Promoting Your Online Business on Pinterest</p></div>
          <div class="d-flex"><span class="pe-3 arrow"><i class="fa-solid fa-arrow-right-long"></i></span><p>Gamification and Game-Based Learning</p></div>
          <div class="d-flex"><span class="pe-3 arrow"><i class="fa-solid fa-arrow-right-long"></i></span><p>Designing an Online Course from Expert's Perspective</p></div>
          <div class="d-flex"><span class="pe-3 arrow"><i class="fa-solid fa-arrow-right-long"></i></span><p>Why Online Courses Are the Future of Education</p></div>
        </div>
      </div>

      <div class="col-4 d-flex justify-content-center">
        <div class="card w-75 border-0 shadow" style="width: 18rem;">
          <img src="/img/artist-blog-03-480x352.jpeg" class="card-img-top" alt="#">
          <div class="card-body ">
            <p class="sub-title text-uppercase">Artist</p>
            <h5 class="card-title">Brush Strokes Energize Trees in Paintings</h5>
            <div class="icons d-flex">
              <p class="card-text pe-5"><i class="fa-regular fa-calendar"></i> May 15, 2020</p>
              <p class="card-text"><i class="fa-regular fa-eye"></i> 688 views</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4 d-flex">
        <div class="card w-75 border-0 shadow" style="width: 18rem;">
          <img src="/img/artist-blog-01-480x352.jpg" class="card-img-top" alt="#">
          <div class="card-body">
            <p class="sub-title text-uppercase">Artist</p>
            <h5 class="card-title">Pocket-Sized Notebooks Hold Miniature Paintings</h5>
            <div class="icons d-flex">
              <p class="card-text pe-5"><i class="fa-regular fa-calendar"></i> May 15, 2020</p>
              <p class="card-text"><i class="fa-regular fa-eye"></i> 603 views</p>
            </div>
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
  margin: 150px;
}

.sub-title{
  color: $jumbotext;
  font-weight: 500;
  font-size: 1.1rem;
  span{
    color: $title-color;
  }
}

.title{
  font-size: 2.3rem;
  color: $title-color;
  font-weight: 700;
  span{
    color: $text-green;
    font-weight: 400;
  }
}

.options{
  margin-top: 30px;
  color: $title-color;
  font-weight: 700;
  .arrow{
    font-weight: 800;
  }
}

.card-body{
  .sub-title{
    font-size: 1rem;
  }
  .card-title{
    color: $title-color;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .card-text{
    padding: 20px 0px 0px 10px;
    font-size: 0.9rem;
    color: $jumbotext;
    font-weight: 500;
  }
}
</style>