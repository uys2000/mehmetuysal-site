<template>
  <div class="">
    <!-- Lang Part-->
    <button-lang :langValue="langValue" @changeLang="changeLang" />

    <!-- Left Part-->
    <div
      class="fixed-left menuVer animate__animated"
      :class="{
        animate__bounceInLeft: leftComeFromLeft,
        animate__bounceInRight: leftComeFromRight,
        animate__bounceOutLeft: leftOutToLeft,
        animate__bounceOutRight: leftOutToRight,
      }"
    >
      <q-btn
        flat
        class="bg-primary text-accent rotateLeft"
        :label="menus[langValue][0]"
        @click="changePage(0)"
      />
    </div>

    <!-- Bottom Part-->
    <div
      class="fixed-bottom menuHor animate__animated"
      :class="{
        animate__bounceInUp: bottomComeFromUp,
        animate__bounceInIn: bottomComeFromIn,
        animate__bounceOutUp: bottomOutToUp,
        animate__bounceOutIn: bottomOutToIn,
      }"
    >
      <q-btn
        flat
        class="bg-primary text-accent"
        :label="menus[langValue][1]"
        @click="changePage(1)"
      />
    </div>

    <!-- Right Part-->
    <div
      class="fixed-right menuVer animate__animated"
      :class="{
        animate__bounceInLeft: rightComeFromLeft,
        animate__bounceInRight: rightComeFromRight,
        animate__bounceOutLeft: rightOutToLeft,
        animate__bounceOutRight: rightOutToRight,
      }"
    >
      <q-btn
        flat
        class="bg-primary text-accent rotateRight"
        :label="menus[langValue][2]"
        @click="changePage(2)"
      />
    </div>

    <!-- PAge Part-->
    <div
      id="page"
      class="animate__animated"
      :class="{
        animate__bounceInLeft: pageComeFromLeft,
        animate__bounceInRight: pageComeFromRight,
        animate__bounceOutLeft: pageOutToLeft,
        animate__bounceOutRight: pageOutToRight,

        animate__bounceInUp: pageComeFromUp,
        animate__bounceInDown: pageComeFromIn,
        animate__bounceOutUp: pageOutToUp,
        animate__bounceOutDown: pageOutToIn,
      }"
    >
      <page-main v-if="page['EN'] == 'Main Page'" />
      <page-who
        v-if="page['EN'] == 'Who I Am?'"
        :langValue="langValue"
        :label="pageWhoValue"
      />
      <page-contact
        v-if="page['EN'] == 'Contact'"
        :langValue="langValue"
        :label="pageContactValue"
      />
      <page-project v-if="page['EN'] == 'Projects'" :langValue="langValue" />
    </div>
  </div>
</template>

<script>
import buttonLang from "@/components/bodyMainLangButton.vue";
import pageMain from "@/components/pageMain.vue";
import pageWho from "@/components/pageWho.vue";
import pageContact from "@/components/pageContact.vue";
import pageProject from "@/components/pageProject.vue";
import {
  dataBaseFunctionRead,
  dataBaseFunctionReadAll,
} from "@/service/service-for-user.js";

