<template>
  <div>
    <p style="margin-bottom:0;"><span class="mapText">{{ playerLocMap.join('')}}</span></p>
    <p><span class="mapText">{{ initMap.join('') }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'MiniMap',
  data: function () {
    return {
      initMap: null
    }
  },
  created () {
    // Make initial null map.
    this.initMap = Array.apply(null, Array(75)).map(String.prototype.valueOf, 'x')

    // Put in the towns from the town locations.
    var townLocs = []
    for (var town in this.$store.state.townInfo) {
      townLocs.push(this.$store.state.townInfo[town].location)
    }
    for (var idx = 0; idx < townLocs.length; idx++) {
      this.initMap[townLocs[idx]] = 'T'
    }

    // Put in Start and End
    this.initMap[0] = 'S'
    this.initMap[this.initMap.length - 1] = 'E'
  },
  computed: {
    playerLocMap: function () {
      // INITIAL MAP FOR PLAYER
      var initPlayerMap = Array.apply(null, Array(75)).map(String.prototype.valueOf, ' ')
      initPlayerMap[this.$store.state.currentPlayerInfo.location] = '!'
      return initPlayerMap
    }
  }
}
</script>

<style>
.mapText {
  font-family: monospace;
}
</style>
