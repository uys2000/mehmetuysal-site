<template>
  <q-carousel
    model="value"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="white"
    padding
    height="50vh"
    class="bg-primary text-white shadow-1 rounded-borders"
  >
    <q-carousel-slide name="one" class="column no-wrap flex-center">
      asdd
    </q-carousel-slide>
    <q-carousel-slide name="two" class="column row">
      asdaaaaa
    </q-carousel-slide>
  </q-carousel>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      value: ref("one"),
    };
  },
};
</script>