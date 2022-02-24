<template>
  <div class="fixed-top-right animate__animated animate__rotateInUpRight">
    <q-btn flat class="bg-primary text-accent" @click="$emit('changeLang')">
      {{ langValue }}
    </q-btn>
  </div>
</template>

<script>
export default {
  props: ["langValue"],
  emits: ["changeLang"],
  methods: {
      asd(){
          this.$emit
      }
  },
};
</script>
