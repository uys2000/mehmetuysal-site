<template>
  <div>
    <div>
      <q-form
        @submit="loginEvent()"
        class="animate__animated animate__slower"
        :class="{ animate__hinge: animateEvent }"
      >
        <q-input v-model="id" label="E-Mail" autocomplete="username" />
        <q-input
          v-model="pass"
          type="password"
          label="Password"
          autocomplete="current-password"
        />
        <div class="q-btn q-btn--flat">{{ loginStatus }}</div>
        <q-btn flat type="submit" label="Login" />
      </q-form>
    </div>
  </div>
</template>
<script>
import { firebaseLogin } from "@/service/service-for-login.js";
export default {
  emits: ["loginFunc"],
  data() {
    return {
      id: null,
      pass: null,
      loginStatus: null,
      animateEvent: false,
    };
  },
  methods: {
    backgroundColorChanger: function () {
      document.body.style.transition = ".5s";
      document.body.style.backgroundColor = "black";
      setTimeout(() => {
        document.body.style.transition = null;
      }, 500);
    },
    loginEvent() {
      this.loginStatus = "Logginning";
      firebaseLogin(this.id, this.pass)
        .then(() => {
          this.loginSucces();
        })
        .catch(() => {
          this.loginStatus = "ERROR";
        });
    },
    loginSucces: function () {
      this.loginStatus = "Succes";
      this.animateEvent = true;
      this.backgroundColorChanger();
      setTimeout(() => {
        this.$emit("loginFunc", true);
      }, 900);
    },
  },
};
</script>
<style scoped>
div > div {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
div > div > div {
  width: 50%;
  height: 50%;
  margin: auto;
  display: block;
}
.q-btn {
  min-width: 50%;
  width: 50%;
}
</style>