<template>
  <div>
    <button class="dark-mode-toggle" @click="toggleDarkMode">
      <i v-if="isDarkMode" class="fas fa-sun" />
      <i v-else class="fas fa-moon" />
      <span v-if="isDarkMode">Dark mode</span>
      <span v-else>Light mode</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: true,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit('dark-mode-toggle', this.isDarkMode);
    },
    
  },
};
</script>

<style>
.dark-mode-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>
