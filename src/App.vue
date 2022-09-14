<template>
  <div style="max-width: 300px">
    <UniversalFontPicker v-model="value" />
  </div>
</template>

<script>
import UniversalFontPicker from "@/components/UniversalFontPicker.vue";

export default {
  data() {
    return {
      value: '',
    }
  },
  components: {
    UniversalFontPicker,
  },
}
</script>
