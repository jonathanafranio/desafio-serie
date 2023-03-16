<template lang="pug">
    .smart-cart
        .smart-cart__header
            CartIcon

            span.smart-cart__header-txt Sua sacola ({{ cart_quantity }})

            button.smart-cart__close(@click.prevent="close")
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3.5L3 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 3.5L9 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

        .smart-cart__container
            .smart-cart__product(
                v-for="product in products" :key="product.id"
            )
                img.smart-cart__img(:src="product.image" :alt="product.title")
                
                .smart-cart__prod-desc
                    .smart-cart__prod-top
                        span.smart-cart__prod-title {{ product.title }}

                        span.smart-cart__prod-qtd Quantidade: {{ product.quantity }}

                    .smart-cart__prod-bottom
                        span.smart-cart__prod-price {{ product.price }}

                        span.smart-cart__exclude(@click="remove_product(product.id)")
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.25" d="M1.92564 14.4669C1.92564 14.9383 2.13755 15.3905 2.51477 15.7239C2.89199 16.0573 3.4036 16.2446 3.93706 16.2446H11.9828C12.5162 16.2446 13.0279 16.0573 13.4051 15.7239C13.7823 15.3905 13.9942 14.9383 13.9942 14.4669V3.80018H1.92564V14.4669ZM3.93706 5.57796H11.9828V14.4669H3.93706V5.57796ZM11.4799 1.13352L10.4742 0.244629H5.44564L4.43992 1.13352H0.919922V2.9113H14.9999V1.13352H11.4799Z" fill="currentColor"/>
                            </svg>
                        
        .smart-cart__footer
            span Total a pagar:
            span.smart-cart__ft-total {{ total.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) }}
            
            router-link.smart-cart__btn(to="/cart") Comprar

            a.smart-cart__out-btn(href="#" @click.prevent="close") Continuar comprando
                            

                    
                

            



</template>

<script>
    import CartIcon from './CartIcon'
    export default {
        name: 'CartHeader',
        components: {
            CartIcon
        },
        props: {
            cart_quantity: Number,
        },
        methods: {
            close() {
                this.$emit('close-cart');
            },
            remove_product(id_product){
                if(!id_product) return
                this.$store.dispatch( 'cart/action_remove', { id_product } )
            }
        },
        computed: {
            products(){
                const cart = this.$store.state.cart.cart
                const products = this.$store.state.products.products
                if(products && products.length > 0) {
                    const cartProducts = cart.map(p =>{
                        const product = products.filter( pro => pro.id === p.id_product )[0]
                        const { id, image, title, price } = product
                        
                        const price_unit = price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })                        
                        const product_cart = {
                            id,
                            title,
                            image,
                            quantity: p.quantity,
                            price: price_unit,
                        }
                        return product_cart
                    });
                    return cartProducts
                } else {
                    return []
                }
            },
            total() {
                const cart = this.$store.state.cart.cart
                const products = this.$store.state.products.products
                if(cart.length > 0 && products && products.length > 0) {
                    const total = cart.map(p =>{
                        const product = products.filter( pro => pro.id === p.id_product )[0]
                        const { price } = product
                        const { quantity } = p
                        return price * quantity
                    })

                    return total.reduce( (t, n) => t + n )
                } else {
                    return 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>