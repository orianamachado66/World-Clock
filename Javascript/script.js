function updateLosAngelesTime(event) {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date"); // this selects the class of date inside of the los-angeles id
  let losAngelesTimeElement = losAngelesElement.querySelector(".time"); // this selects the class of time inside of the los-angeles id
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  ); // This keeps the AM on the side and smaller
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
