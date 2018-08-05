<template>
  <v-container fluid>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="blue lighten-2">
            <v-card-text class="px-0">
              <h2>Party</h2>
              <br/>
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li v-for="(partyMemberInfo, partyMember, index) in partyMembersInfo" :key="`partyMembersInfo-${index}`">
                  <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li><b><span style="color: #4400aa;">{{ partyMember }}</span></b></li>
                    <li><b>HP</b>: {{ partyMembersInfo[partyMember].hp }}</li>
                    <li>&nbsp;</li>
                  </ul>
                </li>
              </ul>

              <!-- <h2>Graveyard</h2>
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li v-for="(partyMember, index) in deadPartyMembers" :key="`deadPartyMember-${index}`">
                  <ul style="list-style-type: none; padding: 0; margin: 0;">
                    <li><b><span style="color: #4400aa;">{{ partyMember }}</span></b></li>
                    <li>&nbsp;</li>
                  </ul>
                </li>
              </ul> -->

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
  name: 'PartyList',
  computed: {
    ...mapGetters('party', [
      'partyInfo',
      'partyMembersInfo',
      'deadPartyMembers',
      'inventory',
      'partyMemberInfo'
    ])
  }
}
</script>
