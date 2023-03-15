<template lang="pug">
    form.newsletter
        .container
            .newsletter__txt
                h2.newsletter__title Newsletter
                span Cadastre seu e-mail e receba <strong>novidades!</strong>

            .newsletter__ipt
                i.newsletter__ipt-icon
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6484 4.61487C16.8398 5.24768 15.8203 6.02112 12.2344 8.62268C11.5312 9.15002 10.2305 10.3102 9 10.3102C7.73438 10.3102 6.46875 9.15002 5.73047 8.62268C2.14453 6.02112 1.125 5.24768 0.316406 4.61487C0.175781 4.5094 0 4.61487 0 4.79065V11.9625C0 12.9117 0.738281 13.65 1.6875 13.65H16.3125C17.2266 13.65 18 12.9117 18 11.9625V4.79065C18 4.61487 17.7891 4.5094 17.6484 4.61487ZM9 9.15002C9.80859 9.18518 10.9688 8.13049 11.5664 7.70862C16.2422 4.33362 16.5938 4.01721 17.6484 3.17346C17.8594 3.03284 18 2.78674 18 2.50549V1.83752C18 0.923462 17.2266 0.150024 16.3125 0.150024H1.6875C0.738281 0.150024 0 0.923462 0 1.83752V2.50549C0 2.78674 0.105469 3.03284 0.316406 3.17346C1.37109 4.01721 1.72266 4.33362 6.39844 7.70862C6.99609 8.13049 8.15625 9.18518 9 9.15002Z" fill="currentColor"/>
                    </svg>

                input.newsletter__ipt-input(type="email", name="" v-model="email" placeholder="seu@email.com.br")

            button.newsletter__btn Cadastrar


            
</template>

<script>
    export default {
        data() {
            return {
                email: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>