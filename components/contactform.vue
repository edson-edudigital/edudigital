<template>
  <Section :id="'section-contactform'" class="" :background="'var(--color-verde)'">

    <intersect @enter.once="animeInputs">

        <div id="form-contact" class="form-contact">
            <h1>Contacte-nos</h1>

            <div id="form-content" class="form-content">
                <input v-model="name" placeholder="Nome*" type="text" class="form-control">
                <input v-model="email" placeholder="Email*" type="text" class="form-control">
                <input v-model="tel" placeholder="Telemóvel*" type="text" class="form-control">
                <input v-model="empresa" placeholder="Empresa" type="text" class="form-control">
                <input v-model="cargo" placeholder="Cargo" type="text" class="form-control">
                <input v-model="assunto" placeholder="Assunto" type="text" class="form-control">
                <textarea v-model="mensagem" placeholder="Mensagem" class="form-control text-area" name="" id="" cols="30" rows="10"></textarea>
                <span>*Campos obrigatórios</span>
                <button @click="sendForm" type="button" class="btn btn-gray">Enviar</button>
            </div>

        </div>
    </intersect>


  </Section>
</template>

<script>
import Section from './sections/section.vue';
import {anime_} from "~/assets/js/animate";
import Intersect from "~/assets/js/vue-intersect";
import Swal from "sweetalert2";
export default {
    components: { Section, Intersect },

    data(){
        return {
            name:null,
            email:null,
            tel:null,
            empresa:null,
            cargo:null,
            assunto:null,
            mensagem:null
        }
    },

    mounted(){
        
    },

    methods:{
        sendForm(){
            const {valide,errors} = this.validateFields();
            let msg="";

            if(valide){
                if(this.validEmail(this.email)){
                    msg+="Mensagem enviado com sucesso";

                    this.$axios.post("http://localhost:8000",{
                            name:this.name,
                            email:this.email,
                            tel:this.tel,
                            empresa:this.empresa,
                            cargo:this.cargo,
                            assunto:this.assunto,
                            mensagem:this.mensagem
                    }).then(res=>{
                        console.log(res);
                        Swal.fire({
                            title:"Sucesso",
                            html:msg,
                            icon:"success",
                            confirmButtonColor:"#008072"
                        }).then(()=>{
                            this.cleanInputs();
                        })
                    });


                    }else{
                    msg="Email inválido"
                    Swal.fire({
                        title:"Atenção",
                        html:msg,
                        icon:"warning",
                        confirmButtonColor:"#008072"
                    })
                }

            }else{

                msg+= "Esses campos são obrigatórios:";

                errors.forEach(error => {
                    msg+=`<br>${error}`
                });

                Swal.fire({
                    title:"Atenção",
                    html:msg,
                    icon:"warning",
                    confirmButtonColor:"#008072"
                })

            }
        },

        validateFields(){
            let valide = true;
            let errors = [];

            if(!this.name){
                valide = false;
                errors.push("nome");
            }

            if(!this.email){
                valide = false;
                errors.push("email");
            }

            if(!this.tel){
                valide = false;
                errors.push("telefone");
            }

            if(!this.assunto){
                valide = false;
                errors.push("assunto");
            }
            
            if(!this.mensagem){
                valide = false;
                errors.push("mensagem");
            }

            return {valide,errors};

        },

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        cleanInputs(){
            this.name = null;
            this.email = null;
            this.tel = null;
            this.empresa = null;
            this.cargo = null;
            this.assunto = null;
            this.mensagem = null;
        },

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
        border-width: 2px;
        
        border-color: green;
 

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
        transition: border, 400ms ease;
        padding: 0 10px;
        width:100%;
        height: 40px;
        border-radius: 5px;
        border: 2px solid var(--color-light);
        outline-color: var(--color-verde);
        color: var(--color-cinza);
        font-size: 1rem;
        margin-bottom: 15px;

        &:focus{
            border: 2px solid var(--color-vermelho);
            outline:none;
        }
    }

    .text-area{
        padding: 10px 10px;
        height: auto;
        resize: none;

    }


    @media screen and (max-width:950px ){
        .form-content{
            width: 100%;
        }

    }
    
</style>