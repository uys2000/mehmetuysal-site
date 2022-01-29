<template>
  <div
    class="animate__animated"
    :class="` ${borders} ${classes}`"
    :style="`
    width:${size[0]}; 
    height:${size[1]}; 
    margin-right:${position[0]};
    margin-top:${position[1]};`"
  ></div>
</template>
<script>
export default {
  props: ["borders", "position", "classes", "size", "skew"],
};
</script>
<style scoped>
.r {
  border-right: 1px solid;
}
.t {
  border-top: 1px solid;
}
.l {
  border-left: 1px solid;
}
.b {
  border-bottom: 1px solid;
}
div {
  z-index: 2;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);

  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
</style>>
