<template>
  <v-select
    class="universal-font-picker"
    :placeholder="placeholder"
    :options="fetchedFonts"
    :filterable="false"
    :clearable="false"
    @search="(query) => (search = query)"
    :modelValue="internalModelValue"
    @open="onOpen"
    @close="onClose"
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
      <li v-show="hasNextPage" ref="load" class="loader">
        Loading more options...
      </li>
    </template>
  </v-select>
</template>

<script>
import fonts from "../../fonts.json";
import startCase from "lodash/startCase";
import kababCase from "lodash/kebabCase";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

export default {
  name: "UniversalFontPicker",
  components: {
    vSelect,
  },
  props: {
    placeholder: {
      type: String,
      default: "Search for a font",
    },
    modelValue: {
      type: String,
      required: true,
    },
    recommendedFonts: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.infiniteScroll)
  },
  data() {
    return {
      fontsLoaded: new Set(),
      allFonts: Object.keys(fonts).map((i) => `${i}`),
      observer: null,
      limit: 10,
      search: "",
    };
  },
  computed: {
    fonts() {
      const recommendedFonts = this.recommendedFonts.map((f) => kababCase(f));
      return [...new Set([...recommendedFonts, ...this.allFonts])];
    },
    filteredFonts() {
      return this.fonts.filter((f) =>
        f.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    fetchedFonts() {
      this.loadFonts(this.filteredFonts.slice(0, this.limit));
      return this.filteredFonts.slice(0, this.limit)
    },
    internalModelValue() {
      return kababCase(this.modelValue);
    },
    hasNextPage() {
      return this.fetchedFonts.length < this.filteredFonts.length
    },
  },
  methods: {
    startCase,
    kababCase,
    async onOpen() {
      if (this.hasNextPage) {
        await this.$nextTick()
        this.observer.observe(this.$refs.load)
      }
    },
    onClose() {
      this.observer.disconnect()
    },
    async infiniteScroll([{ isIntersecting, target }]) {
      if (isIntersecting) {
        const ul = target.offsetParent
        const scrollTop = target.offsetParent.scrollTop
        this.limit += 10
        await this.$nextTick()
        ul.scrollTop = scrollTop
      }
    },

    async loadFonts(fonts) {
      fonts.forEach((f) => {
        if (!this.fontsLoaded.has(f)) {
          this.fontsLoaded.add(f);
          const head = document.getElementsByTagName("HEAD")[0];
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = `https://cdn.jsdelivr.net/npm/@fontsource/${f}/index.css`;
          head.appendChild(link);
        }
      });
    },
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
.loader {
  text-align: center;
  color: #bbbbbb;
}
</style>
