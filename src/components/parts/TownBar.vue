<template>
  <v-container fluid>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="blue lighten-2">
            <v-card-text class="px-0">
              <h3 v-if="isAtTown">You've reached {{ townNameForLocation(location) }}.</h3>
              <h3 v-else-if="isAtEnd">You've reached your destination!</h3>
              <h3 v-else>On the trail...</h3>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TownBar',
  computed: {
    ...mapGetters('player', [
      'isAtTown',
      'isAtEnd',
      'location'
    ]),
    ...mapGetters('world', [
      'townNameForLocation'
    ])
  }
}
</script>
