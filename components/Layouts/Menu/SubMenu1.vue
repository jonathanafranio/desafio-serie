<template lang="pug">
    div.header__nav-submenu.frame-1(v-if="submenu.show")
        a.header__nav-banner(
            v-for="banner in submenu.banners" :key="banner.link"
            :href="banner.link"
        )
            img(:src="banner.image" :alt="banner.text")
        .header__submenu(v-if="submenu.nav")
            span.header__submenu-close(@click="submenu.show = false")
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L2 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 6L2 4L4 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                span Voltar
            .header__submenu-item(
                v-for="menu in submenu.nav" :key="menu.title"
            )
                strong {{ menu.title }}
                ul
                    li(
                        v-for="link in menu.links" :key="link.url"
                    )
                        a(:href="link.url") {{ link.text }}
            a.header__submenu-view-more
                span todas as categorias
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