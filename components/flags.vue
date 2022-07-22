<template>
  <ul class="flags">
    <li><a href="#"><img width="20" :src="require('~/assets/img/flags/ao.png')" alt="" srcset=""></a></li>
    <li><a href="#"><img width="20" :src="require('~/assets/img/flags/cv.png')" alt="" srcset=""></a></li>
    <li><a href="#"><img width="20" :src="require('~/assets/img/flags/mz.png')" alt="" srcset=""></a></li>
    <li><a href="#"><img width="20" :src="require('~/assets/img/flags/pt.png')" alt="" srcset=""></a></li>
    <li><a href="#"><img width="20" :src="require('~/assets/img/flags/en.png')" alt="" srcset=""></a></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .flags{
      list-style: none;
      display: flex;
      width: 100%;
      justify-content: space-around;
  }

  li{
    transition: all 400ms ease;
  }

  li:hover{
    transform: translateY(5px)!important;
  }

</style>

