<script setup>
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import HeaderHome from "@/components/TheHeader.vue";

function checkDarkModeStatus(data){
  if (data) {
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

</script>

<template>
  <HeaderHome @dark-mode-toggle-status="checkDarkModeStatus" msg="Worlds Countries!" />
  <router-view></router-view>
</template>
