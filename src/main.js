import { createApp } from "vue"; // imports only createApp from vue library
import App from "./App.vue";
import ContactDetails from "./ContactDetails.vue";

// console.log(App);
var app = createApp(App);

// register component 
app.component("contact-details", ContactDetails); // global component & it will be access from anywhere

app.mount("#app");