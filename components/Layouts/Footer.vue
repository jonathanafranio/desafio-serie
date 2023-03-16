<template lang="pug">
    footer.footer
        a.footer__whats(href="https://wa.me/5511949348384" target="_blank")
            img.footer__whats-img(:src="whats_icon" alt="Fale Conosco!")
            .footer__whats-span
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99 0C4.53 0 0.0800002 4.45 0.0800002 9.91C0.0800002 11.66 0.54 13.36 1.4 14.86L0 20L5.25 18.62C6.7 19.41 8.33 19.83 9.99 19.83C15.45 19.83 19.9 15.38 19.9 9.92C19.9 7.27 18.87 4.78 17 2.91C15.13 1.03 12.64 0 9.99 0ZM10 1.67C12.2 1.67 14.26 2.53 15.82 4.09C17.37 5.65 18.23 7.72 18.23 9.92C18.23 14.46 14.53 18.15 9.99 18.15C8.51 18.15 7.06 17.76 5.8 17L5.5 16.83L2.38 17.65L3.21 14.61L3.01 14.29C2.19 13 1.75 11.47 1.75 9.91C1.76 5.37 5.45 1.67 10 1.67ZM6.48 5.33C6.32 5.33 6.05 5.39 5.82 5.64C5.6 5.89 4.95 6.5 4.95 7.71C4.95 8.93 5.84 10.1 5.95 10.27C6.09 10.44 7.71 12.94 10.2 14C10.79 14.27 11.25 14.42 11.61 14.53C12.2 14.72 12.74 14.69 13.17 14.63C13.65 14.56 14.63 14.03 14.84 13.45C15.05 12.87 15.05 12.38 14.99 12.27C14.92 12.17 14.76 12.11 14.51 12C14.26 11.86 13.04 11.26 12.82 11.18C12.59 11.1 12.45 11.06 12.26 11.3C12.1 11.55 11.62 12.11 11.48 12.27C11.33 12.44 11.19 12.46 10.95 12.34C10.69 12.21 9.89 11.95 8.95 11.11C8.21 10.45 7.72 9.64 7.57 9.39C7.45 9.15 7.56 9 7.68 8.89C7.79 8.78 7.95 8.6 8.05 8.45C8.18 8.31 8.22 8.2 8.3 8.04C8.38 7.87 8.34 7.73 8.28 7.61C8.22 7.5 7.72 6.26 7.51 5.77C7.31 5.29 7.11 5.35 6.95 5.34C6.81 5.34 6.65 5.33 6.48 5.33Z" fill="currentColor"/>
                </svg>

                span Fale Conosco!


        Newsletter
        .footer__middle
            .container
                a.footer__logo(href="#")
                    img(:src="logo", alt="Seri.e Design")

                .footer__col.-left
                    h3.footer__title Precisa de ajuda?

                    ul.footer__lt
                        li.footer__lt-list(v-for="item in links" :key="item.url")
                            a.footer__lt-a(:href="item.url") {{ item.title }}

                .footer__col.-right
                    h3.footer__title Redes Sociais 

                    a.footer__social(
                        v-if="insta"
                        :href="insta"
                    )
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"/>
                        </svg>

                    a.footer__social(
                        v-if="face" 
                        :href="face"
                    )
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" fill="currentColor"/>
                        </svg>

        .footer__bottom
            .container
                .footer__bottom-icos
                    a(href="https://www.tray.com.br/")
                        img(:src="tray_logo" alt="Tray")

                    a(href="https://seriedesign.com.br/")
                        img(:src="serie_logo" alt="Seri.e Design")
                        
                p @2023 Todos os direitos reservados



                
                        
            
                    
                    
                        
        
</template>
<script>
import Newsletter from '@/components/Newsletter.vue';

export default {
    name: 'Footer',
    components: {
        Newsletter
    },
    data() {
        return {
            logo: require('@/assets/img/logo-serie-ft.png'),
            serie_logo: require('@/assets/img/logo-seri.e.svg'),
            tray_logo: require('@/assets/img/logo-fbits-branco.svg'),
            whats_icon: require('@/assets/img/whats-ico.png'),
            links: [
                {
                    title: "Sobre",
                    url: '#'
                },
                {
                    title: "Politicas da Loja",
                    url: '#'
                },
                {
                    title: "Politicas de Privacidade",
                    url: '#'
                },
                {
                    title: "Contato",
                    url: '#'
                }
                
            ],
            insta: 'https://www.instagram.com/seri.e_design/',
            face: 'https://www.facebook.com/SERIEDESIGN',

        }
    }
}
</script>
