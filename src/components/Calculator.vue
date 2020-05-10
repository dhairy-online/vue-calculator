<template>
  <!-- Welcome to Vue.js Calculator -->
  <!-- Inputs -->
  <div class="section">
    <div v-if="view == 'dialpad'">
      <div class="columns">
        <div class="column">
          <input type="number" class="input" v-model="x" />
        </div>
        <div class="column">
          <input type="number" class="input" v-model="y" />
        </div>
      </div>
      <!-- Buttons -->
      <div class="columns">
        <div class="column">
          <button type="button" class="button is-success no-shadow" @click="add">+ Add</button>
        </div>
        <div class="column">
          <button type="button" class="button is-info no-shadow" @click="minus">- Subtract</button>
        </div>
        <div class="column">
          <button type="button" class="button is-warning no-shadow" @click="into">x Multiply</button>
        </div>
        <div class="column">
          <button type="button" class="button is-danger no-shadow" @click="divide">/ Divide</button>
        </div>
      </div>
      <div class="column">
        Output: {{ output }}
      </div>
    </div>
    <!-- Dialpad Code over here -->
    <div v-if="view == 'dialpad'">
      <div class="columns">
        <div class="column has-text-centered">
          1
        </div>
        <div class="column has-text-centered">
          2
        </div>
        <div class="column has-text-centered">
          3
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          4
        </div>
        <div class="column has-text-centered">
          5
        </div>
        <div class="column has-text-centered">
          6
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          7
        </div>
        <div class="column has-text-centered">
          8
        </div>
        <div class="column has-text-centered">
          9
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Exporting the Calculator
export default {
  name: "Calculator",
  data: () => {
    return {
      x: 0,
      y: 0,
      output: 0,
      view: 'dialpad'
    }
  },
// All the functions go over here
  methods: {
    add() {
      console.log(this.x)
      this.output = parseInt(this.x) + parseInt(this.y);
    },
    minus() {
      this.output = this.x - this.y;
    },
    into() {
      this.output = this.x * this.y;
    },
    divide() {
      this.output = this.x / this.y;
    }
  }
}
</script>
<style>
/*No shadow style down below */
  .no-shadow {
    width: 100%
  }
</style>
