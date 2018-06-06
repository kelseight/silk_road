<template>
  <div class="row">
    <div class="col col-md-2"></div>
    <div class="col col-md-8">
      <!-- TODO: TEMPORARY -->
      <br/><br/><br/>
      <span class="section_title">Map</span>
      <mapping
        :takeTurn="mappingState"
        @doneMapping="stopMap"
      />
      <br/><br/><br/>
      <span class="section_title">Ailments</span>
      <ailment-list
        :takeTurn="ailmentState"
        @doneAilment="stopAilment"
      />
    </div>
    <div class="col col-md-2">
      <br/><br/><br/>
      <button
        type="button"
        class="btn btn-primary"
        @click="takeTurn"
      >
      Take Turn
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePage',
  data: function () {
    return {
      mappingState: false,
      ailmentState: false
    }
  },
  methods: {
    takeTurn: function () {
      this.makeMap()
      this.makeAilment()
    },
    makeMap: function () {
      this.mappingState = true
    },
    stopMap: function () {
      this.mappingState = false
    },
    makeAilment: function () {
      this.ailmentState = true
    },
    stopAilment: function () {
      this.ailmentState = false
    }
  }
}
</script>

<style>
.section_title {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #666;
}
</style>
