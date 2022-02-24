<template>
  <q-btn-toggle
    v-model="pageObject.pageValue"
    flat
    spread
    class="justify-center"
    toggle-color="accent"
    text-color="white"
    size="25px"
    :options="pageObject.pageValues"
  />
</template>

<script>
export default {
  inject: ["pageObject"],
};
</script>

<style scoped>
@media (max-width: 450px) {
  .q-btn-group {
    text-align: center;
    display: block;
    flex-wrap: wrap;
  }
}
</style>