<template>
  <v-container fluid>
    <p>Day: {{ $store.state.day }}</p>
    <p>Location: {{ $store.state.location }}</p>
    <p>Jimmy HP: {{ $store.state.partyMembers["Jimmy"]["hp"] }}</p>
    <p>Billy HP: {{ $store.state.partyMembers["Billy"]["hp"] }}</p>
    <br/><hr/><br/>
    <v-btn color="info" @click="hurtCharacter()">Change HP</v-btn>
    <v-btn color="info" @click="nextDay()">Advance Day</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Game',
  methods: {
    hurtCharacter: function () {
      var hpChange = Math.floor((Math.random() - 0.5) * 20)
      var member = 'Jimmy'

      this.$store.commit('modifyHP', {member: member, amount: hpChange})
    },
    nextDay: function () {
      var locationDelta = Math.floor((Math.random()) * 10)
      this.$store.commit('advanceDay')
      var atStoreLoc = this.isAtTown(this.$store.state.location, locationDelta)
      if (atStoreLoc) {
        // change this to the town loc, if in a town.
        locationDelta = atStoreLoc
      }
      this.$store.commit('advanceLocation', {amount: locationDelta})
    },
    isAtTown: function (location, locationDelta) {
      for (var town in this.$store.state.worldMap) {
        if (this.$store.state.worldMap[town]['location'] > location &
            this.$store.state.worldMap[town]['location'] <= location + locationDelta) {
          console.log('You reach a town!')
          // return diff between you and the town.
          return this.$store.state.worldMap[town]['location'] - this.$store.state.location
        }
      }
      return false
    }
  }
}
</script>
