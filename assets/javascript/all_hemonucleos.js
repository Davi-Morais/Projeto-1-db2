let map;
let marker;

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function loadAll() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 14,
    });

    const dados = fetch('http://localhost:3000/pontos', {
        method: 'GET',
    }).then(res => res.json());

    dados.then( d => {

        d.forEach(element => {
            marker = new google.maps.Marker({
                map: map,
                position: {lat: element.geometria.coordinates[0], lng: element.geometria.coordinates[1]},
                draggable: true
            });
        });
        
    });
};