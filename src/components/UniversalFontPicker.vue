<template>
  <v-select
    class="universal-font-picker"
    :placeholder="placeholder"
    :options="fetchedFonts"
    :filterable="false"
    :clearable="false"
    @search="onSearch"
  >
    <template #selected-option="font">
      <div
        class="universal-font-picker__selected-option"
        :style="{ 'font-family': startCase(font.label) }"
        :key="font.label"
      >
        {{ font.label }}
      </div>
    </template>

    <template #option="font">
      <div
        class="universal-font-picker__option"
        :style="{ 'font-family': startCase(font.label) }"
        :key="font.label"
      >
        {{ font.label }}
      </div>
    </template>

    <template #list-footer>
      <vue-eternal-loading :load="onLoadMore" />
    </template>
  </v-select>
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
  props: {
    placeholder: {
      type: String,
      default: "Search for a font",
    },
  },
  data() {
    return {
      query: "",
      fonts: Object.keys(fonts).map((i) => `${i}`),
      fetched: new Set(),
      showing: 0,
    };
  },
  computed: {
    filteredFonts() {
      return this.fonts.filter((f) =>
        f.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    fetchedFonts() {
      return this.filteredFonts.slice(0, this.showing);
    },
  },
  methods: {
    startCase: startCase,
    onSearch(query) {
      this.showing = 0;
      this.query = query;
    },
    async onLoadMore(state) {
      // console.log(state);
      if (this.filteredFonts.length === 0) {
        state.noResults();
        return;
      }

      if (this.fetchedFonts.length >= this.filteredFonts.length) {
        state.noMore();
      }

      const lastLoadedIndex = this.fetchedFonts.length;
      const nextLoadedIndex = lastLoadedIndex + 5;

      const newFonts = this.filteredFonts
        .slice(lastLoadedIndex, nextLoadedIndex)
        .filter((f) => !this.fetched.has(f));

      // update the fetched list
      newFonts.forEach((f) => {
        this.fetched.add(f);
      });

      try {
        await this.loadFonts(newFonts);
      } finally {
        this.showing = nextLoadedIndex;
        state.loaded();
      }
    },
    async loadFonts(fonts) {
      return (
        fonts
          // .map((f) => `../assets/fontsource/${f}/index.css`)
          // .map((f) => `https://cdn.jsdelivr.net/npm/@fontsource/${f}/index.css`)
          .map((f) => {
            // const url = new URL(f, import.meta.url).href;
            // await import(/* @vite-ignore */ `${url}`);
            const head = document.getElementsByTagName("HEAD")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = `https://cdn.jsdelivr.net/npm/@fontsource/${f}/index.css`;
            head.appendChild(link);
          })
      );
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
