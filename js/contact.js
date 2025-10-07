if(document.querySelector("section#contact")){
    document.querySelector("section#contact").classList.add("py-5")
    document.querySelector("section#contact").classList.add("mb-5")
    document.querySelector("section#contact").innerHTML = `
    <h1 class="display-3 fw-bold text-uppercase text-center mb-4 mt-5" style="color:#000;">Contact <span
    style="-webkit-text-stroke: 3px black;
    -webkit-text-fill-color: transparent;">us</span></h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
              <input type="text" class="form-control" placeholder="Your Name..." minlength="3" maxlength="20"
                onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))'
                required>
              <!--  AZ || az || (space) -->
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-envelope-at"></i></span>
              <input type="email" class="form-control" placeholder="Your Email Address..." maxlength="30" required>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-phone"></i></span>
              <input type="text" class="form-control" placeholder="Your Contact No..." minlength="11" maxlength="15" onkeypress='return ((event.charCode >= 48 && event.charCode <= 57))' required>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-paperclip"></i></span>
              <input type="text" class="form-control" placeholder="Your Subject..." minlength="5" maxlength="20"
                onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))'
                required>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="bi bi-chat"></i></span>
              <textarea rows="5" class="form-control" placeholder="Your Message..." minlength="20" maxlength="500"
                required></textarea>
            </div>
            <button type="submit" class="btn btn-outline-secondary mb-3">Submit</button>
          </form>
        </div>
        <div class="col-md-6">
          <img class="map" src="Asstes/Images/CU-Map.png" alt="Location OF Company"></img>
        </div>

      </div>
    </div>
    `
}