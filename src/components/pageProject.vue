<template>
  <div>
    <q-tabs
      v-model="tab"
      active-color="accent"
      align="justify"
      indicator-color="secondary"
      narrow-indicator
      class="q-mb-lg"
    >
      <q-tab name="old" :ripple="{ color: 'orange' }" label="Old" />
      <q-tab name="future" :ripple="{ color: 'orange' }" label="Future" />
    </q-tabs>
    <div class="q-gutter-y-sm">
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="scale"
        transition-next="scale"
        class="bg-accent text-white text-center"
      >
        <q-tab-panel name="old">
          <coursel-block
            :items="projectListOld"
            :langVal="langValue"
          ></coursel-block>
        </q-tab-panel>

        <q-tab-panel name="future">
          <coursel-block
            :items="projectListNew"
            :langVal="langValue"
          ></coursel-block>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import courselBlock from "./pageProjectCoursel.vue";
export default {
  components: { courselBlock },
  inject: ["getProjectsFunction"],
  props: ["langValue"],
  data() {
    return {
      tab: ref("future"),
      projectListOld: [],
      projectListNew: [],
    };
  },
  methods: {
    arraySeperate: function (array) {
      array.forEach((element) => {
        if (element.type) {
          this.projectListOld.push(element.header);
        } else {
          this.projectListNew.push(element.header);
        }
      });
    },
  },
  created() {
    this.getProjectsFunction().then((res) => {
      this.arraySeperate(res.data()["list"]);
    });
  },
};
</script>
<style scoped>
.q-scrollarea {
  width: 100%;
  height: 75vh;
}

@media (max-width: 400px) {
  .q-tab-panel {
    padding: 2px;
  }
}
</style>