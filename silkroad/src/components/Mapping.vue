<template>
  <div>
    <p class="mapping">{{ currentPath }}</p>
  </div>
</template>

<script>
export default {
  name: 'mapping',
  data: function () {
    return {
      currentPath: 'S'
    }
  },
  props: {
    takeTurn: {type: Boolean}
  },
  watch: {
    takeTurn: function () {
      if (this.takeTurn) {
        this.makeNextPath()
        this.$emit('doneMapping')
      }
    }
  },
  methods: {
    makeNextPath () {
      if (this.currentPath.length === 12) {
        this.currentPath += 'F'
      } else if (this.currentPath.length > 12) {
        alert('You\'re done, pal.')
      } else if (Math.random() < 0.8) {
        this.currentPath += '='
      } else {
        this.currentPath += 'O'
      }
    }
  }
}
</script>

<style>
.mapping {
  font-size: 2rem;
  font-weight: bold;
}
</style>
