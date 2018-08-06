<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat color="grey lighten-5">
          <v-card-text class="px-0">
            <p class="map-text" v-html="worldMap.slice(Math.max(0,  location - 1), Math.min(location + 4, mapLength)).join('')"></p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MiniMap',
  data: function () {
    return {
      worldMap: []
    }
  },
  computed: {
    ...mapGetters('world', [
      'mapLength',
      'townInfo',
      'townLocations',
      'townNameForLocation'
    ]),
    ...mapGetters('player', [
      'location'
    ])
  },
  created () {
    // Init worldmap with plains.
    this.worldMap = Array.apply(null, Array(this.mapLength)).map(String.prototype.valueOf, '<img src="./../static/images/plains_128x128_1.png"/>')

    // For towns, put the town image in.
    for (var idx = 0; idx < this.townLocations.length; idx++) {
      this.worldMap[this.townLocations[idx]] = '<img src="./../static/images/plains_with_town_128x128_1.png"/>'
    }

    // Put in Start and End
    this.worldMap[0] = '<img src="./../static/images/plains_with_town_with_wagon_128x128_1.png"/>'
    this.worldMap[this.mapLength - 1] = '<img src="./../static/images/plains_with_town_128x128_1.png"/>'
  },
  watch: {
    location () {
      // Create new wagon.
      if (this.townLocations.includes(this.location) || this.location === (this.mapLength - 1)) {
        this.worldMap[this.location] = '<img src="./../static/images/plains_with_town_with_wagon_128x128_1.png"/>'
      } else {
        this.worldMap[this.location] = '<img src="./../static/images/plains_with_wagon_128x128_1.png"/>'
      }

      // Delete old wagon trailing you.
      if (this.townLocations.includes(this.location - 1) || this.location === 1) {
        this.worldMap[this.location - 1] = '<img src="./../static/images/plains_with_town_128x128_1.png"/>'
      } else {
        this.worldMap[this.location - 1] = '<img src="./../static/images/plains_128x128_1.png"/>'
      }
    }
  }
}
</script>
