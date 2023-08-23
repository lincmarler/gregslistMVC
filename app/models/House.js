import { generateId } from "../utils/generateId.js";


export class House {
    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.style = data.style
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get CardTemplate() {
        return /*html*/`
       <div class="col-md-10 elevation-5 rounded-top my-2">
        <div class="row">
          <div class="col-4 p-0">
            <img class="img-fluid rounded-start"
              src=${this.imgUrl}
              alt="${this.sqft} ${this.price}">
          </div>
          <div class="col-8">
            <h2 class="text-center">${this.year} ${this.style}</h2>
            <h3 class="text-center">${this.bedrooms} ${this.bathrooms}
            <div class="d-flex justify-content-around pt-3">
              <span>$${this.price}</span>
            </div>
            <p>${this.description}</p>
            <div class="text-end py-2">
                <button class="btn btn-danger" onclick="app.HousesController.deleteHouse('${this.id}')">Buy House <i class="mdi mdi-check  "></i> </button>
            </div>
          </div>
        </div>
      </div>`
    }
}

