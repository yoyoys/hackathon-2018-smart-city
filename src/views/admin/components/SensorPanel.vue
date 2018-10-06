<template lang="pug">
  WidgetPanel(title="ttt" no-border)
    h3 test
</template>

<script lang="ts">
import Vue from 'vue'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'

export default Vue.extend({
  components: {
    WidgetPanel,
  },
})
</script>

<style lang="scss" scoped>

$animationDuration: 0.5s;

@import "~animatewithsass/animate.scss";

.fadeUp-enter-active, .fadeUpIn {
  @include fadeInUp(1, .3s);
}

.fadeUp-leave-active, .fadeUpOut {
  @include fadeOutUp(1, .3s);
}
</style>
