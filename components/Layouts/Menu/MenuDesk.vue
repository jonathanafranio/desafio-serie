<template lang="pug">
    nav.header__nav(v-if="menu")
        ul
            li(
                v-for="link in menu"
                v-bind:key="link.href"
            )
                a(
                    :to="link.href"
                    class="header__nav-item"
                    @click.prevent="active(link.id)" 
                    v-if="link.children"
                    :class="link.id === menu_active ? '-active' : ''"
                ) {{ link.text }}
                a(
                    :to="link.href"
                    class="header__nav-item" 
                    v-else
                ) {{ link.text }}
                template(v-if="menu_opened && menu_opened.type == 'frame-1'")
                    SubMenu1(:submenu="menu_opened" v-on:close="menu_active = null")

                template(v-if="menu_opened && menu_opened.type == 'frame-2'")
                    SubMenu2(:submenu="menu_opened")
                    
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
    },
    data() {
        return {
            menu_active: null
        }
    },
    methods: {
        active(id_menu) {
            if(!id_menu) return;
            const { menu_active } = this
            this.menu_active = menu_active == id_menu ? null : id_menu
        }
    },
    computed: {
        menu_opened() {
            if(!this.menu_active) return false;

            const menu_open = this.menu.filter( m => m.id === this.menu_active);

            return menu_open[0].children
        }
    }
}
</script>

<style lang="scss" scoped>

</style>