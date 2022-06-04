import { createApp } from "vue"; // imports only createApp from vue library
import App from "./App.vue"; // linking vue external page
import ContactDetails from "./ContactDetails.vue"; // linking vue external page


console.log(App);
var app = createApp(App);

app.component("contact-details" , ContactDetails);
// register component 
// app.component("contact-details", ContactDetails); // global component & it will be access from anywhere

app.mount("#app");