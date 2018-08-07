function makeRandomName () {
  var firstNames = ['Anus', 'Spuds', 'Jeffrey', 'Jebediah', 'Geralt',
    'Pugsley', 'Nevaeh', 'Sabrina', 'John', 'Jake', 'Jill', 'Amber',
    'Jimmy', 'Jennifer', 'Brad', 'Brian', 'Beaux', 'Christina', 'Kelly',
    'Rebius', 'Jorp', 'James', 'Craig', 'Christen', 'Joromy', 'Reince',
    'Shelby', 'Jacob', 'Terrance', 'Forky', 'Slip', 'Chester', 'Deb',
    'Zazie', 'Clayton', 'Luara', 'Tiffaneigh', 'Clap', 'Derek', 'Aaron',
    'Midge', 'Queenie', 'Tents', 'Taylor', 'Alecks', 'Brandii', 'Caleb',
    'Desk', 'Ellen', 'Franker', 'Garth', 'Heathcliff', 'Iris', 'Jeph',
    'Kessley', 'Lin', 'Manuel', 'Naranja', 'Orion', 'Pegatha', 'Quard',
    'Ralpher', 'Scott', 'Tiny', 'Uriah', 'Vivian', 'Walter', 'Xander',
    'Yvette', 'Zosiah', 'Bartholomew', 'Barda', 'Arthur', 'Dominic',
    'Troy', 'Diana', 'Kara', 'Connor', 'Markus', 'Tingle', 'Hingle',
    'Clark']
  var surNames = ['Carlisle', 'MacKenzie', 'Tiefenthaler', 'Crunk',
    'Addams', 'Priest', 'Aronofsky', 'Easton', 'Tosqui', 'Tostado',
    'Tovar', 'Tranquilino', 'Trebino', 'Trejo', 'Trevino', 'Trexo',
    'Trillo', 'Trinidad', 'Tristan', 'Triyo', 'Troche', 'Troncoso',
    'Trujillo', 'Truxeque', 'Truxillo', 'Tunal', 'Turrubiartes',
    'Ubaldo', 'Uballe', 'Ubeda', 'Udave', 'Clingingham', 'Drunkston',
    'George', 'Faraday', 'Greeth', 'McGee', 'Laqueefah', 'Conrad',
    'McMillon', 'Catburn', 'Laswon', 'Priebus', 'Fisk', 'Thawne',
    'Cycles', 'Flicker', 'Taylor', 'Barnhen', 'Wheeler', 'Starr',
    'Jagger', 'Dinklage', 'Allen', 'West', 'Queen', 'Kent', 'Lannister',
    'Turner', 'Blun', 'Brown', 'De La Garza', 'Thoreau', 'Rand',
    'Portress', 'Oeuf', 'Checkers', 'Fluffyboye', 'Davidson', 'Pril',
    'Atkinson', 'Attaway', 'Blandino', 'Carson', 'Doolittle', 'Eggsy',
    'Franklin', 'Ginger', 'Holloway', 'Ingraham', 'Jackson', 'King',
    'Lee', 'Motorhead', 'Nichols', 'O\'Connell', 'Papadopolous', 'Quora',
    'Reed', 'Squarepants', 'Tinkletown', 'Urkler', 'Van Halen', 'Wong',
    'Xi', 'Yesman', 'Zod', 'Eames', 'Cobb', 'Prince', 'Curry']

  var firstName = firstNames[Math.floor(firstNames.length * Math.random())]
  var surName = surNames[Math.floor(surNames.length * Math.random())]

  return firstName + ' ' + surName
}

function makePartyInfo (nMembers = 4,
                        startingHP = 100
                      ) {
  var partyInfo = {}
  partyInfo['deadMembers'] = []
  partyInfo['members'] = []
  partyInfo['memberStatus'] = {}

  for (var idx = 0; idx < nMembers; idx++) {
    var memberName = makeRandomName()
    partyInfo['members'].push(memberName)
    partyInfo['memberStatus'][memberName] = { hp: startingHP }
  }

  return partyInfo
}

export default makePartyInfo
