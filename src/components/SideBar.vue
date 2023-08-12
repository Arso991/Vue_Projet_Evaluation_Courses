<template>
  <div class="wrapper">
    <div class="aside">
      <div class="aside__logo">
        <p>Le courseur</p>
      </div>
      <div class="aside__menu">
        <ul class="aside__menu__item">
          <li><RouterLink to="/user" title="Dashboard">Home</RouterLink></li>
          <li>
            <RouterLink to="/user/course" title="Courses">Courses</RouterLink>
          </li>
          <li>
            <RouterLink to="/user/complete" title="Completées"
              >Completées</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/user/remove" title="Supprimées"
              >Supprimées</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>
ul li {
  list-style: none;
  outline: none;
  box-sizing: border-box;
}

/* a {
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
} */
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  background-color: #31374f;
  height: 100vh;
  width: 15rem;
}
.aside__logo {
  margin-top: 2rem;
  /* padding-left: 2rem; */
  font-size: 2rem;
  font-weight: 600;
  color: #e7c57d;
}
.aside__menu__item {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.aside__menu__item li a {
  padding: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
}
.router-link-exact-active{
    background-color: #e7c57d;
    border-radius: 5px;
}
</style>
