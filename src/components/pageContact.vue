<template>
  <div>
    <q-scroll-area class="row wrap justify-center items-start content-start">
      <div class="center row">
        <div class="bg-secondary">
          <q-card dark bordered class="">
            <q-card-section class="row">
              <h5 class="text-accent">Contacts</h5>
              <h6>{{ label["date" + langValue] }}</h6>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
              <address v-html="label['cont' + langValue]" />
              <p />
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <h6 class="text-accent">Mehmet Uysal</h6>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      text: ref(""),
    };
  },
  props: ["langValue", "label"],
};
</script>

<style scoped>
h5,
h6 {
  display: inline;
  margin: auto;
}
.q-scrollarea {
  width: 100%;
  height: 75vh;
}
p {
  padding: 20px 20px;
  border-radius: 10px;
}
.center {
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.center > div {
  width: 40%;
  min-width: 300px;
  margin: 5px auto;
  height: auto;
  padding: 5px;
  border-radius: 5px;
}
a {
  margin: 20px 0px;
}
h6 {
  text-align: center;
}
textarea {
  height: 100% !important ;
}
.q-btn {
  width: 100%;
  margin-top: auto;
}
</style>