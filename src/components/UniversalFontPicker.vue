<template>
  <div class="universal-font-picker">
    <v-select
      :options="fontsLoaded"
      :filterable="false"
      :clearable="false"
      @search="(query) => (search = query)"
    >
      <template #selected-option="font">
        <h3 :style="{ 'font-family': startCase(font.label) }" :key="font.label">
          {{ font.label }}
        </h3>
      </template>

      <template #option="font">
        <h3 :style="{ 'font-family': startCase(font.label) }" :key="font.label">
          {{ font.label }}
        </h3>
      </template>

      <template #list-footer>
        <vue-eternal-loading :load="onLoadMore" />
      </template>
    </v-select>
  </div>
</template>

<script>
import fonts from "../../fonts.json";
import startCase from "lodash/startCase";
import vSelect from "vue-select";
import { VueEternalLoading } from "@ts-pro/vue-eternal-loading";

import "vue-select/dist/vue-select.css";

// import * from "@fontsource";

export default {
  name: "UniversalFontPicker",
  components: {
    vSelect,
    VueEternalLoading,
  },
  data() {
    return {
      query: "",
      fonts: Object.keys(fonts).map((i) => `${i}`),
      // fontsLoaded: [],
      showing: 0,
    };
  },
  computed: {
    filteredFonts() {
      return this.fonts;
    },
    fontsLoaded() {
      return this.fonts.slice(0, this.showing);
    },
  },
  methods: {
    startCase: startCase,
    async onLoadMore(state) {
      const lastLoadedIndex = this.fontsLoaded.length;
      const nextLoadedIndex = lastLoadedIndex + 5;

      const newFonts = this.filteredFonts.slice(
        lastLoadedIndex,
        nextLoadedIndex
      );

      try {
        await this.loadFonts(newFonts);
      } finally {
        this.showing = nextLoadedIndex;
        state.loaded();
      }
    },
    async loadFonts(fonts) {
      return fonts
        .map((f) => `../../node_modules/@fontsource/${f}/index.css`)
        .map((f) => {
          const url = new URL(f, import.meta.url);
          import(`${url}`);
        });
    },
  },
  mounted() {
    // this.loadFonts();
  },
};
</script>

<style scoped>
.universal-font-picker {
  width: 100%;
}
.font-list {
  overflow-y: scroll;
}
</style>
