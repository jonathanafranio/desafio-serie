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
