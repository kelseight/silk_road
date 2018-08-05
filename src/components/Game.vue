<template>
  <v-container fluid>

    <v-btn color="info" :disabled="atEnd || !isAlive" @click="nextDay(locationDelta=Math.floor((Math.random()) * 3) + 1
)">Advance Day</v-btn>
    <v-btn color="info" :disabled="atEnd || !isAlive" @click="nextDay(locationDelta=0)">Rest</v-btn>
    <v-btn color="error" :disabled="atEnd || !isAlive" @click="modifyHP(member=getRandomPartyMember(), amount=-99)">Hurt Party Member</v-btn>

    <br/><br/><hr/><br/>

    <mini-map/>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="red lighten-1" v-if="!Object.keys(currentEvents).lenght">
            <v-card-text class="px-0" v-for="(value, eventName, index) in currentEvents" :key="`eventName-${index}`">
              <h3>{{ eventName}}: {{ value.description }}</h3>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

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
          <v-card dark color="blue lighten-2">
            <v-card-text class="px-0">
              <h2>Debug Information</h2>
              <p><b>Day</b>: {{ $store.state.currentPlayerInfo.day }}</p>
              <p><b>Location</b>: {{ currentPlayerLocation }}</p>
            </v-card-text>
          </v-card>
          <br/>
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
        </v-flex>

        <v-flex xs6>
          <v-card dark color="blue lighten-2">
            <v-card-text class="px-0">
              <h2>Party</h2>
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li v-for="(partyMemberInfo, partyMember, index) in partyMembers" :key="`partyMember-${index}`">
                  <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li><b><span style="color: #4400aa;">{{ partyMember }}</span></b></li>
                    <li><b>HP</b>: {{ partyMemberInfo.hp }}</li>
                    <li>&nbsp;</li>
                  </ul>
                </li>
              </ul>

              <h2>Graveyard</h2>
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li v-for="(partyMember, index) in deadPartyMembers" :key="`deadPartyMember-${index}`">
                  <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li><b><span style="color: #4400aa;">{{ partyMember }}</span></b></li>
                    <li>&nbsp;</li>
                  </ul>
                </li>
              </ul>

            </v-card-text>
          </v-card>
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
      dailyEvents: dailyEvents
    }
  },
  computed: {
    currentPlayerLocation () {
      return this.$store.state.currentPlayerInfo.location
    },
    partyInventory () {
      return this.$store.state.currentPlayerInfo.inventory
    },
    partyMembers () {
      return this.$store.state.partyInfo.partyMembers
    },
    deadPartyMembers () {
      return this.$store.state.partyInfo.deadPartyMembers
    },
    isAlive () {
      return this.$store.state.currentPlayerInfo.alive
    }
  },
  methods: {
    nextDay: function (locationDelta) {
      // Make sure alive.
      // All HP stuff goes here, before we move.
      // TODO: Decrease HP as necessary.

      // Reset events
      this.currentEvents = {}
      this.getRandomEvents()

      this.$store.commit('checkPartyHealth')

      if (this.isAtTown(locationDelta)) {
        this.$store.commit('advanceLocation', {amount: this.isAtTown(locationDelta)})
      } else if (this.isAtEnd(locationDelta)) {
        this.$store.commit('advanceLocation', {amount: this.$store.state.mapLength - this.currentPlayerLocation})
        this.atEnd = true
      } else {
        this.$store.commit('advanceLocation', {amount: locationDelta})
      }

      this.$store.commit('advanceDay')

      for (var currentEvent in this.currentEvents) {
        this.currentEvents[currentEvent].eventEffect()
      }
    },
    isAtTown: function (locationDelta) {
      // Can prob redo this and isAtEnd.
      // BUG: should stay in town after resting.
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
    },
    modifyHP: function (member, amount) {
      this.$store.commit('modifyHP', {member: member, amount: amount})
    },
    getRandomPartyMember: function () {
      var keys = Object.keys(this.partyMembers)
      return keys[keys.length * Math.random() << 0]
    },
    getRandomEvents: function () {
      for (const ev in this.dailyEvents) {
        if (this.dailyEvents[ev].probability > Math.random()) {
          this.currentEvents[ev] = this.dailyEvents[ev]
        }
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
