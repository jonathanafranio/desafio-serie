<template lang="pug">
    div(:class="page_atual !== 'index' ? 'internas' : 'home'")
        Header

        <slot />
        
        Footer
</template>
<script>
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'

export default {
    name: 'LayoutDefault',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            page_atual: this.$route.name 
        }
    },
    methods: {
        async tras_products() {
            const products = this.$store.state.products.products
            if(products && products.length > 0) return
            await this.$store.dispatch( 'products/request_products', {} );
        },
        cartLoad() {
            if(process.client) {
                const cartStorage = window.localStorage.getItem('cart')
                if(!cartStorage) return
                const cart = JSON.parse(cartStorage) 
                this.$store.commit('cart/update_state', { cart })
            }
        }
    },
    beforeMount() {
        this.tras_products();
    },
    created() {
        this.cartLoad();
    }
}
</script>
