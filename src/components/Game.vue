<template>
  <v-container fluid>

    <v-container grid-list-md text-xs-center class="no-bottom-padding">
      <v-layout row wrap>
        <v-flex xs12>
          <player-controls/>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <mini-map/>
        </v-flex>
      </v-layout>
    </v-container>


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
          <town-bar/>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Game',
  computed: {
    ...mapGetters('player', [
      'location',
      'isAtEnd'
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

.no-bottom-padding {
  padding-bottom: 0;
}
</style>
