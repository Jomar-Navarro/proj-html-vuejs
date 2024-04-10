<script>
  import { store } from '../../data/store';
  export default {
    props:{
      droptitle: String,
    },

    data(){
      return{
        store,
      }
    }
  }
</script>

  <template>
      <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ droptitle }}
          </a>
          <ul class="dropdown-menu">
            <li v-for="(item, index) in store.dropDownMenu" :key="index"><a v-for="(el, ind) in item.menu" :key="ind" class="dropdown-item" href="#">{{ el }}</a></li>
          </ul>
        </li>
      </ul>
  </template>

<style lang="scss" scoped>
  li{
    a{
      color: black;
    }
  }
</style>