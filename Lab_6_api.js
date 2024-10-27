function createMap() {
    var map = L.map('map').setView([36.597889, -100.371094], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    for (let x = 1; x <= 3 ; x++) {
        var lat = getRandomInRange(30, 35, 3);
        var long = getRandomInRange(-90, -100, 3);
        var text = `Marker ${x}: Latitude: ${lat}, Longitude: ${long}`;


        if (x == 1) {
            var marker = L.marker([lat , long]).addTo(map);
            document.getElementById("marker_1").innerHTML = text;
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
            .then((res) => res.json())
            .then((data) => {
                
                document.getElementById("location_1").innerHTML = `Locality: ${data.locality}`;
                
            });

        }
        if (x == 2) {
            var marker = L.marker([lat , long]).addTo(map);
            document.getElementById("marker_2").innerHTML = text;
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("location_2").innerHTML = `Locality: ${data.locality}`;
            });
        }
        if (x == 3) {
            var marker = L.marker([lat , long]).addTo(map);
            document.getElementById("marker_3").innerHTML = text;
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("location_3").innerHTML = `Locality: ${data.locality}`;
            });
        }
        else{
            console.log("can't go more")
        }
    }



    
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }


window.onload = createMap;