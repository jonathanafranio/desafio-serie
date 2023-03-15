<template lang="pug">
    form.header__search(action="")
        button.header__search-btn
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.6249 16.6249L13.1812 13.1812" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        input.header__search-input(
            type="text"
            name="" 
            placeholder="BUSCAR PRODUTO..."
        )
        div.header__search-close
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.18213" y="4.59619" width="2" height="11" rx="1" transform="rotate(-45 3.18213 4.59619)" fill="white"/>
                <rect x="10.96" y="3.18188" width="2" height="11" rx="1" transform="rotate(45 10.96 3.18188)" fill="white"/>
            </svg>

        
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>