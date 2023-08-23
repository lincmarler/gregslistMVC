import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    deleteHouse(houseId) {
        let foundHouse = AppState.houses.find(house => house.id == houseId)
        let filteredHouseArr = AppState.houses.filter(house => house.id != houseId)
        AppState.houses = filteredHouseArr
        _saveHouses()
    }
    createHouse(formData) {
        let newHouse = new House(formData)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
        _saveHouses()
    }
}




export const housesService = new HousesService()