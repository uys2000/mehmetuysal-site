<template>
  <table>
    <tbody>
      <tr>
        <td>
          <q-toggle
            @update:model-value="buttonEventSelecterArrayUpdate()"
            :label="editorObject.langValue"
            v-model="editorObject.langValue"
            false-value="TR"
            true-value="EN"
          />
        </td>
        <td>
          <q-btn icon="event" flat :label="editorObject.dateValue">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="editorObject.dateValue" mask="DD/MM/YYYY">
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </td>
        <td>
          <q-btn
            flat
            class="text-accent"
            label="get"
            @click="buttonEventGetMethod"
          />
        </td>
        <td>
          <q-btn
            flat
            class="text-accent"
            label="publish"
            @click="buttonEventPublish(getEditorContent())"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div></div>
</template>

<script>
export default {
  inject: [
    "quillSet",
    "editorObject",
    "buttonEventGet",
    "getEditorContent",
    "buttonEventPublish",
    "buttonEventSelecterArrayUpdate",
  ],
  methods: {
    buttonEventGetMethod: function () {
      this.buttonEventGet().then((res) => {
        const lang = this.editorObject.langValue;
        this.quillSet(res.get("cont" + lang));
        this.editorObject.dateValue = res.get("date" + lang);
      });
    },
  },
  created() {
    const date = new Date();
    this.editorObject.dateValue = `${date.getDate()}/${
      date.getMonth().toString().length == 1
        ? 0 + (date.getMonth() + 1).toString()
        : date.getMonth()
    }/${date.getFullYear()}`;
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
td {
  width: 25%;
}
</style>