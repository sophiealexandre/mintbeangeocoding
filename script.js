// QUICKSTART
// Step 1. Pick a style you like from https://www.mapbox.com/gallery/
// Step 2. Click "Add ___ to your account" at the bottom-right. This should take you to Mapbox Studio.
// Step 3. Click "Share" in the toolbar at the top-right
// Step 4. Click "Draft" at the top of the popup
// Step 5. Copy the "Style URL" and "Access Token" into the fields below
// Step 6. Done!
const ACCESS_TOKEN = 'pk.eyJ1Ijoic29waGllYWxleGFuZHJlIiwiYSI6ImNrYmh6dDh4NzBhaDkycm1seWdjeWk1d2UifQ.MEBMcxLbttFKOuZBW9vTfQ';
const MAPBOX_STYLE = 'mapbox://styles/mapbox/streets-v11';


mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',

  style: MAPBOX_STYLE,
  center: [-77.04, 38.907],
  zoom: 14
});



// First function for first question

function myFunction() {
// Greeting function
            var txt;
            var person = prompt("Please enter your name:", "Don't be shy!");
            if (person == null || person == "") {
              txt = "Cancelled";
            } else {
              txt = "Hello " + person + "! Let's choose your next destination together!";
            }
            document.getElementById("demo").innerHTML = txt;

// Hide first button

            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }

// Show second button

            var x = document.getElementById('myDIV2');
            if (x.style.visibility === 'hidden') {
              x.style.visibility = 'visible';
            } else {
              x.style.visibility = 'hidden';
            }

          }

// Second question

function myArray() {
// Pick a random city
var array = [
  "Québec, Canada",
  "Toronto, Canada",
  "Ottawa, Canada",
  "Vancouver, Canada",
  "Montréal, Canada",
  "Calgary, Canada",
  "Edmonton, Canada",
  "Victoria, Canada"
];
var randomItem = array[Math.floor(Math.random()*array.length)];
console.log(randomItem)
txt = "Congrats! You are going to " + randomItem + " !";

document.getElementById("city").innerHTML = txt;

// Hide second button
 var x = document.getElementById("myDIV2");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }

// Pin location on the map

mapboxgl.accessToken = 'pk.eyJ1Ijoic29waGllYWxleGFuZHJlIiwiYSI6ImNrYmh6dDh4NzBhaDkycm1seWdjeWk1d2UifQ.MEBMcxLbttFKOuZBW9vTfQ';
         var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
         mapboxClient.geocoding
         .forwardGeocode({
         query: randomItem,
         autocomplete: false,
         limit: 1
         })
         .send()
         .then(function(response) {
         if (
         response &&
         response.body &&
         response.body.features &&
         response.body.features.length
         ) {
         var feature = response.body.features[0];

         var map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/mapbox/streets-v11',
         center: feature.center,
         zoom: 10
         });
         new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
         }
         });

}


