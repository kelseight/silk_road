<template>
  <v-container fluid>

    <player-controls/>

    <!-- <br/><br/><hr/><br/> -->

    <!-- <mini-map/> -->

    <!-- <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="red lighten-1" v-if="!Object.keys(currentEvents).lenght">
            <v-card-text class="px-0" v-for="(value, eventName, index) in currentEvents" :key="`eventName-${index}`">
              <h3>{{ eventName}}: {{ value.description }}</h3>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="green lighten-1" v-if="currentTown">
            <v-card-text class="px-0">
              <h3><v-icon>home</v-icon> You arrive at {{currentTown}}.</h3>
            </v-card-text>
          </v-card>
          <v-card dark color="green lighten-1" v-else-if="atEnd">
            <v-card-text class="px-0">
              <h3><v-icon>business</v-icon>You reached the end!</h3>
            </v-card-text>
          </v-card>
          <v-card dark color="red lighten-1" v-else-if="!isAlive">
            <v-card-text class="px-0">
              <h3><v-icon>gavel</v-icon>Your party is dead.</h3>
            </v-card-text>
          </v-card>
          <v-card dark color="green lighten-1" v-else>
            <v-card-text class="px-0">
              <h3>You're on the trail.</h3>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <world-info/>
        </v-flex>

          <!-- <br/>
          <v-card dark color="blue lighten-2">
            <v-card-text class="px-0">
              <h2>Items</h2>
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li v-for="(itemInfo, item, index) in partyInventory" :key="`partyInventory-${index}`">
                  <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li><b><v-tooltip bottom>
                      <span style="color: #0044aa;" slot="activator">{{ item }}: {{ itemInfo.quantity }}</span>
                      <span>{{ itemInfo.description }}</span>
                    </v-tooltip></b></li>
                    <li>&nbsp;</li>
                  </ul>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex> -->
        <v-flex xs6>
          <party-list/>
        </v-flex>

      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
// TODO: How to call functions like this.nextDay() from this?
const dailyEvents = {
  'Severe Thunderstorm': {
    probability: 0.01,
    description: 'A severe thunderstorm.  Lose a day.',
    eventEffect: () => {
      // this.nextDay(0)
      Math.random()
    }
  }
}

export default {
  name: 'Game',
  data: function () {
    return {
      advanceButtonActive: true,
      currentTown: false,
      atEnd: false,
      currentEvents: {},
      dailyEvents: dailyEvents,
      isAlive: true
    }
  }
  // methods: {
  //   nextDay: function (locationDelta) {
  //     // Make sure alive.
  //     // All HP stuff goes here, before we move.
  //     // TODO: Decrease HP as necessary.
  //
  //     // Reset events
  //     this.currentEvents = {}
  //     this.getRandomEvents()
  //
  //     this.$store.commit('checkPartyHealth')
  //
  //     if (this.isAtTown(locationDelta)) {
  //       this.$store.commit('advanceLocation', {amount: this.isAtTown(locationDelta)})
  //     } else if (this.isAtEnd(locationDelta)) {
  //       this.$store.commit('advanceLocation', {amount: this.$store.state.mapLength - this.currentPlayerLocation})
  //       this.atEnd = true
  //     } else {
  //       this.$store.commit('advanceLocation', {amount: locationDelta})
  //     }
  //
  //     this.$store.commit('advanceDay')
  //
  //     for (var currentEvent in this.currentEvents) {
  //       this.currentEvents[currentEvent].eventEffect()
  //     }
  //   },
  //   isAtTown: function (locationDelta) {
  //     // Can prob redo this and isAtEnd.
  //     // BUG: should stay in town after resting.
  //     for (var town in this.$store.state.townInfo) {
  //       if (this.$store.state.townInfo[town]['location'] > this.currentPlayerLocation &
  //           this.$store.state.townInfo[town]['location'] <= this.currentPlayerLocation + locationDelta) {
  //         this.currentTown = town
  //         // return diff between you and the town.
  //         return this.$store.state.townInfo[town]['location'] - this.currentPlayerLocation
  //       }
  //     }
  //     this.currentTown = false
  //     return false
  //   },
  //   isAtEnd: function (locationDelta) {
  //     if (this.currentPlayerLocation + locationDelta >= this.$store.state.mapLength) {
  //       return true
  //     }
  //     return false
  //   },
  //   modifyHP: function (member, amount) {
  //     this.$store.commit('modifyHP', {member: member, amount: amount})
  //   },
  //   getRandomPartyMember: function () {
  //     var keys = Object.keys(this.partyMembers)
  //     return keys[keys.length * Math.random() << 0]
  //   },
  //   getRandomEvents: function () {
  //     for (const ev in this.dailyEvents) {
  //       if (this.dailyEvents[ev].probability > Math.random()) {
  //         this.currentEvents[ev] = this.dailyEvents[ev]
  //       }
  //     }
  //   }
  // }
}
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
