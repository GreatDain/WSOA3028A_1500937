// function combine3words(){

// let input1 = document.getElementById("word1").value;
// let input2 = document.getElementById("word2").value;
// let input3 = document.getElementById("word3").value;

// document.getElementById("output").innerHTML = input1 + '.' + input2 + '.' + input3;
// }

function defaultmap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiMTUwMDkzNyIsImEiOiJja2J4cWI0ajEwcTE3MnFtc2Q5ZGZzMDA5In0.bz8yNuJ4cfmz0PqtUftnqA';
        let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [28.0473,-26.2041],
        zoom: 12
    });

    let marker = new mapboxgl.Marker()
    .setLngLat([28.0473,-26.2041])
    .addTo(map);

    map.addControl(new mapboxgl.NavigationControl());
}

function combine3words(){

    let input1 = document.getElementById("word1").value;
    let input2 = document.getElementById("word2").value;
    let input3 = document.getElementById("word3").value;

    document.getElementById("output").value = input1 + '.' + input2 + '.' + input3;

    let output = document.getElementById("output").value;

    document.getElementById("output").innerHTML = "Your entries: " + input1 + '.' + input2 + '.' + input3;

    document.getElementById('error').innerHTML = "";

    what3words.api.autosuggest(output, {
    clipToCountry: ["ZA"],
    nResults: 1,
})
.then(function(response){
    console.log("[autosuggest]", response);
    let words = response.suggestions[0].words;

    userwords = document.getElementById("3words");
    userwords.innerHTML += words;

    what3words.api.convertToCoordinates(words).then(function(response){
        coords = document.getElementById("coords");
        nearestPlace = document.getElementById("nearest");

        coords.innerHTML+= response.coordinates.lat + ',' + response.coordinates.lng;
        nearestPlace.innerHTML+= response.nearestPlace;

        mapboxgl.accessToken = 'pk.eyJ1IjoiMTUwMDkzNyIsImEiOiJja2J4cWI0ajEwcTE3MnFtc2Q5ZGZzMDA5In0.bz8yNuJ4cfmz0PqtUftnqA';
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [response.coordinates.lng,response.coordinates.lat],
            zoom: 12
        });

        marker = new mapboxgl.Marker()
        .setLngLat([response.coordinates.lng,response.coordinates.lat])
        .addTo(map);

        map.addControl(new mapboxgl.NavigationControl());
    });
})
.catch(function(error){
    document.getElementById('error').innerHTML = "The words entered are invalid or the location does not exist.";
    console.log("[code]", error.code);
    console.log("[message]", error.message);
    document.getElementById("coords").innerHTML = "Coordinates: ";
    document.getElementById("3words").innerHTML = "Top 3 closest word matches: ";
    document.getElementById("nearest").innerHTML = "Nearest Place: ";
    defaultmap();
});
}

function clear3words(){

    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
    document.getElementById("word3").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("coords").innerHTML = "Coordinates: ";
    document.getElementById("3words").innerHTML = "Top 3 closest word matches: ";
    document.getElementById("nearest").innerHTML = "Nearest Place: ";
    document.getElementById('error').innerHTML = "";

    defaultmap();
}


