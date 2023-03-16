<template lang="pug">
    nav.header__nav(v-if="menu")
        teste
        ul
            li(
                v-for="link in menu"
                v-bind:key="`desktop ${link.href}`"
            )
                a(
                    :to="link.href"
                    class="header__nav-item"
                    @click.prevent="link.children.show = !link.children.show" 
                    v-if="link.children"
                ) {{ link.text }}
                a(
                    :to="link.href"
                    class="header__nav-item" 
                    v-else
                ) {{ link.text }}
                template(v-if="link.children && link.children.type == 'frame-1'")
                    SubMenu1(:submenu="link.children")

                template(v-if="link.children && link.children.type == 'frame-2'")
                    SubMenu2(:submenu="link.children")
                    
</template>

<script>
import SubMenu1 from './SubMenu1';
import SubMenu2 from './SubMenu2';
export default {
    name: 'Menu',
    components: {
        SubMenu1,
        SubMenu2
    },
    props: {
        menu: Array
    }      
}
</script>

<style lang="scss" scoped>

</style>