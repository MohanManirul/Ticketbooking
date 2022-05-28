<template>
  <div>
    <h2>{{ msg }}</h2>
    <!-- uses contact-details components from ContactDetails.vue page-->

    <contact-details name="Mamunur Rashid" website-address="https://google.com" address="Dhaka , Bangladesh"></contact-details>
    <contact-details name="Mamunur Rashid" website-address="https://google.com" address="Dhaka , Bangladesh"></contact-details>
    <contact-details name="Mamunur Rashid" website-address="https://google.com" address="Dhaka , Bangladesh"></contact-details>
    

    <!-- uses contact-details components from ContactDetails.vue page-->
  </div>
</template>

<script>
import ContactDetails from "./ContactDetails.vue";

export default {
  data() {
    return {
      msg: "Mamunur Rahman",
    };
  },
  components: { ContactDetails },
};
</script>


