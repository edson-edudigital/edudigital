<template>
    <footer>
        <div id="footer-top">
            <div class="fast-access-menu">
                <ul class="menu-footer">
                    <li><a href="#" class="link">O que fazemos</a></li>
                    <li><a href="#" class="link">Plataformas eLearning</a></li>
                    <li><a href="#" class="link">Cursos de eLearning à medida</a></li>
                    <li><a href="#" class="link">Formação à medida</a></li>
                    <li><a href="#" class="link">APPs e Serviços Web</a></li>
                    <li><a href="#" class="link">Softwares Académicos</a></li>
                </ul>
            </div>
            <div class="fast-access-menu">
                <ul class="menu-footer">
                    <li><a href="#" class="link">Sobre nós</a></li>
                    <li><a href="#" class="link">Contactos</a></li>
                    <li><a href="#" class="link">Case Studies</a></li>
                    <li><a href="#" class="link">Recrutamento</a></li>
                </ul>
            </div>
            <div class="fast-access-menu">
                <ul class="menu-footer">
                    <li><a href="#" class="link">Plataformas</a></li>
                    <li><a href="#" class="link">Open-source eLearning</a></li>
                    <li><a href="#" class="link">Totara Academia</a></li>
                    <li><a href="#" class="link">Área Reservada</a></li>
                    <li><a href="#" class="link">Agendamento</a></li>
                    <li><a href="#" class="link">Marketplace</a></li>

                </ul>
            </div>
            <div class="fast-access-menu">
                <ul class="menu-footer">
                    <li><a href="#" class="link">Contacte-nos</a></li>
                    <li><a href="#" class="link">Portugal - Oeiras</a></li>
                    <li><a href="#" class="link">Moçambique - Maputo</a></li>
                    <li><a href="#" class="link">Angola - Luanda</a></li>
                    <li><a href="#" class="link">Cabo Verde - Praia</a></li>
                </ul>
            </div>
            <div class="footer-brand">
                <Logo :width="200" />
                <p><strong>Encontre-nos nas nossas redes sociais</strong></p>
                <div class="social">
                    <a href=""><img width="30" src="~/assets/img/social/facebook.png" alt=""></a>
                    <a href=""><img width="30" src="~/assets/img/social/linkedin.png" alt=""></a>
                    <a href=""><img width="30" src="~/assets/img/social/youtube.png" alt=""></a>
                    <a href=""><img width="30" src="~/assets/img/social/instagram.png" alt=""></a>

                </div>
            </div>
        </div>
        <div id="footer-bottom">
            <p>&copy; Copyright EDUdigital | Todos direitos reservados</p>
        </div>
    </footer>
</template>

<script>
import Logo from './logo.vue';
export default {
    components: { Logo }
}
</script>

<style lang="scss">

    footer{
        display: grid;
        grid-template-rows: 6fr 1fr;
        grid-template-columns: 1fr;
        background: var(--color-light);
        padding: 15px;

        div{
            padding: 10px 0;
        }
    }

    #footer-top{
        display: flex;
        justify-content: space-evenly;
    }

    #footer-bottom{
        display: flex;
        justify-content: center;

        p{
            color: var(--color-cinza);
        }
        
    }

    .menu-footer{
        display: flex;
        flex-direction: column;
        text-align: center;

        li:first-child{
            font-weight: 700;
        }
        li{
            padding: 6px 0;

            a{
                color:var(--color-cinza)
            }
        }
    }

    .footer-brand{
        text-align: center;
        p{
            color: var(--color-cinza);
        }
        
    }

    .social{
        display: flex;
        flex-direction: row;
        justify-content: center;

        a{
            transition: all, 100ms ease;
            padding: 0 5px;

            &:hover{
                transform:scale(1.1);
            }
        }
    }


    @media screen and (max-width:950px) {
        .fast-access-menu{
            display: none;
        }
    }

</style>