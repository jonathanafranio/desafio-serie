<template lang="pug">
    section.page-section-video(v-if="url_embed")
        h2.page-section__title.-white {{ title }}

        iframe.page-section__iframe(
            width="630" 
            height="315" 
            :src="url_embed" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        )
</template>

<script>
    export default {
        name: 'Video',
        props: {
            title: {
                type: String,
                default(){ return 'Produtos' }
            },
            url_embed: {
                type: String,
                default(){ return '' }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>