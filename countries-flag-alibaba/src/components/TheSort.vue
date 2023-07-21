<template>
    <div class="sort-select">
      <label for="sort-select">Sort By Continent:</label>
      <select v-model="selectedContinent" @change="handleSort">
        <option value="all">All Continents</option>
        <option v-for="(continent, index) in continents" :key="index" :value="continent">
          {{ continent }}
        </option>
      </select>
      <ul>
        <li v-for="country in sortedCountries" :key="country">{{ country }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sortedCountries: "",
        selectedContinent: "all",
        continents: ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"]
      };
    },
    methods: {
      handleSort() {
        this.$emit('sort-query', {"sortCountry": this.selectedContinent.toLowerCase()});
      },
    },
  };
  </script>
  
  <style>

  label {
    margin-right: 8px;
  }
  
  select {
    padding: 8px;
    font-size: 16px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 8px 0;
  }
  
  li {
    padding: 4px;
  }

  .sort-select{
    margin-top: 10px;
  }
  @media (min-width: 1024px) {
    .sort-select{
      margin-top: 10px;
      text-align: right !important;
    }
  }

  </style>
  