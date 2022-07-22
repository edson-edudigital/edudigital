<template>
  <section :style="style" class="container-section">
    <div :style="content_style" class="content-section">
        <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
    props:{
        background:{
            type:String,
            default:"transparent"
        },
        fluid:{
            type:Boolean,
            default:false
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