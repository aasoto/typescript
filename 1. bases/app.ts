(()=>{
  const msg: string = "Hola mundo"
  
  const city = {
    name: 'Valledupar',
    country: 'Colombia',
    population: 450000
  }
  
  city.population = 500000
  
  console.log(city.population + 1)
})()