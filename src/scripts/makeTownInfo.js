function makeRandomTownName () {
  var firstPart = ['Gems', 'Dog', 'Dogtail', 'Lizard', 'Chicken', 'Aero',
    'Blood', 'Banana', 'Apple', 'Coconut', 'Lock', 'Java',
    'Anana', 'Anna', 'Water', 'Pill', 'Sheet', 'Lake', 'Skag',
    'June', 'Kill', 'Murder', 'Rock', 'Wildflower', 'Allen', 'Water',
    'Riley', 'Crag', 'River', 'Peace', 'Pleasant', 'Dry', 'Prairie',
    'Chestnut', 'Cream', 'Bone', 'Death', 'York', 'Feather', 'Orange',
    'Victory', 'Disappointment', 'Wonder', 'Great', 'Choco', 'Fire',
    'Twin', 'Cat', 'Gold', 'Silver', 'Copper', 'Shadow', 'Ghost',
    'Haunted', 'Skeleton', 'Angel', 'West', 'East', 'North', 'South',
    'Dust', 'Sun', 'Bean', 'New', 'Wind', 'Rain', 'Emerald', 'Ruby',
    'Star', 'Starling', 'Blood', 'Johnson', 'Rio']
  var lastPart = ['gate', 'way', 'town', 'smith', 'sdale', ' Mountain',
    ' Lake', ' Hollows', ' Hallows', 'stench', 'sgrove', ' Grove',
    'sberg', ' Ridge', ' Haven', ' Rock', 'ville', 'crest', 'dale',
    'ston', ' Plains', '', ' City', 'land', 'sdale', 'grove', 'ton',
    'berg', ' Creek', ' Valley']

  var first = firstPart[Math.floor(firstPart.length * Math.random())]
  var last = lastPart[Math.floor(lastPart.length * Math.random())]

  return first + last
}

function makeTownInfo (nTowns = 3, minDelta = 3, maxDelta = null) {
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
