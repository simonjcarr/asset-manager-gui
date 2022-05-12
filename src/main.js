import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/tailwind.css";
import Keycloak from "keycloak-js";

let initOptions = {
  url: "http://192.168.1.14:8080/auth",
  realm: "dev",
  clientId: "asset-manager",
  onLoad: "login-required",
};

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: "login-required" }).then((auth) => {
  //store keycloak object in store
  store.commit("user/setKeycloak", keycloak);
  if (!auth) {
    window.location.reload();
  } else {
    //Check every 6 seconds if the token has less than 70 seconds left
    setInterval(() => {
      //If the token has less than 70 seconds left, refresh it
      store.state.user.keycloak.updateToken(70)
    }, 6000)
    //if the user was authorized, start the app
    createApp(App).use(store).use(router).mount("#app");
  }
});


