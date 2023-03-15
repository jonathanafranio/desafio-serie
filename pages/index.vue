<template lang="pug">
    LayoutDefault
        BannersDestaques(:banners="heros")
            
        main
            SlickProducts(
                title="Destaques"
                :products="products"
            )

            Video(
                :title="video.title"
                :url_embed="video.url"
            )

            section.page-section-colecao
                h2.page-section__title Coleção
                a.page-section__banner-full(href="#")
                    img(:src="bannerfull" alt="Coleção")

            SlickProducts(
                title="Destaques"
                :products="products"
            )



            


</template>

<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import BannersDestaques from '@/components/BannersDestaques'
import SlickProducts from '@/components/ListPosts/SlickProducts'
import Video from '@/components/Video'

export default {
    name: 'IndexPage',
    components: {
        LayoutDefault,
        BannersDestaques,
        SlickProducts,
        Video
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
            video: {
                title: '#youtube',
                url: 'https://www.youtube.com/embed/2K0q74jtV8s'
            },
            bannerfull: require('@/assets/img/banner-full.jpg')
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
