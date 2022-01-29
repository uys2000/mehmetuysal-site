<template>
  <div>
    <q-scroll-area class="row wrap justify-center items-start content-start">
      <div class="center">
        <div class="bg-secondary">
          <q-card dark bordered class="">
            <q-card-section>
              <h5 class="text-accent">Contacts</h5>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
              <address>
                <p>
                  E-mail: <br />
                  <a href="mailto:190527001@stu.istinye.edu.tr"
                    >190527001@stu.istinye.edu.tr</a
                  ><br />
                  <a href="mailto:mehmetuysal2000@outlook.com.tr"
                    >mehmetuysal2000@outlook.com.tr</a
                  >
                </p>
                <q-separator dark inset />
                <p>
                  Tel: <br />
                  <a href="tel:+90(551)639 3619">+90(551)639 3619</a>
                </p>
              </address>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <h6 class="text-accent">Mehmet Uysal</h6>
            </q-card-section>
          </q-card>
        </div>
        <div class="bg-secondary b">
          <q-input
            v-model="text"
            dark
            filled
            label-color="accent"
            bg-color="primary"
            color="accent"
            label="Mail"
          />
          <q-input
            v-model="text"
            dark
            filled
            label-color="accent"
            bg-color="primary"
            color="accent"
            label="Konu"
          />
          <q-input
            v-model="text"
            dark
            filled
            label-color="accent"
            bg-color="primary"
            color="accent"
            label="Content"
            type="textarea"
          />
          <q-btn color="primary" label="Send" />
        </div></div
    ></q-scroll-area>
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
};
</script>

<style scoped>
.q-scrollarea {
  width: 100%;
  height: 80vh;
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
  margin: auto;
  margin-bottom: 0px;
  margin-top: 0px;
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