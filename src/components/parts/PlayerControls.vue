<template>
  <v-container fluid>
    <v-container grid-list-md text-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <!-- <v-btn color="info" :disabled="atEnd || !isAlive" @click="nextDay(locationDelta=1)">Advance Day</v-btn>
          <v-btn color="info" :disabled="atEnd || !isAlive" @click="nextDay(locationDelta=0)">Rest</v-btn>
          <v-btn color="error" :disabled="atEnd || !isAlive" @click="modifyHP(member=getRandomPartyMember(), amount=-99)">Hurt Party Member</v-btn> -->
          <v-btn color="info" @click="takeTurn">Take Turn</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PlayerControls',
  methods: {
    ...mapActions('player', [
      'takeTurn'
    ])
  }
}
</script>
