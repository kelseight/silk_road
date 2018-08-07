<template>
  <div>
    <v-btn color="info" :disabled="isAtEnd || !isAlive" @click="takeTurn({advanceAmount: 1})">Continue</v-btn>
    <v-btn color="info" @click="changeHP({ member: members[Math.floor(Math.random()*members.length)], amount: -60 })">hurt</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'PlayerControls',
  data: function () {
    return {
      // remove this
      isAlive: true
    }
  },
  computed: {
    ...mapGetters('party', [
      'members'
    ]),
    ...mapGetters('player', [
      'isAtEnd'
    ]),
    ...mapGetters('world', [
      'worldType'
    ])
  },
  methods: {
    ...mapActions('player', [
      'takeTurn'
    ]),
    ...mapMutations('party', [
      'changeHP'
    ])
  }
}
</script>
