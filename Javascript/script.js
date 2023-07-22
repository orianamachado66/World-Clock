//Updating the real time and date for the three cities displayed on the page

function updateLosAngelesTime(event) {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement.length) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date"); // this selects the class of date inside of the los-angeles id
    let losAngelesTimeElement = losAngelesElement.querySelector(".time"); // this selects the class of time inside of the los-angeles id
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    ); // This keeps the AM on the side and smaller
  }
}
updateLosAngelesTime(); // by calling the function here, the data will already be there when the page loads
setInterval(updateLosAngelesTime, 1000);

function updateSydneyTime(event) {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date"); // this selects the class of date inside of the los-angeles id
  let sydneyTimeElement = sydneyElement.querySelector(".time"); // this selects the class of time inside of the los-angeles id
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  ); // This keeps the AM on the side and smaller
}

updateSydneyTime();
setInterval(updateSydneyTime, 1000);

function updateLisbonTime(event) {
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date"); // this selects the class of date inside of the los-angeles id
  let lisbonTimeElement = lisbonElement.querySelector(".time"); // this selects the class of time inside of the los-angeles id
  let lisbonTime = moment().tz("Europe/Lisbon");
  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do, YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  ); // This keeps the AM on the side and smaller
}

updateLisbonTime();
setInterval(updateLisbonTime, 1000);

//Drop down select menu then changing the inner html to display each time and date

function updateCity(event) {
  let cityTimeZone = event.target.value; // this goes to the value inside of each option in the select element, so we get the timezone for each city
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess(); // if the user selects the option with the value "current" the page will return their current timezone
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]; // this line of code takes the time zone name, replaces underscores with spaces, splits it into separate parts using slashes, and then retrieves the second part, which is the name of the city. This city name is then stored in the cityName variable for further use.
  let cityTime = moment().tz(cityTimeZone); // getting the timezone for the selected city and storing it in a variable called cityTime
  let htmlCityDisplay = document.querySelector("#cities");
  //whenever the user selects a city the inner html below will change and display the name, time and date of that city in current time
  htmlCityDisplay.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small> ${cityTime.format("A")}</small></div>
        </div>
        <a href="/"> <small> Back to homepage </small></a>
        `;
}

let citiesSelectElement = document.querySelector("#drop-down-cities"); // we select the element we want to target
citiesSelectElement.addEventListener("change", updateCity); // everytime the user changes the city, the function updateCity runs
