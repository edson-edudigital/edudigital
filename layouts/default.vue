<template>
    <div>
        <navbar />
        <Nuxt />
        <Footer />

        <a v-show="!onTop" class="btn btn-primary btnGoTop" @click="e=>{goTop(e)}" href="">go top</a>
    </div>
</template>

<script>
import navbar from '~/components/navbar/navbar.vue'
import Footer from '~/components/footer.vue'
export default {
  components: { navbar, Footer },

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
    }
  }
}
</script>

<style>


</style>