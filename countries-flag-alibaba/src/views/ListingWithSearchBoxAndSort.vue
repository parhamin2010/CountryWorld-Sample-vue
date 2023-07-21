<script setup>
import TheSearchBox from "@/components/TheSearchBox.vue";
import TheSort from "@/components/TheSort.vue";
import TheListingItem from "@/components/TheListingItem.vue";

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <TheSearchBox @search-query="handleSearch" />
          </div>
          <div class="col-md-6 col-sm-12">
            <TheSort @sort-query="handleSort" />
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-lg-3 col-xs-1 g-5" v-for="(country, index) in countries" :key="index">
        <TheListingItem
          @click="handleDetailpage(country.name)"
          :name="country.name"
          :flag="country.flag"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
          :continents="country.continents"
        />
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  components: {
    TheListingItem,
    TheSort,
    TheSearchBox
  },
  data() {
    return {
      countries: [],
      loading: true,
      searchCountry: '',
      sortCountry: ''
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        let endpoint = 'https://restcountries.com/v3.1/all';

        if (this.sortCountry) {
          if(this.sortCountry == 'all') endpoint = 'https://restcountries.com/v3.1/all';
          else endpoint = 'https://restcountries.com/v3.1/region/'+this.sortCountry;
        } else if (this.searchCountry) {
          endpoint = 'https://restcountries.com/v3.1/name/'+this.searchCountry;
        }
        
        const response = await fetch(endpoint, { method: 'GET', headers: { accept: 'application/json' } });
        const data = await response.json();

        this.countries = data.map((countryData) => {
            return {
              name: countryData.name.common,
              flag: countryData.flags.svg,
              population: countryData.population,
              region: countryData.region,
              capital: countryData.capital?.[0] || 'N/A',
              continents: countryData.continents
            };
        });

        if (this.searchCountry) {
          const countrysearch = this.searchCountry.toLowerCase();
          this.countries = this.countries.filter((country) =>
            country.name.toLowerCase().includes(countrysearch)
          );
        }
        this.loading = false;
      } catch (error) {
        console.log('Error fetching data');
        this.loading = true;
      }
    },
    handleSort(data){
      this.sortCountry = data.sortCountry;
      this.fetchCountries();
    },
    handleSearch(data){
      this.searchCountry = data.searchCountry;
      this.fetchCountries()
    },
    handleDetailpage(countryname){
      console.log(countryname);
      this.$router.push(`./country/${countryname}`);
    }
  }
};
</script>

<style>
.top-listings{
    display: inline;
    width: 100%;
}
.searchbox, .sortbox{
    width: 50%;
}

.sortbox{
    text-align: left;
}


@media (min-width: 1024px) {
    .top-listings{
        display: block;
        width: 100%;
    }

    .searchbox, .sortbox{
        width: 100%;
    }

}
</style>

