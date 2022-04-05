<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    outline
    animated
    control-color="white"
    arrows
    @update="checker = true"
    height="50vh"
    class="bg-primary text-white shadow-1 rounded-borders"
  >
    <q-carousel-slide
      :name="`${i}`"
      v-for="i in Array(items.length).keys()"
      :key="i"
      class="ql-editor"
      v-html="getHTML"
    >
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "vue";
import { dataBaseFunctionRead } from "@/service/service-for-user.js";
dataBaseFunctionRead;
export default {
  data() {
    return {
      slide: ref("0"),
      checker: true,
      object: {},
    };
  },
  props: ["langVal", "items"],
  methods: {
    getText: function (index) {
      if (this.checker != this.slide) {
        this.object = {};
        this.checker = this.slide;
        dataBaseFunctionRead("projects", this.items[index]).then((res) => {
          this.object = res.data();
        });
      }
    },
  },
  computed: {
    getHTML: function () {
      this.getText(this.slide);
      const a = this.object["cont" + this.langVal];
      const b = {
        TR: "İçerik bu dilde bulunamadı",
        EN: "Content does not found in this language",
      };
      return a != undefined ? a : b[this.langVal];
    },
  },
  created() {},
};
</script>
