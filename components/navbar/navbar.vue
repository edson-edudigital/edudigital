<template>
  <header>
    <div id="top">
        <div class="top-1">
            <flags />
        </div>
        <div class="top-2">
            <NuxtLink to="/">
                <logo :width="150" />
            </NuxtLink>
        </div>
        <div class="top-3">
            <nav>
                <ul>
                    <li><NuxtLink class="menu link" to="/">Fale Connosco</NuxtLink></li>
                    <li><NuxtLink class="menu link" to="/">Sobre Nós</NuxtLink></li>
                    <li><NuxtLink class="menu link" to="/">Case Studies</NuxtLink></li>
                    <li><NuxtLink class="menu link" to="/">Marketplace</NuxtLink></li>
                    <li><NuxtLink class="btn btn-primary" to="/">eLearning</NuxtLink></li>
                </ul>
            </nav>
        </div>
    </div>
    <div id="bottom">
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
    </div>
  </header>
</template>

<script>
import Flags from '../flags.vue'
import logo from '../logo.vue'
export default {
  components: { logo, Flags },

}
</script>

<style scoped lang="scss">

header{
    display: grid;
    height: 150px;

    grid-template-rows: 3fr 2fr;
    grid-template-columns: 1fr;

    box-shadow: var(--shadow-md);

    div{
        display: flex;
        padding: 5px 10px;
    }


    // z-index: 999;
}

#bottom{
    background: var(--color-light);
    ul{
        display: flex;
        width: 100%;
        flex-direction: row;
        // border: 1px solid red;
        justify-content: space-around;
        list-style: none;
        align-items: center;

        li {
            display: flex;
            justify-content: center;
            flex: 1;
            text-align: center;
            a{
                width: 100%;
                color: var(--color-verde);
                font-size: 0.9rem;
            }
        }
    }
        // box-shadow: 1px 3px 6px var(--color-cinza-light);
}


#top{
    flex-direction: row;
    div{
        display: flex;
        // border: 1px solid red;
    }

    .top-1{
        flex: 1;
    }

    .top-2{
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .top-3{
        flex: 6;
        align-items: center;
        nav{
            width:100%; 
            ul{
                display: flex;
                justify-content: space-around;
                
                li{
                    border-bottom: 3px solid transparent;
                    box-sizing: border-box;

                    &:hover{
                        border-bottom-color: var(--color-vermelho);
                    }
                }
            }
        }
    }


}

</style>