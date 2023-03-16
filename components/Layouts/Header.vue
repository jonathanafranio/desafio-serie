<template lang="pug">
    header.header(:class="page_atual !== 'index' ? '-active' : ''")
        div.header__upper {{ upper_txt }}

        div.container
            button.header__toogle-menu(@click="menu_mobile = true")
                span.i-line
                span.i-line
                span.i-line

            a.header__logo(href="/" title="MKT Place")
                img(:src="logo" alt="MKT Place")

            MenuDesk(:menu="menu")


            div.header__right
                SearchHeader

                a.header__account(href="#")
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 16.625V15.0417C15.8332 14.2018 15.4995 13.3964 14.9057 12.8025C14.3118 12.2086 13.5064 11.875 12.6665 11.875H6.33317C5.49332 11.875 4.68786 12.2086 4.094 12.8025C3.50013 13.3964 3.1665 14.2018 3.1665 15.0417V16.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.50016 8.70833C11.2491 8.70833 12.6668 7.29057 12.6668 5.54167C12.6668 3.79276 11.2491 2.375 9.50016 2.375C7.75126 2.375 6.3335 3.79276 6.3335 5.54167C6.3335 7.29057 7.75126 8.70833 9.50016 8.70833Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="9.5" cy="5.5" r="3.5" fill="currentColor"/>
                    </svg>
 
                a.header__cart(href="#" @click.prevent="toggleCart")
                    CartIcon
                    span.header__cart-count {{ cart_quantity }}

                    

            div.menu-nav-mobile(:class="menu_mobile ? '-opened' : ''")
                button.menu-nav-mobile__btn-close(@click="menu_mobile = false")
                    span

                .menu-nav-mobile__inner
                    .menu-header-container
                        ul.menu-nav-mobile__menu
                            li.menu-item(
                                v-for="link in menu"
                                v-bind:key="`mobile ${link.href}`"
                            )
                                router-link(:to="link.href") {{ link.text }}


        CartHeader(
            :cart_quantity="cart_quantity"
            v-if="cart_open" 
            v-on:close-cart="toggleCart"
        )
                    


</template>

<script>
import SearchHeader from './SearchHeader'
import CartIcon from './CartIcon'
import CartHeader from './CartHeader'
import MenuDesk from './Menu/MenuDesk'

export default {
    name: 'Header',
    components: {
        SearchHeader,
        CartIcon,
        CartHeader,
        MenuDesk
    },
    data() {
        return {
            logo: require('@/assets/img/logo-seri.e.png'),
            menu_mobile: false,
            upper_txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            menu:  [
                {
                    text: 'Shop', 
                    href: '/', 
                    children: {
                        show: false,
                        type: 'frame-1',
                        banners: [
                            {
                                link: '',
                                text: 'Texto 1',
                                image: require('@/assets/img/link-01.jpg'),
                            },
                            {
                                link: '',
                                text: 'Texto 2',
                                image: require('@/assets/img/link-02.jpg'),
                            },
                            {
                                link: '',
                                text: 'Texto 3',
                                image: require('@/assets/img/link-03.jpg'),
                            }
                        ],
                        nav: [
                            {
                                title: 'Vestuário',
                                links: [
                                    {
                                        url: '#',
                                        text: 'camisetas',
                                    },
                                    {
                                        url: '#',
                                        text: 'Calças',
                                    },
                                    {
                                        url: '#',
                                        text: 'Moletons',
                                    },
                                    {
                                        url: '#',
                                        text: 'Cropped',
                                    },
                                    {
                                        url: '#',
                                        text: 'Shorts',
                                    },
                                    {
                                        url: '#',
                                        text: 'Jaqueta',
                                    },
                                    {
                                        url: '#',
                                        text: 'camisetas',
                                    },
                                    {
                                        url: '#',
                                        text: 'Calças',
                                    },
                                    {
                                        url: '#',
                                        text: 'Moletons',
                                    },
                                    {
                                        url: '#',
                                        text: 'Cropped',
                                    },
                                    {
                                        url: '#',
                                        text: 'Shorts',
                                    },
                                    {
                                        url: '#',
                                        text: 'Jaqueta',
                                    }
                                ]
                            },
                            {
                                title: 'Acessórios',
                                links: [
                                    {
                                        link: '#',
                                        text: 'camisetas',
                                    },
                                    {
                                        link: '#',
                                        text: 'Calças',
                                    },
                                    {
                                        link: '#',
                                        text: 'Moletons',
                                    },
                                    {
                                        link: '#',
                                        text: 'Cropped',
                                    },
                                    {
                                        link: '#',
                                        text: 'Shorts',
                                    },
                                    {
                                        link: '#',
                                        text: 'Jaqueta',
                                    },
                                    {
                                        link: '#',
                                        text: 'camisetas',
                                    },
                                    {
                                        link: '#',
                                        text: 'Calças',
                                    },
                                    {
                                        link: '#',
                                        text: 'Moletons',
                                    },
                                    {
                                        link: '#',
                                        text: 'Cropped',
                                    },
                                    {
                                        link: '#',
                                        text: 'Shorts',
                                    },
                                    {
                                        link: '#',
                                        text: 'Jaqueta',
                                    }
                                ]
                            }
                        ]
                    }
                },
                { 
                    text: 'Lançamentos',
                    href: '/',
                    children: {
                        show: false,
                        type: 'frame-2',
                        banners: [
                            {
                                link: '',
                                text: 'COLEÇAO VERÃO',
                                image: require('@/assets/img/link-1b.jpg'),
                            },
                            {
                                link: '',
                                text: 'COLEÇAO COPA',
                                image: require('@/assets/img/link-2b.jpg'),
                            },
                            {
                                link: '',
                                text: 'COLEÇAO glowshine',
                                image: require('@/assets/img/link-3b.jpg'),
                            }
                        ],
                    }
                },
                { text: 'born in chaos', href: '/' }
            ],
            page_atual: this.$route.name,
            cart_open: false,
        }
    },
    methods: {
        toggleCart() {
            if(window.screen.width > 1024) {
                this.cart_open = ! this.cart_open
            } else {
                this.$router.push({ path: '/cart' })
            }
        },
    },
    computed: {
        cart_quantity() {
            const cart = this.$store.state.cart.cart
            const cart_quantity = cart.map( p => p.quantity )
            return cart.length > 0 ? cart_quantity.reduce( ( total, quantity) => total + quantity ) : 0
        },
    },
    created() {
        if(process.browser && this.page_atual === 'index') {
            window.addEventListener("scroll", function () {
                const first_banners = document.querySelectorAll('.heros__item')[0].clientHeight
                //const [height, scrollY] = [window.screen.height, window.scrollY];
                const [height, scrollY] = [first_banners, window.scrollY];
                if(scrollY < height) {
                    this.document.querySelector('.header').classList.remove('-active');
                } else {
                    this.document.querySelector('.header').classList.add('-active');
                }
            });
        }
    },
}
</script>