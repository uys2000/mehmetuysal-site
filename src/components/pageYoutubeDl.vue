<template>
  <div>
    <q-input v-model="url" label="Standard" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null,
    };
  },
};
</script>