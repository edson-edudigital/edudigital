<template>
    <div>
        <navbar id="navbar" />
        <Magicnavbar @fixed="addPadding" id="magicnavbar" />
        <Nuxt ref="body_content" id="body-content" />
        <Footer />

        <a v-show="!onTop" class="btn btn-primary btnGoTop" @click="e=>{goTop(e)}" href=""><fa :icon="['fas','fa-circle-arrow-up']"/></a>
    </div>
</template>

<script>
import navbar from '~/components/navbar/navbar.vue'
import Footer from '~/components/footer.vue'
import Magicnavbar from '~/components/navbar/magicnavbar.vue';
export default {
  components: { navbar, Footer, Magicnavbar },

  data(){
    return{
      onTop:true
    }
  },

  mounted(){

    window.addEventListener("scroll",(e)=>{

      let scrollTop = window.scrollY;
      if(scrollTop > 10){
        this.onTop = false
      }else{
        this.onTop = true
      }
    });

  },

  methods:{
    goTop(e){
      e.preventDefault();

      window.scrollTo({top:0,behavior:"smooth"});
    },

    addPadding(){
      let padding = document.getElementById("body-content").style.paddingTop;
      document.getElementById("body-content").style.paddingTop= padding == "58px" ? "0" : "58px"
    }
  }
}
</script>

<style>

 #magicnavbar{
  display: none;
  
 }

 @media screen and (max-width:950px ){

  #magicnavbar{
    display: block;
  }

  #navbar{
    display: none;
  }

 }



</style>