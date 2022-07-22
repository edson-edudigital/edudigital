<template>
  <div class="counter">
    <p class="counter-title">text</p>
    <intersect @enter="onChange">
        <p class="counter-value" ref="counter"></p>
    </intersect>
  </div>
</template>

<script>
import {animeNumber} from "~/assets/js/animate"
import Intersect from 'vue-intersect'
export default {
    components: { Intersect },
    props:{
        title:{
            type:String,
            required:true
        },
        val:{
            type:Number,
            required:true
        }
    },

    mounted(){
    },

    methods: {
        onChange() {
        
            animeNumber(this.$refs.counter,this.val)
            
        }
    },


    data(){
        return{
            counter:this.val
        }
    }
}
</script>

<style scoped lang="scss">
    .counter-title{
        font-size: 1.6rem;
        font-weight: 700;
    }
    .counter-value{
        font-size: 1.4rem;
    }
</style>