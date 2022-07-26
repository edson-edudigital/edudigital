<template>
  <div>
    <banner 
    :backgroundImage="require('~/assets/img/banner-bg.jpg')" 
    :columnsTemplate="'2fr 1fr'"
    :title="'Nós acreditamos que a aprendizagem nunca acaba'"
    :buttonActionText="'Fale Connosco'"
    :buttonActionHref="'/'"
    >
      <template v-slot:text>
          Na EDUdigital sabemos que a aprendizagem liberta o potencial de cada pessoa e 
          de cada organização. É por isso que implementamos plataformas online e 
          desenvolvemos conteúdos digitais para melhorar a igualdade entre as pessoas, 
          favorecer o acesso a formação de qualidade e promover a aprendizagem ao longo da vida.
      </template>

      <template class="cartoon" v-slot:cartoon>
        <!-- <img ref="cartoom_" width="400" :src="require('~/assets/img/cartoon.png')" alt=""> -->
      </template>
    </banner>
    <Section :id="'main-section'">
      
    </Section>
    <Contactform />
  </div>
</template>

<script>

import Vue from 'vue'
import banner from '~/components/banner.vue'

import Section from '~/components/sections/section.vue';
import Contactform from '~/components/contactform.vue';
import Counter from '../components/counter.vue';


export default Vue.extend({
  components: { banner, Section, Contactform, Counter },
  mounted(){

    


  },  

  
  name: 'IndexPage',
})
</script>


<style scoped>

</style>