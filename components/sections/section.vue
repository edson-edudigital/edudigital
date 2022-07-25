<template>
    <intersect @enter.once="animeSection">
        <section :id="id" :style="style" class="container-section">
        
            <div :style="content_style" class="content-section">
                <slot></slot>
            </div>
        </section>
    </intersect>
</template>

<script>
import Intersect from "~/assets/js/vue-intersect";
import { anime_ } from "~/assets/js/animate"; 

export default {
    components:{ Intersect },
    props:{
        shouldAnime:{
            type:Boolean,
            required:false,
            default:true
        },
        background:{
            type:String,
            default:"transparent"
        },
        fluid:{
            type:Boolean,
            default:false
        },
        id:{
            type:String,
            required:true
        }
    },
    computed:{
        style(){

            return{
                background:this.background
            }
        },

        content_style(){

            return{
                width:this.fluid ? "100%" : "75%"
            }
        }
    },

    methods:{
        animeSection(){
            if(this.shouldAnime)
                anime_({
                    targets: document.getElementById(this.id),
                    duration: 1000,
                    opacity:[0,1],
                    easing:"linear",
                });
        }
    }
}
</script>

<style scoped>
    .container-section{
        display: flex;
        padding: 30px 0;
    }

    .content-section{
        margin: auto;
        padding: 15px;
        display: flex;
    }
</style>