<template>
  <div class="page">
    <!-- Upper Right Line -->
    <user-line
      borders="t r"
      :class="{ animate__pulse: animate }"
      classes="text-accent"
      :position="['-25vw', '-20vh']"
      :size="['40vw', '10vh']"
    />
    <!-- Upper Left Line -->

    <user-line
      borders="t l"
      :class="{ animate__pulse: animate }"
      classes="text-accent"
      :position="['-15vw', '-35vh']"
      :size="['50vw', '20vh']"
    />
    <!-- Bottom Left Line -->
    <user-line
      borders="l b"
      :class="{ animate__pulse: animate }"
      classes="text-accent"
      :position="['-10vw', '-5vh']"
      :size="['35vw', '20vh']"
    />
    <!-- Bottom Left 2 Line -->
    <user-line
      borders="l b"
      :class="{ animate__pulse: animate }"
      classes="text-accent"
      :position="['10vw', '15vh']"
      :size="['20vw', '20vh']"
    />
    <!-- Bottom Right Line -->
    <user-line
      borders="b r"
      :class="{ animate__pulse: animate }"
      classes="text-accent"
      :position="['-20vw', '-5vh']"
      :size="['10vw', '30vh']"
    />
    <!--  Right Line -->
    <user-line
      borders="b r t"
      :class="{ animate__pulse: animate }"
      classes="text-accent"
      :position="['-35vw', '-45vh']"
      :size="['10vw', '80vh']"
    />
    <q-img
      :src="require('@/assets/logo.jpg')"
      width="50vw"
      height="50vh"
      :img-style="{ borderRadius: '10000px' }"
    >
      <div class="absolute-full flex flex-center text-white">
        <h4>Mehmet Uysal</h4>
      </div>
    </q-img>
  </div>
</template>

<script>
import pageMainLine from "@/components/pageMainLine.vue";
export default {
  components: {
    userLine: pageMainLine,
  },
  data() {
    return {
      animate: true,
    };
  },
  created() {
    setInterval(() => {
      this.animate = !this.animate;
    }, 900);
  },
};
</script>
<style  scoped>
.q-img {
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  border-radius: 100000px;
}
h4 {
  text-align: center;
}
.page {
  position: absolute;
  top: 50vh;
  right: 50%;  
  z-index: -1;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
</style>