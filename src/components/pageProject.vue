<template>
  <div>
    <q-btn-toggle
      v-model="model"
      spread
      push
      outline
      toggle-color="primary"
      toggle-text-color="accent"
      color="secondary"
      :options="[
        { label: 'Old', value: '1' },
        { label: 'Feature', value: '2' },
      ]"
    />
    <div>
      <coursel :value="model" v-model="model" />
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import coursel from "./pageProjectCoursel.vue";

export default {
  components: {
    coursel,
  },
  data() {
    return {
      model: ref("1"),
    };
  },
};
</script>
<style scoped>
.q-scrollarea {
  width: 100%;
  height: 75vh;
}
</style>