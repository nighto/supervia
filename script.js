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
axios.get(SUPERVIA_STATIONS_API).then(res => { stations = res.data })

// return station by its ID
const returnStationById = (station, id) => station.properties.sigla === id

// get data, then
axios.get(SUPERVIA_API).then(res => {
    console.log(res)

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

    // only parse last 100 messages, as others are old
    let messages = res.data.slice(-100)

    // for each SuperVia message
    messages.map(message => {
        // find the station
        let station = stations.features.find( station => returnStationById(station, message.STOP_CODE) )

        if (station) {
            // find its coords
            let stationCoords = [station.geometry.coordinates[1], station.geometry.coordinates[0]]

            // create its text
            let text = message.PLAY_TIME + '<br>' + message.FULL_MESSAGE

            // add a marker
            let marker = L.marker(stationCoords).addTo(map).bindPopup(text)
        }
    })
})