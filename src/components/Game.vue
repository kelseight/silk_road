<template>
  <v-container fluid>
    <mini-map/>
    <p v-if="currentTown"><v-icon>home</v-icon> You arrive at {{currentTown}}.</p>
    <p v-else-if="atEnd"><v-icon>business</v-icon>You reached the end!</p>
    <p v-else>&nbsp;</p>
    <p>Day: {{ $store.state.currentPlayerInfo.day }}</p>
    <p>Location: {{ currentPlayerLocation }}</p>
    <p>Jimmy HP: {{ $store.state.partyMembers["Jimmy"]["hp"] }}</p>
    <p>Billy HP: {{ $store.state.partyMembers["Billy"]["hp"] }}</p>
    <br/><hr/><br/>
    <v-btn color="info" @click="hurtCharacter()">Change HP</v-btn>
    <v-btn color="info" :disabled="atEnd" @click="nextDay()">Advance Day</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Game',
  data: function () {
    return {
      advanceButtonActive: true,
      currentTown: false,
      atEnd: false
    }
  },
  computed: {
    currentPlayerLocation () {
      return this.$store.state.currentPlayerInfo.location
    }
  },
  methods: {
    hurtCharacter: function () {
      var hpChange = Math.floor((Math.random() - 0.5) * 20)
      var member = 'Jimmy'

      this.$store.commit('modifyHP', {member: member, amount: hpChange})
    },
    nextDay: function () {
      var locationDelta = Math.floor((Math.random()) * 10) + 1
      this.$store.commit('advanceDay')

      var townLocDelta = this.isAtTown(locationDelta)
      if (townLocDelta) {
        // Are you at a town?
        this.$store.commit('advanceLocation', {amount: townLocDelta})
      } else if (this.isAtEnd(locationDelta)) {
        // Did you beat the game?
        this.$store.commit('advanceLocation', {amount: this.$store.state.mapLength - this.currentPlayerLocation})
        this.atEnd = true
      } else {
        this.$store.commit('advanceLocation', {amount: locationDelta})
      }
    },
    isAtTown: function (locationDelta) {
      // Can prob redo this and isAtEnd.
      for (var town in this.$store.state.townInfo) {
        if (this.$store.state.townInfo[town]['location'] > this.currentPlayerLocation &
            this.$store.state.townInfo[town]['location'] <= this.currentPlayerLocation + locationDelta) {
          this.currentTown = town
          // return diff between you and the town.
          return this.$store.state.townInfo[town]['location'] - this.currentPlayerLocation
        }
      }
      this.currentTown = false
      return false
    },
    isAtEnd: function (locationDelta) {
      if (this.currentPlayerLocation + locationDelta >= this.$store.state.mapLength) {
        console.log('You got to the end!')
        return true
      }
      return false
    }
  }
}
</script>
