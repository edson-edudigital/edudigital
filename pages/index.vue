<template>
  <div>
    <banner :backgroundImage="require('~/assets/img/banner-bg.jpg')" :columnsTemplate="'2fr 1fr'">
      <template v-slot:left>
        <div id="content">
          <h1>Nós acreditamos que a aprendizagem nunca acaba</h1>
          <p>Na EDUdigital sabemos que a aprendizagem liberta o potencial de cada pessoa e 
          de cada organização. É por isso que implementamos plataformas online e 
          desenvolvemos conteúdos digitais para melhorar a igualdade entre as pessoas, 
          favorecer o acesso a formação de qualidade e promover a aprendizagem ao longo da vida.</p>

          <a href="#" class="btn btn-primary">Fale Connosco</a>
        </div>
      </template>

      <template class="cartoon" v-slot:right>
        <!-- <img ref="cartoom_" width="400" :src="require('~/assets/img/cartoon.png')" alt=""> -->
      </template>
    </banner>
    <Section>
      <Counter title="Number" :val="300"/>
    </Section>
    <Contactform />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import banner from '~/components/banner.vue'
import {anime_} from "~/assets/js/animate";
import Section from '~/components/sections/section.vue';
import Contactform from '~/components/contactform.vue';
import Counter from '../components/counter.vue';

export default Vue.extend({
  components: { banner, Section, Contactform, Counter },
  mounted(){

    anime_({
      targets:document.querySelector("#content")?.children,
      translateX: [-50,0],
      opacity:[0,1],
      easing:"linear",
      duration:800,
      delay:function(el:any,i:number,l:number){
        return i*400
      }
    })


  },  
  name: 'IndexPage',
})
</script>


<style scoped>

</style>