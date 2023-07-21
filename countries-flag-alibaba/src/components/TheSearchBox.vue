<template>
  <div class="text-left">
    <div class="input-container">
      <i class="fa fa-search"></i>
      <input
        type="text"
        v-model="searchQuery"
        @input="handleSearch"
        placeholder="Search..."
        class="search-input w-75"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search-query', { "searchCountry": this.searchQuery.toLowerCase() });
    },
  },
};
</script>

<style>
/* ... (existing styles remain the same) ... */

/* Add styles for the input container */
.input-container {
  position: relative;
}

/* Styles for the search icon */
.input-container i {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #ccc;
}
.search-input{
  padding: 10px 10px 10px 30px;
}
</style>
