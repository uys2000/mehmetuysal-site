<template>
  <div class="main">
    <table>
      <tbody>
        <tr class="bg-secondary buttons">
          <td><block-buttons></block-buttons></td>
        </tr>
        <tr>
          <td class="editor">
            <QuillEditor
              ref="quill"
              theme="snow"
              toolbar="full"
              class="bg-secondary"
            />
          </td>
        </tr>
        <tr class="bg-secondary buttons">
          <td><block-buttons></block-buttons></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { QuillEditor } from "@vueup/vue-quill";
import blockButtons from "./pageAdminEditorButtons.vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
    blockButtons,
  },
  inject: ["editorObject"],
  provide() {
    return {
      getEditorContent: this.getEditorContent,
      quillSet: this.quillSet,
    };
  },
  methods: {
    getEditorContent: function () {
      return this.$refs.quill.getHTML();
    },
    quillSet: function (content) {
      this.$refs.quill.setHTML(content);
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

.main {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.editor {
  height: 100%;
  vertical-align: top;
}
</style>
<style>
.ql-editor {
  min-height: 300px;
}
.buttons button {
  width: 100%;
}
</style>