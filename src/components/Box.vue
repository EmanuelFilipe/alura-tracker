<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Box",
  data() {
    return {
      estilos: {
        "background-color": "#faf0ca",
      },
    };
  },
});
</script>
