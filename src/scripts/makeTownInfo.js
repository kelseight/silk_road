function makeRandomTownName () {
  var firstPart = ['Gems', 'Dog', 'Dogtail', 'Lizard', 'Chicken', 'Aero',
    'Blood', 'Banana', 'Apple', 'Coconut', 'Lock', 'Java',
    'Anana', 'Anna', 'Water', 'Pill', 'Sheet', 'Lake', 'Skag',
    'June', 'Kill', 'Murder']
  var lastPart = ['gate', 'way', 'town', 'smith', 'sdale', ' Mountain',
    ' Lake', ' Hollows', ' Hallows', 'stench', 'sgrove', ' Grove',
    'sberg']

  var first = firstPart[Math.floor(firstPart.length * Math.random())]
  var last = lastPart[Math.floor(lastPart.length * Math.random())]

  return first + last
}

function makeTownInfo (nTowns = 4, minDelta = 10, maxDelta = null) {
  // nTowns :: number of towns you want, excluding start and end.
  // minDelta :: the minimum distance between towns.
  // maxDelta :: the maximum distance betwene towns.
  // TODO: Put MaxDelta in somewhere here?
  var townInfo = {}
  var distSoFar = 0

  for (var idx = 0; idx < nTowns; idx++) {
    var townLocation = distSoFar + minDelta + Math.floor(Math.random() * minDelta)
    townInfo[makeRandomTownName()] = {location: townLocation}
    distSoFar = townLocation
  }

  return townInfo
}

export default makeTownInfo
