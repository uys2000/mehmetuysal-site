<template>
  <div>
    <q-scroll-area class="row wrap justify-center items-start content-start">
      <div class="center">
        <div>
          <p class="bg-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            ad nisi voluptas vel qui tempore eum. Autem at in dolores cumque,
            commodi eius quis ullam sint vero qui praesentium ea minus odio, hic
            natus molestias beatae ad cum soluta quod adipisci id vitae
            distinctio ab! Repellendus labore, sequi magnam aperiam ratione
            reprehenderit inventore doloremque culpa numquam in voluptas
            possimus amet ducimus nihil voluptatem hic optio quidem
            exercitationem consequuntur praesentium aut esse recusandae earum
            nam. Non perspiciatis magnam sint impedit consectetur aspernatur
            molestias nemo cupiditate dolor nisi. Vitae soluta ab dolores,
            maiores natus adipisci, recusandae fuga alias et temporibus veniam
            cumque?
          </p>
        </div>
        <q-input
          v-model="text"
          dark
          filled
          label-color="accent"
          bg-color="secondary"
          color="accent"
          label="Mail"
        />
        <q-input
          v-model="text"
          dark
          filled
          label-color="accent"
          bg-color="secondary"
          color="accent"
          label="Konu"
        />
        <q-input
          v-model="text"
          dark
          filled
          label-color="accent"
          bg-color="secondary"
          color="accent"
          label="Content"
          type="textarea"
        /></div
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

<style scoped lang="scss">
.q-scrollarea {
  width: 100%;
  height: 75vh;
}
p {
  padding: 20px 20px;
  border-radius: 10px;
}
.center {
  width: 75%;
  margin: auto;
}
</style>