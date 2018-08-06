<template>
  <v-container fluid>

    <player-controls/>
    <mini-map/>


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
        <!-- <v-flex xs12>
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
        </v-flex> -->

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
import { mapGetters } from 'vuex'

export default {
  name: 'Game',
  computed: {
    ...mapGetters('player', [
      'location',
      'atEnd'
    ]),
    ...mapGetters('party', [
      'mapLength',
      'townLocations',
      'townNameForLocation'
    ]),
    atEnd: function () {
      return this.location === this.mapLength - 1
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
