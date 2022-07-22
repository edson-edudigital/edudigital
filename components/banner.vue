<template>
  <section :style="section_style">
    <!-- <div class="bradcrumbs">
        <Breadcrumbs />
    </div> -->
    <div :style="style" class="container">

        <div>
            <slot name="left"></slot>
        </div>
        <div>
            <slot name="right"></slot>
        </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from './breadcrumbs.vue';
import bg from "~/assets/img/banner-bg.jpg";
export default {
    components: { Breadcrumbs },
    props:{
        columnsTemplate:{
            type:String,
            default:"1fr 1fr"
        },

        backgroundImage:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            
        }
    },

    computed:{
        style(){

            return{
                gridTemplateColumns: this.columnsTemplate
            }
        },

        section_style(){


            return {
                backgroundImage:`url(${this.backgroundImage})`
            }
        }
    }
}
</script>


<style scoped lang="scss">
    section{
        display: flex;
        flex-direction: column;

        background-size: cover;

        padding: 20px 0;
    }

    .bradcrumbs{
        width: 75%;
        margin: auto;
        padding: 10px 0;
    }

    .container{
        width: 75%;
        min-height: 300px;
        margin: auto;
        display: grid;

        grid-template-rows: 1fr;

        div{
            // border: 1px solid green;
            display: flex;
            padding: 20px;
            color: #fff;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;

            *{
                margin-bottom: 20px;
            }

            h1{
                font-size: 3rem;
                line-height: 50px;
            }
        }
    }
</style>