import { Film } from "../models/film.js"
import { Person } from "../models/person.js"
import { Planet } from "../models/planet.js"
import { Species } from "../models/species.js"
import { Starship } from "../models/starship.js"
import { Vehicle } from "../models/vehicle.js"

async function seedFilms(req, res) {
  let films = []

  async function fetchFilmList() {
    let filmsToAdd = await fetch(`https://swapi.dev/api/films`)
    let filmData = await filmsToAdd.json()
    films.push(...filmData.results)
  }

  async function addFilmsToDb() {
    for await (let film of films) {
      film.characters = film.characters.map(url => url.replace('https://swapi.dev', ''))
      film.planets = film.planets.map(url => url.replace('https://swapi.dev', ''))
      film.starships = film.starships.map(url => url.replace('https://swapi.dev', ''))
      film.vehicles = film.vehicles.map(url => url.replace('https://swapi.dev', ''))
      film.species = film.species.map(url => url.replace('https://swapi.dev', ''))
      film.url = film.url.replace('https://swapi.dev', '')
      Film.create(film)
      console.log(`created ${film.title}`)
    }
  }

  await fetchFilmList()
  await addFilmsToDb()
  console.log('completed operation')
  res.status(200).send('completed operation')
}

async function seedPeople(req, res) {
  let people = []

  async function fetchPeopleList() {
    for (let i = 1; i <= 9; i++) {
      let peopleToAdd = await fetch(`https://swapi.dev/api/people?page=${i}`)
      let peopleData = await peopleToAdd.json()
      console.log(`adding page ${i}`)
      people.push(...peopleData.results)
    }
  }

  async function addPeopleToDb() {
    for await (let person of people) {
      person.films = person.films.map(url => url.replace('https://swapi.dev', ''))
      person.species = person.species.map(url => url.replace('https://swapi.dev', ''))
      person.vehicles = person.vehicles.map(url => url.replace('https://swapi.dev', ''))
      person.starships = person.starships.map(url => url.replace('https://swapi.dev', ''))
      person.url = person.url.replace('https://swapi.dev', '')
      person.homeworld = person.homeworld.replace('https://swapi.dev', '')
      Person.create(person)
      console.log(`created ${person.name}`)
    }
  }

  await fetchPeopleList()
  await addPeopleToDb()
  console.log('completed operation')
  res.status(200).send('completed operation')
}

async function seedPlanets(req, res) {
  let planets = []

  async function fetchPlanetList() {
    for (let i = 1; i <= 6; i++) {
      let planetsToAdd = await fetch(`https://swapi.dev/api/planets?page=${i}`)
      let planetsData = await planetsToAdd.json()
      console.log(`adding page ${i}`)
      planets.push(...planetsData.results)
    }
  }

  async function addPlanetsToDb() {
    for await (let planet of planets) {
      planet.residents = planet.residents.map(url => url.replace('https://swapi.dev', ''))
      planet.films = planet.films.map(url => url.replace('https://swapi.dev', ''))
      planet.url = planet.url.replace('https://swapi.dev', '')
      Planet.create(planet)
      console.log(`created ${planet.name}`)
    }
  }

  await fetchPlanetList()
  await addPlanetsToDb()
  console.log('completed operation')
  res.status(200).send('completed operation')
}

async function seedSpecies(req, res) {
  let speciesList = []

  async function fetchSpeciesList() {
    for (let i = 1; i <= 4; i++) {
      let speciesToAdd = await fetch(`https://swapi.dev/api/species?page=${i}`)
      let speciesData = await speciesToAdd.json()
      console.log(`adding page ${i}`)
      speciesList.push(...speciesData.results)
    }
  }

  async function addSpeciesToDb() {
    for await (let species of speciesList) {
      if (species.skin_colors === 'n/a') {
        species.skin_colors = []
      } else {
        species.skin_colors = species.skin_colors.split(', ')
      }
      if (species.hair_colors === 'n/a') {
        species.hair_colors = []
      } else {
        species.hair_colors = species.hair_colors.split(', ')
      }
      if (species.eye_colors === 'n/a') {
        species.eye_colors = []
      } else {
        species.eye_colors = species.eye_colors.split(', ')
      }
      species.films = species.films.map(url => url.replace('https://swapi.dev', ''))
      species.people = species.people.map(url => url.replace('https://swapi.dev', ''))
      species.url = species.url.replace('https://swapi.dev', '')
      if (species.homeworld){
        species.homeworld = species.homeworld.replace('https://swapi.dev', '')
      }
      Species.create(species)
      console.log(`created ${species.name}`)
    }
  }

  await fetchSpeciesList()
  await addSpeciesToDb()
  console.log('completed operation')
  res.status(200).send('completed operation')
}

async function seedStarships(req, res) {
  let starships = []

  async function fetchStarshipList() {
    for (let i = 1; i <= 4; i++) {
      let starshipsToAdd = await fetch(`https://swapi.dev/api/starships?page=${i}`)
      let starshipsData = await starshipsToAdd.json()
      console.log(`adding page ${i}`)
      starships.push(...starshipsData.results)
    }
  }

  async function addStarshipsToDb() {
    for await (let starship of starships) {
      starship.pilots = starship.pilots.map(url => url.replace('https://swapi.dev', ''))
      starship.films = starship.films.map(url => url.replace('https://swapi.dev', ''))
      starship.url = starship.url.replace('https://swapi.dev', '')
      Starship.create(starship)
      console.log(`created ${starship.name}`)
    }
  }

  await fetchStarshipList()
  await addStarshipsToDb()
  console.log('completed operation')
  res.status(200).send('completed operation')
}

async function seedVehicles(req, res) {
  let vehicles = []

  async function fetchVehicleList() {
    for (let i = 1; i <= 4; i++) {
      let vehiclesToAdd = await fetch(`https://swapi.dev/api/vehicles?page=${i}`)
      let vehiclesData = await vehiclesToAdd.json()
      console.log(`adding page ${i}`)
      vehicles.push(...vehiclesData.results)
    }
  }

  async function addVehiclesToDb() {
    for await (let vehicle of vehicles) {
      vehicle.pilots = vehicle.pilots.map(url => url.replace('https://swapi.dev', ''))
      vehicle.films = vehicle.films.map(url => url.replace('https://swapi.dev', ''))
      vehicle.url = vehicle.url.replace('https://swapi.dev', '')
      Vehicle.create(vehicle)
      console.log(`created ${vehicle.name}`)
    }
  }

  await fetchVehicleList()
  await addVehiclesToDb()
  console.log('completed operation')
  res.status(200).send('completed operation')
}

export {
  seedFilms,
  seedPeople,
  seedPlanets,
  seedSpecies,
  seedStarships,
  seedVehicles
}