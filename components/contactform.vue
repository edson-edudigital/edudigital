<template>
  <Section :id="'section-contactform'" class="" :background="'var(--color-verde)'">

    <intersect @enter.once="animeInputs">

        <div id="form-contact" class="form-contact">
            <h1>Contacte-nos</h1>

            <div id="form-content" class="form-content">
                <input placeholder="Nome*" type="text" class="form-control">
                <input placeholder="Email*" type="text" class="form-control">
                <input placeholder="Telemóvel*" type="text" class="form-control">
                <input placeholder="Empresa" type="text" class="form-control">
                <input placeholder="Cargo" type="text" class="form-control">
                <input placeholder="Assunto" type="text" class="form-control">
                <textarea placeholder="Mensagem" class="form-control text-area" name="" id="" cols="30" rows="10"></textarea>

                <button type="button" class="btn btn-gray">Enviar</button>
            </div>

        </div>
    </intersect>


  </Section>
</template>

<script>
import Section from './sections/section.vue';
import {anime_} from "~/assets/js/animate";
import Intersect from "~/assets/js/vue-intersect";
export default {
    components: { Section, Intersect },

    mounted(){
    },

    methods:{
        animeInputs(){
            anime_.timeline({
                targets:document.querySelector("#form-contact h1"),
                translateX: [-50,0],
                opacity:[0,1],
                easing:"linear",
                duration:400,
                
            })
            .add({
                targets:document.querySelector("#form-content")?.children,
                translateX: [-50,0],
                opacity:[0,1],
                easing:"linear",
                duration:300,
                delay:function(el,i,l){
                    return i*100
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .form-contact{
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #fff;
        align-items: center;
 

        h1{
            font-size: 2.5rem;
            margin-bottom: 15px;
            font-weight: 500;
        }
    }

    .form-content{
        width: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        button{
            border:none;
            // padding: 15px 30%;
            width: 50%;
            max-width: 200px;
            padding: 15px 0;
           
        }
    }
    .form-control{
        padding: 0 10px;
        width:100%;
        height: 40px;
        border-radius: 5px;
        border: 2px solid var(--color-light);
        outline-color: var(--color-verde);
        color: var(--color-cinza);
        font-size: 1rem;
        margin-bottom: 15px;
    }

    .text-area{
        padding: 10px 10px;
        height: auto;

    }


    @media screen and (max-width:950px ){
        .form-content{
            width: 100%;
        }

    }
    
</style>