export default {
  components: {
    buttonLang,
    pageMain,
    pageWho,
    pageContact,
    pageProject,
  },
  data() {
    return {
      langValue: "EN",
      page: { EN: "Main Page", TR: "Ana Sayfa" },
      menus: {
        EN: ["Who I Am?", "Projects", "Contact"],
        TR: ["Ben Kimim?", "Projeler", "İletişim"],
      },
      bottomComeFromUp: true,
      bottomComeFromIn: false,
      bottomOutToUp: false,
      bottomOutToIn: false,

      leftComeFromLeft: true,
      leftComeFromRight: false,
      leftOutToLeft: false,
      leftOutToRight: false,

      rightComeFromLeft: false,
      rightComeFromRight: true,
      rightOutToLeft: false,
      rightOutToRight: false,

      pageComeFromLeft: false,
      pageComeFromRight: false,
      pageOutToLeft: false,
      pageOutToRight: false,

      pageComeFromUp: false,
      pageComeFromIn: false,
      pageOutToUp: false,
      pageOutToIn: false,

      pageWhoValue: null,
      pageContactValue: null,
      pageProjectValue: null,
    };
  },
  methods: {
    changePage: function (value) {
      if (value == 0) {
        this.toRight();
      } else if (value == 2) {
        this.toLeft();
      } else {
        this.toBottom();
      }
    },
    changeLang: function () {
      const langValues = ["TR", "EN"];
      if (this.langValue == langValues[0]) {
        this.langValue = langValues[1];
      } else {
        this.langValue = langValues[0];
      }
    },
    toRight: function () {
      this.leftOutToRight = true;
      this.rightOutToRight = true;
      this.pageOutToRight = true;
      setTimeout(() => {
        this.leftOutToRight = false;
        this.rightOutToRight = false;
        this.pageOutToRight = false;

        const c = this.menus["EN"][0];
        this.menus["EN"][0] = this.menus["EN"][2];
        this.menus["EN"][2] = this.page["EN"];
        this.page["EN"] = c;

        const b = this.menus["TR"][0];
        this.menus["TR"][0] = this.menus["TR"][2];
        this.menus["TR"][2] = this.page["TR"];
        this.page["TR"] = b;

        this.leftComeFromLeft = true;
        this.rightComeFromLeft = true;
        this.pageComeFromLeft = true;

        setTimeout(() => {
          this.leftComeFromLeft = false;
          this.rightComeFromLeft = false;
          this.pageComeFromLeft = false;
        }, 500);
      }, 1000);
    },
    toLeft: function () {
      this.leftOutToLeft = true;
      this.rightOutToLeft = true;
      this.pageOutToLeft = true;
      setTimeout(() => {
        this.leftOutToLeft = false;
        this.rightOutToLeft = false;
        this.pageOutToLeft = false;

        const c = this.menus["EN"][2];
        this.menus["EN"][2] = this.menus["EN"][0];
        this.menus["EN"][0] = this.page["EN"];
        this.page["EN"] = c;

        const b = this.menus["TR"][2];
        this.menus["TR"][2] = this.menus["TR"][0];
        this.menus["TR"][0] = this.page["TR"];
        this.page["TR"] = b;

        this.leftComeFromRight = true;
        this.rightComeFromRight = true;
        this.pageComeFromRight = true;

        setTimeout(() => {
          this.leftComeFromRight = false;
          this.rightComeFromRight = false;
          this.pageComeFromRight = false;
        }, 500);
      }, 1000);
    },
    toBottom: function () {
      this.bottomOutToUp = true;
      this.pageOutToUp = true;
      setTimeout(() => {
        this.bottomOutToUp = false;
        this.pageOutToUp = false;

        const c = this.menus["EN"][1];
        this.menus["EN"][1] = this.page["EN"];
        this.page["EN"] = c;

        const b = this.menus["TR"][1];
        this.menus["TR"][1] = this.page["TR"];
        this.page["TR"] = b;

        this.bottomComeFromUp = true;
        this.pageComeFromUp = true;

        setTimeout(() => {
          this.bottomComeFromUp = false;
          this.pageComeFromUp = false;
        }, 500);
      }, 1000);
    },
    toDefault: function () {
      this.bottomComeFromUp = false;
      this.bottomComeFromIn = false;
      this.bottomOutToUp = false;
      this.bottomOutToIn = false;

      this.leftComeFromLeft = false;
      this.leftComeFromRight = false;
      this.leftOutToLeft = false;
      this.leftOutToRight = false;

      this.rightComeFromLeft = false;
      this.rightComeFromRight = false;
      this.rightOutToLeft = false;
      this.rightOutToRight = false;

      this.pageComeFromLeft = false;
      this.pageComeFromRight = false;
      this.pageOutToLeft = false;
      this.pageOutToRight = false;

      this.pageComeFromUp = false;
      this.pageComeFromIn = false;
      this.pageOutToUp = false;
      this.pageOutToIn = false;
    },
    getMainPages: function () {
      dataBaseFunctionReadAll("onePage").then((res) => {
        this.pageContactValue = res.docs[0].data();
        this.pageWhoValue = res.docs[1].data();
      });
    },
    getProjects: function () {
      dataBaseFunctionRead("projects", "all").then((res) => {
        this.projectList = res.data("list");
      });
    },
    getProjectsFunction: function () {
      return dataBaseFunctionRead("projects", "all");
    },
  },
  provide() {
    return {
      pageWhoValue: this.pageWhoValue,
      pageContactValue: this.pageContactValue,
      pageProjectValue: this.pageProjectValue,
      getProjectsFunction: this.getProjectsFunction,
    };
  },
  mounted() {
    this.getMainPages();
    this.getProjects();

    setTimeout(() => {
      this.toDefault();
    }, 500);
  },
};
</script>

<style scoped>
.rotateLeft {
  transform: rotate(90deg);
  transform-origin: 50% 0%;
}
.rotateRight {
  transform: rotate(270deg);
  transform-origin: 50% 0%;
}
.menuVer {
  position: fixed;
  height: 0px;
  top: 50%;
}
.menuHor {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
#page {
  padding: 20vh 20vw;
  width: 100%;
}
</style>