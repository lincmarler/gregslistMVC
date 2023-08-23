import { House } from "./models/House.js"
import { Car } from "./models/Car.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  cars = loadState('cars', [Car])

  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  houses = loadState('houses', [House])
  // houses = [
  //   new House({
  //     year: 2006,
  //     style: "Country House",
  //     bedrooms: 7,
  //     bathrooms: 5,
  //     sqft: 1250,
  //     price: 500000,
  //     description: 'Family home out in the country',
  //     imgUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  //   }),
  //   new House({
  //     year: 2020,
  //     style: "Cliffside Mansion",
  //     bedrooms: 15,
  //     bathrooms: 10,
  //     sqft: 12500,
  //     price: 50000000,
  //     description: 'Ginormouse mansion in the beautiful hills of Boise',
  //     imgUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  //   })
  // ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
