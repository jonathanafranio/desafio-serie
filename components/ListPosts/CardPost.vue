<template lang="pug">
    article.card-post
        .card-post__container
            figure.card-post__figure(:class="!thumb ? '-silver' : ''")
                img(:src="thumb" :alt="title" v-if="thumb")
                img(:src="alt_thumb" :alt="title" v-else)

            .card-post__text
                h3.card-post__title {{ title }}
                span.card-post__old-price {{ simularDe }}
                strong.card-post__price {{ priceReal }}

            a.card-post__link(@click.prevent="addProd(id_product)")


</template>
<script>
export default {
    props: {
        id_product: Number,
        title: String,
        price: Number,
        thumb: String,

    },
    data() {
        return{
            alt_thumb: require('@/assets/img/logo.jpg'),
        }
    },
    methods: {
        addProd(id_product) {            
            if( !id_product ) return
            const obj_prod = { id_product, quantity: 1 }
            this.$store.dispatch("cart/action_add_cart", { obj_prod });

            location.href = '/cart'
        },
    },
    computed: {
        simularDe() {
            const old_price = this.price + 15;
            return old_price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });
        },
        priceReal() {
            return this.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });
        }
    }
}
</script>