export const HousesView =
   /*html*/`
    <div class="container-fluid">
  <section class="row">
    <button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#houseFormCollapse">
      List House! <i class="mdi mdi-home"></i>
    </button>

    <div class="collapse" id="houseFormCollapse">

      <form class="row p-2" onsubmit="app.HousesController.createHouse()">

        <div class="form-floating mb-3 col-4">
          <input required type="text" minLength="3" maxLength="15" class="form-control" id="houseStyle" name="style" placeholder="House Style">
          <label for="houseStyle">House Style</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input  required type="number" class="form-control" min="1950"  id="houseYear" name="year" placeholder="House Year">
          <label for="houseYear">House Year</label>
        </div>

        <div class="form-floating mb-3 col-6">
          <input  required type="number" class="form-control" max="10000000" id="housePrice" name="price" placeholder="House Price">
          <label for="housePrice">House Price</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input  required type="number" class="form-control" min="1"  id="houseBedrooms" name="bedrooms" placeholder="House Bedrooms">
          <label for="houseBedrooms">House Bedrooms</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input  required type="number" class="form-control" min="1"  id="houseBathrooms" name="bathrooms" placeholder="House Bathrooms">
          <label for="houseBathrooms">House Bathrooms</label>
        </div>

        <div class="form-floating mb-3 col-12">
          <input  required type="text" class="form-control image-fluid" id="houseimgUrl" name="imgUrl" placeholder="House imgUrl">
          <label for="houseimgUrl">House Image Url</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input  required type="number" class="form-control" min="500"  id="houseSqft" name="sqft" placeholder="House Sqft">
          <label for="houseSqft">House Sqft</label>
        </div>

        <div class="form-floating">
          <textarea  required maxLength="144" class="form-control" placeholder="Please describe your house" name="description" id="houseDescription"
            style="height: 100px"></textarea>
          <label for="houseDescription">House Description</label>
        </div>

        <div class="text-end">
          <button type="submit" class="btn btn-info">Create Listing</button>

        </div>
      </form>
    </div>
  </section>

    <section class="row justify-content-center" id="houses">

    </section>
  
  
    </div>`