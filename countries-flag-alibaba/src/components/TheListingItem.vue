<template>
  <div class="card mb-3 border-0 shadow">
    <div class="row g-0">
      <img :src="flag" :alt="name" class="img-fluid country-flag border-bottom border-0 border-box" />
      <div class="row g-0">
        <div class="card-body">
          <h5 class="card-title country-name">{{ name }}</h5>
          <p class="card-text"><strong>Population:</strong> {{ population.toLocaleString('en-US') }}</p>
          <p class="card-text"><strong>Region:</strong> {{ region }}</p>
          <p class="card-text"><strong>Capital:</strong> {{ capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.country-flag {
  height: 180px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: var(--bs-card-border-radius) var(--bs-card-border-radius) 0px 0px;
}
.card-text{
  margin: 0;
  font-size: 10pt;
}
.country-name {
  font-size: 14pt;
  font-weight: bold;
}
</style>
