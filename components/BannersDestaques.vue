<template lang="pug">
    section.heros(v-if="banners")
        div.heros__item(
            v-for="(item, i) in banners"
            :key="item.image"
        )
            a.heros__wrap-img(
                :href="item.link"
            )
                img(:src="item.image", :alt="item.title")
</template>

<script>
    export default {
        name: 'BannersDestaques',
        props: {
            banners: {
                type: Array,
                default() { return [] }
            }
        }    
    }
</script>

<style lang="scss" scoped>

</style>