<template>
  <bodyMain />
</template>

<script>
import { useQuasar } from "quasar";
import bodyMain from "@/components/bodyMain.vue";
export default {
  components: { bodyMain },
  mounted() {
    const $q = useQuasar();
    $q.addressbarColor.set("#000");
  },
};
</script>

<style lang="scss">
body {
  background-color: #000000;
  color: #ffffff;
}
a {
  color: white;
  text-decoration: none;
}
</style>

