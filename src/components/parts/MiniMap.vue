<template>
  <div>
    <v-card flat color="grey lighten-5">
      <v-card-text class="px-0">
        <div class="map-div">
          <span class="map-text" v-html="worldMapWindow"></span>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MiniMap',
  data: function () {
    return {
      worldMap: [],
      worldMapWindowSize: 4
    }
  },
  computed: {
    ...mapGetters('world', [
      'mapLength',
      'townInfo',
      'townLocations',
      'townNameForLocation',
      'worldType',
      'mapBlocks'
    ]),
    ...mapGetters('player', [
      'location'
    ]),
    worldMapWindow: function () {
      if (this.location === 0) {
        return this.worldMap.slice(0, this.worldMapWindowSize).join('')
      } else if (this.location + this.worldMapWindowSize - 1 > this.mapLength) {
        return this.worldMap.slice(this.mapLength - this.worldMapWindowSize, this.mapLength).join('')
      } else {
        return this.worldMap.slice(this.location - 1, this.location + this.worldMapWindowSize - 1).join('')
      }
    }
  },
  created () {
    // Init worldmap with plains.
    this.worldMap = Array.apply(null, Array(this.mapLength)).map(String.prototype.valueOf, '<img src="' + this.mapBlocks[this.worldType]['base1'] + '"/>')

    // For towns, put the town image in.
    for (var idx = 0; idx < this.townLocations.length; idx++) {
      this.worldMap[this.townLocations[idx]] = '<img src="' + this.mapBlocks[this.worldType]['base1_with_town1'] + '"/>'
    }

    // Put in Start and End
    this.worldMap[0] = '<img src="' + this.mapBlocks[this.worldType]['base1_with_town1_with_vehicle1'] + '"/>'
    this.worldMap[this.mapLength - 1] = '<img src="' + this.mapBlocks[this.worldType]['base1_with_town1'] + '"/>'
  },
  watch: {
    location () {
      // Create new wagon.
      if (this.townLocations.includes(this.location) || this.location === (this.mapLength - 1)) {
        this.worldMap[this.location] = '<img src="' + this.mapBlocks[this.worldType]['base1_with_town1_with_vehicle1'] + '"/>'
      } else {
        this.worldMap[this.location] = '<img src="' + this.mapBlocks[this.worldType]['base1_with_vehicle1'] + '"/>'
      }

      // Delete old wagon trailing you.
      // TODO: This doesn't work with anything but 1.
      if (this.townLocations.includes(this.location - 1) || this.location === 1) {
        this.worldMap[this.location - 1] = '<img src="' + this.mapBlocks[this.worldType]['base1_with_town1'] + '"/>'
      } else {
        this.worldMap[this.location - 1] = '<img src="' + this.mapBlocks[this.worldType]['base1'] + '"/>'
      }
    }
  }
}
</script>

<style>
.map-div {
   white-space: nowrap;
}

.map-div img {
  display: inline;
  float: none;
}
</style>
