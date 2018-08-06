<template>
  <v-container fluid>
    <v-container grid-list-md text-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn color="info" :disabled="atEnd || !isAlive" @click="takeTurn">Continue</v-btn>
          <v-btn color="info" @click="changeHP({member: partyMembers[Math.floor(Math.random()*partyMembers.length)], amount: -20})">hurt</v-btn>
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
      'partyMembers'
    ]),
    ...mapGetters('player', [
      'atEnd'
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
