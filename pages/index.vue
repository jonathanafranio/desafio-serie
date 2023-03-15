<template lang="pug">
    LayoutDefault
        BannersDestaques(:banners="heros")
            
        main 
            section.page-section-products(v-if="products.length > 0")
                h2.page-section__title Destaques
                VueSlickCarousel(v-bind="slick_products")
                    CardPost(
                        v-for="post in products"
                        v-bind:key="post.id"
                        :id_product="post.id"
                        :title="post.title"
                        :description="post.description"
                        :price="post.price"
                        :thumb="post.image"
                    )
            Preload(v-else)

            


</template>

<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import BannersDestaques from '@/components/BannersDestaques'
import CardPost from '@/components/ListPosts/CardPost'
import Preload from '@/components/Preload/Index'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: 'IndexPage',
    components: {
        LayoutDefault,
        BannersDestaques,
        CardPost,
        Preload,
        VueSlickCarousel
    },
    data(){
        return {
            heros: [
                {
                    image: require('@/assets/img/bnn_1.jpg'),
                    title: 'Lorem Ipsum Dolor',
                },
                {
                    image: require('@/assets/img/bnn_2.jpg'),
                    title: 'Lorem Ipsum Dolor',
                },
                {
                    image: require('@/assets/img/bnn_3.jpg'),
                    title: 'Lorem Ipsum Dolor',
                }
            ],
            slick_products: {
                centerMode: true,
                dots: false,
                arrows: true,
                dotsClass: "slick-dots",
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                //autoplay: true,
                infinite: true,
                adaptiveHeight: true
            }
        }
    },
    methods: {
    },
    created() {},
    computed: {
        products() {
            const products = this.$store.state.products.products
            
            return products
        },
    }
}
</script>
