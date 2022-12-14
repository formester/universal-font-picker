<template>
  <v-select
    class="universal-font-picker"
    :placeholder="placeholder"
    :options="fetchedFonts"
    :filterable="false"
    :clearable="false"
    @search="onSearch"
    :modelValue="internalModelValue"
    @update:modelValue="$emit('update:modelValue', startCase($event))"
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
import kababCase from "lodash/kebabCase";
import vSelect from "vue-select";
import { VueEternalLoading } from "@ts-pro/vue-eternal-loading";

import "vue-select/dist/vue-select.css";

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
    modelValue: {
      type: String,
      required: true,
    }
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
    internalModelValue() {
      return kababCase(this.modelValue);
    }
  },
  methods: {
    startCase,
    kababCase,
    onSearch(query) {
      this.showing = 0;
      this.query = query;
    },
    async onLoadMore(state) {

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
          .map((f) => {
            const head = document.getElementsByTagName("HEAD")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = `https://cdn.jsdelivr.net/npm/@fontsource/${f}/index.css`;
            head.appendChild(link);
          })
      );
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler() {
        if(this.modelValue) {
          this.loadFonts([this.internalModelValue])
        }
      }
    }
  }
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
