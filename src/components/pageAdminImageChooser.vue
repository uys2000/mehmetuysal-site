<template>
  <div class="main bg-secondary">
    <q-skeleton v-if="img == null" height="200px" type="QInput" />
    <q-img
      v-if="img != null"
      style="height: 200px; width: 100%"
      :src="img"
    ></q-img>
    <q-btn flat class="text-accent" @click="$refs.img.click()"
      >Change Image</q-btn
    >
    <input
      type="file"
      ref="img"
      accept="image/*"
      @change="uploadImage"
      style="display: none"
    />
  </div>
</template>

<script>
import {
  storageFunctionUpload,
  storageFunctionGet,
} from "@/service/service-for-admin.js";
export default {
  data() {
    return {
      img: null,
    };
  },
  methods: {
    uploadImage: function (input) {
      const file = input["target"]["files"][0];
      storageFunctionUpload("img/CV", file).then(() => {
        this.updateImage();
      });
    },
    updateImage: function () {
      storageFunctionGet("img/CV").then((img) => {
        this.img = img;
      });
    },
  },
  created() {
    this.updateImage();
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  margin: 0px;
}
.q-btn {
  width: 100%;
}
</style>