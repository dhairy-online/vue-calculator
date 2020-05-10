<template>
  <div id="app">
    <Navbar />
    <Calculator />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Calculator from './components/Calculator.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Calculator
  }
}
</script>
