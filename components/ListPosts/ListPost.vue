<template lang="pug">
    .products-list(v-if="posts")
        div.products-list__page
            CardPost(
                v-for="post in posts"
                v-bind:key="post.id"
                :id_product="post.id"
                :title="post.title"
                :category="post.category" 
                :description="post.description"
                :price="post.price"
                :thumb="post.image"
            )

</template>
<script>
import CardPost from './CardPost'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: 'ListPosts',
    components: {
        CardPost,
        VueSlickCarousel
    },
    props: {
        posts: {
            type: Array,
            default(){ return [] }
        },
    },
}
</script>