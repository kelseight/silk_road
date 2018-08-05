<template>
  <v-container text-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="green lighten-1">
          <v-card-text class="px-0">
            <p class="map-text" v-html="playerMap.join('')"></p>
            <p class="map-text" v-html="worldMap.join('')"></p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MiniMap',
  data: function () {
    return {
      worldMap: null,
      playerMap: null
    }
  },
  created () {
    // Make initial null map.
    this.playerMap = Array.apply(null, Array(75)).map(String.prototype.valueOf, ' ')
    this.playerMap[0] = '#'

    this.worldMap = Array.apply(null, Array(75)).map(String.prototype.valueOf, '-')

    // Put in the towns from the town locations.
    var townLocs = []
    for (var town in this.$store.state.townInfo) {
      townLocs.push(this.$store.state.townInfo[town].location)
    }
    for (var idx = 0; idx < townLocs.length; idx++) {
      this.worldMap[townLocs[idx]] = 'T'
    }

    // Put in Start and End
    this.worldMap[0] = 'S'
    this.worldMap[this.worldMap.length] = 'E'
  },
  computed: {
    currentPlayerLocation () {
      return this.$store.state.currentPlayerInfo.location
    }
  },
  watch: {
    currentPlayerLocation () {
      this.playerMap = Array.apply(null, Array(75)).map(String.prototype.valueOf, ' ')
      for (var idx = 0; idx < this.currentPlayerLocation; idx++) {
        this.playerMap[idx] = '.'
      }
      this.playerMap[this.currentPlayerLocation] = '#'
    }
  }
}
</script>

<style>
.map-text {
  font-family: monospace;
  padding-bottom: 0;
  line-height: 0;
  font-weight: bolder;
  font-size: 16px;
  margin-left: 10px
}
</style>
