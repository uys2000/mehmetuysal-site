<template>
  <page-login v-if="!isLogged" @loginFunc="loginFunc" />
  <page-main v-if="isLogged" />
</template>

<script>
import pageLogin from "@/components/pageAdminLogin.vue";
import pageMain from "@/components/pageAdminMain.vue";
export default {
  components: {
    pageLogin,
    pageMain,
  },
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    loginFunc(value) {
      this.isLogged = value;
    },
  },
};
</script>
