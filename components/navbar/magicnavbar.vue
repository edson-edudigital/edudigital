<template>
  <header :class="fixed ? 'fixed' : ''">

    <div class="header-button">
      <Logo :width="150" class="logo-magicnavbar" />
      <button @click="toogleMagic" type="button" class="btn"><fa :icon="['fas', 'bars']" /></button>

    </div>
    
 
    <transition name="fade" mode="out-in">

      <div v-show="fixed" class="menus-magicnavbar">
        <nav>
          <ul>
           <li class="drop-parent"><a class="menu link" href="#">Plataformas eLearning</a>
                <div class="drop-down">
                    <ul>
                        <li><a class="menu link" href="#">Plataformas Open-source</a></li>
                        <li><a class="menu link" href="#">Plataformas Totara</a></li>
                        <li><a class="menu link" href="#">Hosting Gerido & Cloud</a></li>
                    </ul>
                </div>
            </li>
            <li><a class="menu link" href="#">Cursos de Elearning à medida</a></li>
            <li><a class="menu link" href="#">Formação certifiada</a></li>
            <li><a class="menu link" href="#">APPs & Serviços Web</a></li>
            <li><a class="menu link" href="#">Software Académicos</a></li>
          </ul>
        </nav>

        <Flags class="flags-magicnavbar" />

      </div>
    </transition>
  </header>
</template>

<script>
import Logo from '../logo.vue';
import { anime_} from '~/assets/js/animate';
import Flags from '../flags.vue';
export default {
    components: { Logo, Flags },
    data(){
      return{
        fixed:false

      }
    },

    methods:{
      toogleMagic(){
        this.fixed=!this.fixed

        this.$emit("fixed");
      }

    }

}
</script>

<style lang="scss" scoped>
  header{
    background: #fff;
    padding: 10px 30px;

    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .header-button{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .fixed{
    width: 100%;
    z-index: 99999999;
    position: fixed;
  }

  .menus-magicnavbar{
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999999;
    background: #fff;
    top: 55px;
    left: 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;

    .flags-magicnavbar{

      width: 40%;
      margin: auto;
    }

    nav{
      // border: 1px solid red;
      text-align: center;
      margin-bottom: 10px;

      ul{
        li{
          border-bottom: 1px solid var(--color-light);
          padding: 10px 0;
          a{
          }
        }
      }
    }
  }
  .drop-down{
    position: relative;
    box-shadow: none;
    padding-top: 0;
    border-radius: 0;
    margin: auto;
    top: none;
    border-top: 1px solid var(--color-cinza);
    border-bottom: 1px solid var(--color-cinza);

  }

  .logo-magicnavbar{
    display: flex;
    padding: 0;
    align-items: center;
  }

  button{
    border: none;
    border-radius: 2px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>