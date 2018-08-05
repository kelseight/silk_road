function makeRandomName () {
  var firstNames = ['Anus', 'Spuds', 'Jeffrey', 'Jebediah', 'Geralt',
    'Pugsley', 'Nevaeh', 'Sabrina', 'John', 'Jake', 'Jill', 'Amber',
    'Jimmy', 'Jennifer', 'Brad', 'Brian', 'Beaux', 'Christina', 'Kelly',
    'Rebius']
  var surNames = ['Carlisle', 'MacKenzie', 'Tiefenthaler', 'Crunk',
    'Addams', 'Priest', 'Aronofsky', 'Easton', 'Tosqui', 'Tostado',
    'Tovar', 'Tranquilino', 'Trebino', 'Trejo', 'Trevino', 'Trexo',
    'Trillo', 'Trinidad', 'Tristan', 'Triyo', 'Troche', 'Troncoso',
    'Trujillo', 'Truxeque', 'Truxillo', 'Tunal', 'Turrubiartes',
    'Ubaldo', 'Uballe', 'Ubeda', 'Udave']

  var firstName = firstNames[Math.floor(firstNames.length * Math.random())]
  var surName = surNames[Math.floor(surNames.length * Math.random())]

  return firstName + ' ' + surName
}

function makePartyInfo (nMembers = 4,
                        startingHP = 100,
                        startingInventory = {'salt': 20}
                      ) {
  var partyInfo = {}

  // Make player details
  var partyMembers = {}
  for (var idx = 0; idx < nMembers; idx++) {
    // TODO: Check for no dupes.
    partyMembers[makeRandomName()] = {hp: 100}
  }

  partyInfo['partyMembers'] = partyMembers
  partyInfo['deadPartyMembers'] = []
  partyInfo['inventory'] = startingInventory

  return partyInfo
}

export default makePartyInfo
