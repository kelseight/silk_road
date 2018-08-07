<template>
  <v-container fluid>
    <v-container grid-list-md text-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn color="info" :disabled="isAtEnd || !isAlive" @click="takeTurn({advanceAmount: 1})">Continue</v-btn>
          <v-btn color="info" @click="changeHP({ member: members[Math.floor(Math.random()*members.length)], amount: -60 })">hurt</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
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
