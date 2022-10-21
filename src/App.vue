<template>
  <header>
    <Logo />
    <nav>
      <RouterLink to="/">Liste</RouterLink>
      <RouterLink to="/settings">Paramètres</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>&copy; 2022</footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue';

</script>

<style lang="scss">
header {
  display: flex;
  border-bottom: 1px solid var(--text-color);
  align-items: center;
  gap: 1em;
  padding: 0.2em;

  nav {
    display: flex;
    gap: 1em;
  }
}

main {
  background-color: #fff;
  padding: 1em;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--text-color);
  padding: 0.2em;
}
</style>
