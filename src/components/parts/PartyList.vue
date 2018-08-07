<template>
  <div>
    <v-card dark color="blue lighten-2">
      <v-card-text class="px-0">
        <h2>Party</h2>
        <br/>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li v-for="(memberStat, memberName, index) in memberStatus" :key="`memberInfo-${index}`">
            <div v-if="!deadMembers.includes(memberName)">
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li><b><span style="color: #4400aa;">{{ memberName }}</span></b></li>
                <li><b>HP</b>: {{ memberStatus[memberName].hp }}</li>
                <li>&nbsp;</li>
              </ul>
            </div>
          </li>
        </ul>

        <h2>Graveyard</h2>
        <br/>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li v-for="(member, index) in deadMembers" :key="`deadMembers-${index}`">
            <ul style="list-style-type: none; padding: 0; margin: 0;">
              <li><b><span style="color: #4400aa;">{{ member }}</span></b></li>
              <li>&nbsp;</li>
            </ul>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PartyList',
  computed: {
    ...mapGetters('party', [
      'deadMembers',
      'members',
      'memberStatus'
    ])
  }
}
</script>
