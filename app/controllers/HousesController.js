import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.CardTemplate)
    setHTML('houses', content)
}



export class HousesController {
    constructor() {
        console.log('hello from the houses controller')
        console.log('we got houses', AppState.houses)
        _drawHouses()
        AppState.on('houses', _drawHouses)
    }

    createHouse() {
        debugger
        window.event.preventDefault()
        const formEvent = window.event.target
        const formData = getFormData(formEvent)
        formEvent.reset()
        housesService.createHouse(formData)
    }

    async deleteHouse(houseId) {
        if (await Pop.confirm("Are you sure you want to buy this House?")) {
            housesService.deleteHouse(houseId)
        }
    }
}