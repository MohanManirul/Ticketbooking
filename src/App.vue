<template>
  <div class="container">
    <header>
      <h2>{{ msg }}</h2>
    </header>

    <div>
      <the-card cardTitle="About Me"> Hi, this is testing... </the-card>
      <the-card cardTitle="Samsung Mobile">
        
      </the-card>
      <the-card cardTitle="Test Card">
          
      </the-card>
    </div>

    <!-- uses the-card components from ContactDetails.vue page-->

    <!-- uses the-card components from ContactDetails.vue page-->
  </div>
</template>

<script>
import TheCard from "./TheCard.vue"; //includes TheCard.vue page into App.vue page

export default {
  data() {
    return {
      msg: "Mamunur Rahman",
    };
  },
  components: { TheCard }, //register the TheCard
};
</script>
