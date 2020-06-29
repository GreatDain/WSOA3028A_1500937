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
        zoom: 11
    });

    // let point = document.createElement('div');
    // point.id = "marker";
    map.addControl(new mapboxgl.NavigationControl());

    // let interest = ['28.0473,-26.2041','28.052729,-26.108843'];

    // for(let i = 0; i<interest.length; i++){
    //     let marker = new mapboxgl.Marker()
    //     .setLngLat(interest[i])
    //     .addTo(map);
    //     console.log(i);
    // };

    let marker = new mapboxgl.Marker()
    .setLngLat([28.0473,-26.2041])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.052729,-26.108843])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.009876,-26.23678])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.075969,-25.997318])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.058835,-26.204358])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([27.969163,-26.145038])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([27.767371,-25.925385])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([27.844846,-26.086554])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.083799,-26.156142])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.099554,-25.81219])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.241153,-26.136683])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.030567,-26.192904])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.057292,-26.103345])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.038527,-26.204708])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.008372,-26.237858])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([27.908024,-26.235217])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.042613,-26.163689])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.033511,-26.201959])
    .addTo(map);

    marker = new mapboxgl.Marker()
    .setLngLat([28.008126,-26.185196])
    .addTo(map);

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
        // coords.innerHTML+= response.coordinates.lng + ',' + response.coordinates.lat;
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


