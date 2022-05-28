<template>
    <div>
        <h2>{{ msg }}</h2>
        <!-- uses contact-details components from ContactDetails.vue page-->
        
        <contact-details></contact-details> 
        <contact-details></contact-details>
        <contact-details></contact-details>
        
        <!-- uses contact-details components from ContactDetails.vue page-->
    </div>
</template>

<script>
   export default {
       data() {
        return {
            msg: "welcome to Vue 3 Tutorial fgfg"
        };
    },
    
   }
</script>