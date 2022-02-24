<template>
  <div class="bg-secondary">
    <q-scroll-area style="min-height: 200px; height: 300px; max-width: 100%">
      <div class="elements text-accent">
        <div>HEADER</div>
        <div>OLD/NEW</div>
        <div>Choose</div>
      </div>
      <div
        v-for="item in selecterObject.pageValues"
        :key="item"
        class="elements"
      >
        <div>{{ item.header }}</div>

        <div>
          <q-toggle
            v-model="item.type"
            @update:model-value="buttonEventSelecterArrayUpdate()"
          />
        </div>
        <div>
          <q-btn flat label="Choose" @click="buttonEventChoose(item.header)" />
        </div>
      </div>
    </q-scroll-area>
    <q-input
      filled
      dark
      v-model="header"
      label-color="white"
      label="New Project"
    />
    <q-btn
      flat
      class="text-accent"
      label="Add / Remove Project"
      @click="buttonEventAR"
    />
  </div>
</template>

<script>
export default {
  inject: [
    "selecterObject",
    "buttonEventSelecterAdd",
    "buttonEventSelecterRemove",
    "buttonEventSelecterArrayUpdate",
  ],

  data() {
    return {
      header: null,
    };
  },
  methods: {
    buttonEventAR: function () {
      if (this.header != null && this.header != "") {
        const listShort = this.selecterObject.pageValues;
        const listCheck = listShort.map((element) => element.header);
        if (!listCheck.includes(this.header)) {
          this.buttonEventA();
        } else {
          this.buttonEventR(listCheck);
        }
      }
    },
    buttonEventA: function () {
      const data = {
        header: this.header,
        type: true,
      };
      this.buttonEventSelecterAdd(data);
      this.selecterObject.pageValues.push(data);
    },
    buttonEventR(listCheck) {
      const index = listCheck.findIndex((element) => element == this.header);
      const page = this.selecterObject.pageValues[index];
      this.selecterObject.pageValues.splice(index, 1);
      this.buttonEventSelecterRemove(page);
    },
    buttonEventChoose: function (pageName) {
      const listCheck = this.selecterObject.pageValues.map(
        (element) => element.header
      );
      const index = listCheck.findIndex((element) => element == pageName);
      this.selecterObject.pageValue = index;
    },
  },
};
</script>

<style scoped>
.q-btn {
  width: 100%;
}
.elements {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid white;
  justify-content: space-around;
}
.elements > div {
  padding: 1px 3px;
  min-width: 75px;
  width: 25%;
}
</style>