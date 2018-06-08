<template>
  <div>
    {{ ailments }}
    <ul class="ailment_list">
      <li
        class="ailment_list"
        v-for="(ailment, id) in ailments"
        :key="id"
      >
        <span class='ailment'>{{ ailment }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

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
      if (Math.random() > 0.01) {
        this.ailments = _.uniq(this.ailments.push('Cholera'))
      }
      if (Math.random() < 0.1) {
        this.ailments = _.uniq(this.ailments.push('Poops'))
      }
      if (Math.random() < 0.05) {
        this.ailments = _.uniq(this.ailments.push('Grippe'))
      }
      if (Math.random() < 0.05) {
        this.ailments = _.uniq(this.ailments.push('Poop2: Return of Poops'))
      }
    }
  }
}
</script>
