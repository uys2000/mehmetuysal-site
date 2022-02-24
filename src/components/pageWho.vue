<template>
  <div>
    <q-scroll-area class="row wrap justify-center items-start content-start">
      <q-img
        :src="require('@/assets/me.jpg')"
        :img-style="{ borderRadius: '10000px' }"
      />
      <p v-html="label['cont' + langValue]"></p>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  props: ["langValue", "label"],
};
</script>


<style scoped>
.q-scrollarea {
  width: 100%;
  height: 75vh;
}
p {
  border-radius: 100px;
  background-color: #222222;
  margin-top: 100px;
  width: 100%;
  padding: 10vh 5vw;
}
.q-img {
  margin-top: 0px;
  margin-right: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  float: right;
  width: 30vw;
}
@media (max-width: 600px) {
  .q-img {
    float: left;
    margin: auto;
    margin-right: 5vw;
    margin-left: 5vw;
    width: 50vw;
  }
}
</style>