<template>
  <div class="container mt-5 detail-section">
    
    <div class="row mb-4">
      <div class="col-md-12">
        <button class="btn btn-white border pr-2" @click="handleDetailpage">
          <i class="fa fa-arrow-left"></i> Back
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img :src="countries[0]?.flag" :alt="countries[0]?.name" class="img-fluid country-flag" />
      </div>
      <div class="col-md-6">
        <h2>{{ countries[0]?.official }}</h2>
        <div class="row">
          <div class="col-md-6">
            <p><strong>Native Name:</strong> {{ countries[0]?.name }}</p>
            <p><strong>Population:</strong> {{ countries[0]?.population.toLocaleString('en-US') }}</p>
            <p><strong>Region:</strong> {{ countries[0]?.region }}</p>
            <p><strong>Sub Region:</strong> {{ countries[0]?.subregion }}</p>
            <p><strong>Capital:</strong> {{ countries[0]?.capital }}</p>
          </div>
          <div class="col-md-6">
            <p><strong class="m-1">Top Level Domain:</strong> 
                <span class="p-1 m-1" v-if="countries[0]?.tld">
                  {{ getTldList(countries[0]?.tld) }}
                </span>
            </p>
            <p><strong class="m-1">Currency:</strong> 
              <span class="p-1 m-1" v-if="countries[0]?.currencies">
                {{ getCurrenciesList(countries[0]?.currencies) }}
              </span>
            </p>
            <p><strong class="m-1">Language:</strong> 
              <span class="p-1 m-1" v-if="countries[0]?.languages">
                {{ getLanguagesList(countries[0]?.languages) }}
              </span>
            </p>
            <span><strong class="m-1">Border Countries:</strong></span>
            <div class="border-country-boxes">
              <div v-if="borders != ''" v-for="borders in countries[0]?.borderCountry" :key="borders" class="border-country-box">
                <a class="btn btn-white p-2" :href="`../country/`+borders">{{ borders }}</a>
              </div>
              <div v-else class="border-country-box">
                <span>No borders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        let endpoint = 'https://restcountries.com/v3.1/name/'+this.$route.params.name.toLowerCase();

        if (this.name) {
        } else{
        }
        
        const response = await fetch(endpoint, { method: 'GET', headers: { accept: 'application/json' } });
        const data = await response.json();

        this.countries = data.map((countryData) => {

            return {
              name: countryData.name.common,
              official: countryData.name.official,
              flag: countryData.flags.svg,
              population: countryData.population,
              region: countryData.region,
              subregion: countryData.subregion,
              tld: countryData.tld || '',
              currencies: countryData.currencies || '',
              capital: countryData.capital?.[0] || '',
              borderCountry: countryData.borders || '',
              languages: countryData.languages || '',
            };
        });

        console.log(this.countries)



        this.loading = false;
      } catch (error) {
        this.loading = true;
      }
    },
    handleDetailpage(){
      this.$router.push(`../`);
    },
    getCurrenciesList(currencies) {
      return Object.keys(currencies).join(', ');
    },
    getLanguagesList(languages) {
      return Object.values(languages).join(', ');
    },
    getTldList(languages) {
      return Object.values(languages).join(', ');
    },

  }
};
</script>

<style scoped>
  .country-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .country-info {
    display: flex;
    align-items: center;
  }

  .country-flag {
    width: 80%;
    height: 100%;
  }

  .country-details {
    display: flex;
    flex-direction: column;
  }

  .info-columns {
    display: flex;
  }

  .info-column {
    flex: 1;
  }

  .border-countries {
    margin-top: 20px;
  }

  .border-country-boxes {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  .border-country-box {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .back-button {
    margin-top: 20px;
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .back-button i {
    font-size: 16px;
  }
</style>