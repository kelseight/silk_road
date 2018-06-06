<template>
  <div>
    <ul class="ailment_list">
      <li
        class="ailment_list"
        v-for="ailment in ailments"
        :key="ailment.id"
      >
        <span class='ailment'>{{ ailment.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AilmentList',
  data: function () {
    return {
      ailments: []
    }
  },
  props: {
    takeTurn: {type: Boolean}
  },
  watch: {
    takeTurn: function () {
      if (this.takeTurn) {
        this.randomAilment()
        this.$emit('doneAilment')
      }
    }
  },
  methods: {
    randomAilment () {
      if (Math.random() < 0.01) {
        this.ailments.push({
          value: 'Cholera',
          id: this.ailments.length
        })
      }
      if (Math.random() < 0.1) {
        this.ailments.push({
          value: 'Poops',
          id: this.ailments.length
        })
      }
      if (Math.random() < 0.05) {
        this.ailments.push({
          value: 'Grippe',
          id: this.ailments.length
        })
      }
      if (Math.random() < 0.05) {
        this.ailments.push({
          value: 'Poop2: Return of Poops',
          id: this.ailments.length
        })
      }
    }
  }
}
</script>
