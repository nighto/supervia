// SuperVia API with the sound announcements
const SUPERVIA_API = 'https://cors-anywhere.herokuapp.com/http://webapisupervia.rio.rj.gov.br/api/v1/supervia'

// GeoJSON with the Stations
// source: http://data.rio/dataset/trem-supervia-estacoes
const SUPERVIA_STATIONS_API = 'supervia_stations.geojson'

// OpenStreetMap / Mapbox URL, for a nice background
const MAPBOX_API_TOKEN = 'pk.eyJ1IjoiYXJsaW5kbyIsImEiOiJjaWljZDgwemYwMGFydWJrc2FlNW05ZjczIn0.rOROEuNNxKWUIcj6Uh4Xzg'
const MAPBOX_LIGHT = `https://api.mapbox.com/styles/v1/arlindo/cj6mameic8ues2spffqvh7hx1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_API_TOKEN}`

// map initial view
const INITIAL_LAT_LNG = [-22.9, -43.4]
const INITIAL_ZOOM = 11

// get stations data
let stations
axios
    .get(SUPERVIA_STATIONS_API)
    .then(res => {
        // store it
        stations = res.data

        // data.rio data doesn't have Mercadão de Madureira station, add it manually
        stations.features.push(
            {
                "type":"Feature",
                "geometry":{
                    "type":"Point",
                    "coordinates":[
                        -43.3368660,
                        -22.8732169
                    ]
                },
                "properties":{
                    "estacao":"Mercadão de Madureira",
                    "sigla":"MGO",
                    "ramal":"Belford Roxo",
                    "latitude":"-22.8732169",
                    "longitude":"-43.3368660",
                    "nomeantigo":"Magno",
                    "bicicletario":"0",
                    "km":"18.154",
                    "endereco":"Avenida Ministro Edgard Romero, 125",
                    "cep":"21360-201"
                }
            }
        )
    })

// return station by its ID
const returnStationById = (station, id) => {
    // some stations are wrong on data.rio data, fixing it here
    // so we don't change the original, open data

    // Central do Brasil code is 'DPO', not 'CBL'
    if (id === 'DPO' && station.properties.sigla === 'CBL') {
        return true
    }
    // Corte Oito code is 'C08', not 'COO'
    if (id === 'C08' && station.properties.sigla === 'COO') {
        return true
    }
    // Magalhães Bastos is 'MAG', not 'MGA'
    if (id === 'MAG' && station.properties.sigla === 'MGA') {
        return true
    }
    // Marechal Hermes is 'MAL', not 'MHS'
    if (id === 'MAL' && station.properties.sigla === 'MHS') {
        return true
    }
    // Pavuna/São João de Meriti code is 'PVA', not 'PVN'
    if (id === 'PVA' && station.properties.sigla === 'PVN') {
        return true
    }
    // Praça da Bandeira code is 'LAU', not 'PBA'
    if (id === 'LAU' && station.properties.sigla === 'PBA') {
        return true
    }
    // Senador Camará is 'SEM', not 'SEN'
    if (id === 'SEM' && station.properties.sigla === 'SEN') {
        return true
    }

    // regular behavior
    return station.properties.sigla === id
}

// get data, then
axios.get(SUPERVIA_API).then(res => {

    // remove loading
    document.getElementById('loading').remove()

    // initialize map
    let map = L.map('map').setView(INITIAL_LAT_LNG, INITIAL_ZOOM)
    L.tileLayer(MAPBOX_LIGHT, {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery ©<a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 19
    }).addTo(map)

    // test if data is valid
    if (typeof res.data === 'string') {
        return window.alert('Erro na API da SuperVia, favor atualizar a página.')
    }

    let messages = res.data

    console.log('messages', messages)

    // for each SuperVia message
    messages.map(message => {
        // find the station
        let station = stations.features.find( station => returnStationById(station, message.STOP_CODE) )

        if (station) {
            // record the message as a station property
            station.properties.messages = station.properties.messages || []
            station.properties.messages.push(message)
        }
    })

    console.log('stations', stations)

    // for each SuperVia station
    stations.features.map(station => {
        // if it has messages
        if (station.properties.messages && station.properties.messages.length > 0) {
            // find its coords
            let stationCoords = [station.geometry.coordinates[1], station.geometry.coordinates[0]]

            // create its text with last message
            let lastMessage = station.properties.messages[station.properties.messages.length - 1]
            let text = lastMessage.PLAY_TIME + '<br>' + lastMessage.FULL_MESSAGE

            // create its text with all messages combined
            // let text = ''
            // station.properties.messages.map(message => {
            //     text += message.PLAY_TIME + '<br>' + message.FULL_MESSAGE + '<br><br>'
            // })

            // add a marker
            let marker = L.marker(stationCoords).addTo(map).bindPopup(text)
        }
    })
})