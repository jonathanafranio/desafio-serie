<template lang="pug">
    section.page-section-products
        h2.page-section__title {{ title }}
        VueSlickCarousel(v-if="products.length > 0" v-bind="slick_products")
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
    import Preload from '@/components/Preload/Index'
    import CardPost from '@/components/ListPosts/CardPost'
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    export default {
        name: 'SlickProducts',
        components: {
            CardPost,
            Preload,
            VueSlickCarousel
        },
        props: {
            title: {
                type: String,
                default(){ return 'Produtos' }
            },
            products: {
                type: Array,
                default(){ return [] }
            },
        },
        data() {
            return {
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
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                centerMode: false,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                centerMode: false,
                            }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 1,
                                centerMode: false,
                            }
                        }
                    ]
                }
            }
        },     
    }
</script>

<style lang="scss" scoped>

</style>