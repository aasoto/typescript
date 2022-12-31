(() => {
  type Avenger = {
    name: string;
    weapon: string;
  }

  const ironMan:Avenger = {
    name: 'Iron man',
    weapon: 'Armadura'
  }

  const captainAmerica:Avenger = {
    name: 'Capitan América',
    weapon: 'Escudo'
  }

  const thor:Avenger = {
    name: 'Thor',
    weapon: 'Martillo'
  }

  const superHeroes:Avenger[] = [ironMan, captainAmerica, thor]

  for (const heroe of superHeroes) {
    const {name, weapon} = heroe
    console.log(name, weapon)
  }
})()