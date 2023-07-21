
<script setup>
import Darkmoder from "./DarkMode.vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
  
});

</script>
<template>
  <header class="app-header mb-4">
    <div class="app-title">
      <h3>{{ msg }}</h3>
    </div>
    <div class="dark-mode-section">
      <Darkmoder @dark-mode-toggle = "handleDarkMode" />
    </div>
  </header>
</template>


<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search-query', { "searchCountry": this.searchQuery.toLowerCase() });
    },
    handleDarkMode(data){
      this.$emit('dark-mode-toggle-status', data);
    }
  },
};

</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.app-title {
  text-align: left;
  margin-left: 20px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin: 0;
  color: #4caf50;
}


.dark-mode-section {
  margin-right: 20px;
}

@media (max-width: 768px) {
  .app-title {
    text-align: center;
  }
  .dark-mode-section {
    margin: 0;
  }
}
</style>
