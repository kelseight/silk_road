<template>
  <div>
    <v-card dark color="blue lighten-2">
      <v-card-text class="px-0">
        <h2>Debug Information</h2>
        <br/>
        <p><b>Day</b>: {{ day }}</p>
        <p><b>Location</b>: {{ location }}</p>
        <p><b>Coins</b>: {{ coinAmount }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WorldInfo',
  computed: {
    ...mapGetters('player', [
      'location',
      'day'
    ]),
    ...mapGetters('party', [
      'coinAmount'
    ])
  }
}
</script>
