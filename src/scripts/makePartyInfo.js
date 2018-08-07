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
    'Clark', 'Lisa', 'Tommy', 'Johnny', 'Sonny', 'Martha', 'Jonathan',
    'Ken', 'Phoebe', 'Fef', 'Fivel', 'Crabsy', 'The Colonel', 'Pip',
    'Joseph', 'Wallace', 'Wally', 'King', 'Miranda', 'Pony', 'Jim',
    'Christine', 'Q-dawg', 'Ariadne', 'Thrill-seeker', 'Forager',
    'THE', 'Veronica', 'Baloncesto', 'Mallory', 'Victoria', 'Elizabeth',
    'Velour', 'Bethany', 'Hedley', 'William', 'Willy', 'Talc', 'Jay',
    'Allistair', 'Edward', 'Yennefer', 'Maria', 'Elina', 'Patty',
    'Michael', 'Betti', 'Howard', 'Carlos', 'Martin', 'Philip', 'Hank',
    'Francis', 'Francisco', 'Frank', 'Carlotta', 'Austin', 'Terrell',
    'Tony', 'Antonio', 'Anthony', 'Jesse', 'Bryan', 'Valerie', 'David',
    'Jared', 'Alice', 'Isabelle', 'Tracy', 'Tracifer', 'Kimberly', 
    'Kimmifer', 'Quim', 'Quendra', 'Abed', 'Annie', 'Mr.', 'Doc',
    'The Honorable', 'Duke', 'Ms.', 'Dame', 'Madam', 'Monsignor', 
    'Rocky', 'Wilma', 'Charlotte', 'Julissa', 'Shalissa', 'BeBe', 
    'Mimi', 'Gabby', 'Gabrielle', 'Zurg', 'Shun', 'Sugondese', 'Robert',
    'Martin', 'Luther', 'Rosa', 'George', 'Chuck', 'Billy', 'Mary', 
    'Roger', 'Gregory', 'Gregov', 'Grigor', 'Belinda', 'Giselle', 
    'Jack', 'Colby', 'Zoe', 'Alexandria', 'Nicole', 'Nicola', 'Albert',
    'Jame', 'Jamie', 'Dixie', 'Paul', 'Ligma', 'Lawrence', 'Larry', 
    'Kirsten', 'Guinevere', 'Esmerelda', 'Ali', 'Pierre', 'Pietro', 
    'Sujeeth', 'Riddhi', 'Reepijeep', 'Tammy', 'Rupert', 'Utopia',
    'Clifford', 'Casey', 'Sam', 'Samantha', 'Samuel', 'Victoria',
    'Victor', 'Natasha', 'Elias']
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
    'Xi', 'Yesman', 'Zod', 'Eames', 'Cobb', 'Prince', 'Curry', 'Ford',
    'Vaughan', 'Lowry', 'Johnson', 'Johnson', 'LaMar', 'Grimsby', 'Anderson',
    'Ortiz', 'Howard', 'Nevarez', 'Klein', 'Huang', 'Dibny', 'Martinez',
    'Huxley', 'Romo', 'Owens', 'Oakley', 'Nadir', 'Hawthorne', 'Hudson',
    'Halpret', 'LePetomaine', 'Dukington', 'Cooper', 'Tars', 'Case', 'Brand',
    'Wayne', 'Querf', 'Cabeza', 'Santiago', 'Levine', 'Flintstone', 'Li',
    'Kim', 'Huang', 'O\'Donnell', 'O\'Hare', 'O\'Reilly', 'Liebowitz', 
    'Tiesto', 'Testa', 'Batson', 'Linquist', 'Keys', 'Carter', 'Jones',
    'McKay', 'McDonald', 'O\'Brien', 'Bell', 'Peckory', 'Blumenthal', 'Tocino',
    'Apellido', 'Smith', 'Goldstein', 'Goldberg', 'Saperstein', 'The Great', 
    'Jr.', ',\ Heir To The Throne', 'Of York', 'The Time Traveler', 
    'Bernard', 'Nuñez', 'Dachshands', 'Sevilla', 'Lawrence', 'Cubillos',
    'Salamanca', 'Escargot', 'Patel', 'Mankiller', 'Ho', 'Livingston',
    'Tentacles', 'Krabs', 'Denny', 'Mercer', 'Spade', 'Kirk', 'Ryan', 'Johns',
    'Zimmer', 'Zimmerman', 'Weiner', 'Weinstein', 'DuBois', 'Romanov', 'Claw',
    'Stone']

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
