<template lang="pug">
    div.header__nav-submenu.frame-2
        div.header__nav-banners
            a.header__nav-banner(
                v-for="banner in submenu.banners" :key="banner.link"
                :href="banner.link"
            )
                div.header__wrap-img
                    img(:src="banner.image" :alt="banner.text")

                strong.header__frame2-txt {{ banner.text }}

        a.all-coletions(href="#")
            span todas as coleções
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 4L12 8L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        
</template>

<script>
    export default {
        props: {
            submenu: Object
        } 
    }
</script>

<style lang="scss" scoped>

</style>