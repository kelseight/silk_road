<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat color="grey lighten-5">
          <v-card-text class="px-0">
            <p class="map-text" v-html="worldMap.slice(Math.max(0,  currentPlayerLocation - 1), Math.min(currentPlayerLocation + 4, mapSize + 1)).join('')"></p>
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
      playerMap: null,
      mapSize: 20,
      townLocs: [0, 20]
    }
  },
  created () {
    this.worldMap = Array.apply(null, Array(this.mapSize)).map(String.prototype.valueOf, '<img src="./../static/images/plains_128x128_1.png"/>')

    // Put in the towns from the town locations.
    for (var town in this.$store.state.townInfo) {
      this.townLocs.push(this.$store.state.townInfo[town].location)
    }
    for (var idx = 0; idx < this.townLocs.length; idx++) {
      this.worldMap[this.townLocs[idx]] = '<img src="./../static/images/plains_with_town_128x128_1.png"/>'
    }

    // Put in Start and End
    this.worldMap[0] = '<img src="./../static/images/plains_with_town_with_wagon_128x128_1.png"/>'
    this.worldMap[this.worldMap.length] = '<img src="./../static/images/plains_with_town_128x128_1.png"/>'
  },
  computed: {
    currentPlayerLocation () {
      return this.$store.state.currentPlayerInfo.location
    }
  },
  watch: {
    currentPlayerLocation () {
      // Create new wagon.
      if (this.townLocs.includes(this.currentPlayerLocation)) {
        this.worldMap[this.currentPlayerLocation] = '<img src="./../static/images/plains_with_town_with_wagon_128x128_1.png"/>'
      } else {
        this.worldMap[this.currentPlayerLocation] = '<img src="./../static/images/plains_with_wagon_128x128_1.png"/>'
      }

      // Delete old wagon trailing you.
      if (this.townLocs.includes(this.currentPlayerLocation - 1)) {
        this.worldMap[this.currentPlayerLocation - 1] = '<img src="./../static/images/plains_with_town_128x128_1.png"/>'
      } else {
        this.worldMap[this.currentPlayerLocation - 1] = '<img src="./../static/images/plains_128x128_1.png"/>'
      }
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
