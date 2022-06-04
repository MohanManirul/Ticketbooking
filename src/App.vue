<template>
  <div>
    <h3>{{ msg }}</h3>
    <contact-details></contact-details>
    <contact-details></contact-details>
    <contact-details></contact-details>
  </div>
</template>

<script>
import ContactDetails from "./ContactDetails.vue";
export default {
  data(){
    return {
      msg: "Welcome to  Vue 3 Bangla Tutorial"
    };
  },
  components: {
    ContactDetails
  }
}
</script>