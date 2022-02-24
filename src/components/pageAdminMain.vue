<template>
  <div class="page">
    <div class="bg-primary text-white">
      <block-nav />
    </div>

    <div
      class="main-div bg-primary text-white"
      :style="pageObject.pageValue == 0 ? 'flex-direction: row-reverse;' : ''"
    >
      <!-- Page CV-->
      <div class="side-part" v-if="pageObject.pageValue == 0">
        <block-img />
      </div>
      <div class="main-part" v-if="pageObject.pageValue == 0">
        <block-edt />
      </div>

      <!-- Page Contact-->
      <div class="only-main-part" v-if="pageObject.pageValue == 1">
        <block-edt />
      </div>

      <!-- Page Prjects-->
      <div class="side-part" v-if="pageObject.pageValue == 2">
        <block-sel />
      </div>
      <div class="main-part" v-if="pageObject.pageValue == 2">
        <block-edt />
      </div>
    </div>

    <div class="info bg-info">
      <p>
        <em><b>INFO:</b></em>
      </p>
      <p>pageObject: {{ pageObject }}</p>
      <p>editorObject: {{ editorObject }}</p>
      <p>selecterObject: {{ selecterObject }}</p>
    </div>
  </div>
</template>

<script>
import blockNav from "./pageAdminNavigaion.vue";
import blockSel from "./pageAdminSelecter.vue";
import blockEdt from "./pageAdminEditor.vue";
import blockImg from "./pageAdminImageChooser.vue";

import {
  dataBaseFunctionUpdate,
  dataBaseFunctionSave,
  dataBaseFunctionArrayUpdate,
  dataBaseFunctionArrayRemove,
  dataBaseFunctionDelete,
  dataBaseFunctionRead,
} from "@/service/service-for-admin.js";

dataBaseFunctionUpdate;
export default {
  components: {
    blockNav,
    blockSel,
    blockEdt,
    blockImg,
  },
  data() {
    /// image uploads from image comp directly ///
    return {
      pageObject: {
        pageValue: 0,
        pageValues: [
          { label: "whoAmI", value: 0 },
          { label: "contact", value: 1 },
          { label: "projects", value: 2 },
        ],
      },
      editorObject: {
        langValue: "TR",
        dateValue: null,
        contentValue: null,
      },
      selecterObject: {
        pageValue: 0,
        pageValues: [],
      },
    };
  },
  provide() {
    return {
      pageObject: this.pageObject,
      editorObject: this.editorObject,
      selecterObject: this.selecterObject,
      buttonEventGet: this.buttonEventGet,
      buttonEventPublish: this.buttonEventPublish,
      buttonEventSelecterAdd: this.buttonEventSelecterAdd,
      buttonEventSelecterRemove: this.buttonEventSelecterRemove,
      buttonEventSelecterArrayUpdate: this.buttonEventSelecterArrayUpdate,
    };
  },
  methods: {
    buttonEventPublish: function (content) {
      const page = this.buttonEventPublishPage();
      const data = this.buttonEventPublishData(content);
      this.buttonEventPublishFunction(page, data);
    },
    buttonEventPublishPage() {
      const page = this.pageObject.pageValue;
      if (page == 2) {
        const pageIndex = this.selecterObject.pageValue;
        const pageList = this.selecterObject.pageValues;
        return pageList[pageIndex].header;
      } else {
        const pageIndex = this.pageObject.pageValue;
        const pageList = this.pageObject.pageValues;
        return pageList[pageIndex].label;
      }
    },
    buttonEventPublishData: function (content) {
      var data = {};
      const lang = this.editorObject.langValue;
      const date = this.editorObject.dateValue;
      data["cont" + lang] = content;
      data["date" + lang] = date;
      return data;
    },
    buttonEventPublishFunction: function (page, data) {
      const pageIndex = this.pageObject.pageValue;
      if (pageIndex == 2) {
        dataBaseFunctionUpdate("projects", page, data).catch(() =>
          dataBaseFunctionSave("projects", page, data)
        );
      } else {
        dataBaseFunctionUpdate("onePage", page, data);
      }
    },
    buttonEventGet: function () {
      const page = this.buttonEventPublishPage();
      const pageIndex = this.pageObject.pageValue;
      if (pageIndex == 2) {
        return dataBaseFunctionRead("projects", page);
      } else {
        return dataBaseFunctionRead("onePage", page);
      }
    },
    buttonEventSelecterAdd: function (data) {
      dataBaseFunctionArrayUpdate("projects", "all", data);
      const dataExample = this.buttonEventPublishData(null);
      dataBaseFunctionSave("projects", data.header, dataExample);
    },
    buttonEventSelecterRemove: function (data) {
      dataBaseFunctionArrayRemove("projects", "all", data);
      dataBaseFunctionDelete("projects", data.header);
    },
    buttonEventSelecterArrayUpdate: function () {
      dataBaseFunctionUpdate("projects", "all", {
        list: this.selecterObject.pageValues,
      });
    },
  },
  mounted() {
    dataBaseFunctionRead("projects", "all").then((res) => {
      if (res.exists()) {
        this.selecterObject.pageValues = res.get("list");
      }
    });
  },
};
</script>

<style scoped>
.info {
  margin-top: 50px;
  padding: 20px;
}
.page {
  overflow: auto;
  height: 100%;
}
.main-div {
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main-part {
  display: block;
  width: 68%;
  margin: 1vh 0px;
  height: 100%;
}
.side-part {
  width: 28%;
  height: fit-content;
  margin: 1vh 0px;
}
.only-main-part {
  width: 98%;
  margin: 1vh 0px;
  height: 100%;
}
@media (max-width: 944px) {
  .main-part {
    width: 90%;
  }
  .side-part {
    width: 90%;
  }
}
</style>