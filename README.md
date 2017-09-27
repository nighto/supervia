# [nighto.github.io/supervia](https://nighto.github.io/supervia)
A map of SuperVia audio announcements.

## Acknowledgements
This project can only exist because [SuperVia](http://www.supervia.com.br/) and [Governo do Estado do Rio de Janeiro](http://www.rj.gov.br/) decided to release this data as a public API, so obviously we should be thankful for that. Nevertheless, these are the awesome projects that make this hack possible, in no particular order:

- [CORS Anywhere](https://cors-anywhere.herokuapp.com/) - _used to inject the CORS header into the API, which was missing, and therefore couldn't be used directly on the browser_
- [Leaflet.js](http://leafletjs.com/) - _JS library for displaying maps_
- [OpenStreetMap](https://osm.org) - _collaborative, free worldwide map, used as background_
- [Mapbox](https://www.mapbox.com/) - _nice rendering for the background map, that gets out of the way_
- [Axios](https://github.com/mzabriskie/axios) - _AJAX calls made easy_

## API

This project is a visualization of the SuperVia's API - http://webapisupervia.rio.rj.gov.br/api/v1/supervia - used to play automatic messages on their stations. There's no official documentation, but we can reverse-engineer it. The API return looks like this:

    [
        {
            "AUDIO_MESSAGES_ID":"65931588",
            "TRIP_ID":"1571862",
            "TRIP_NAME":"US197",
            "STOP_CODE":"MAG",
            "FULL_MESSAGE":"Passageiros da estaï¿½ï¿½o, Magalhï¿½es Bastos. Chegarï¿½ trem expresso para Santa Cruz, na plataforma 1, linha A, em aproximadamente 1 minuto.",
            "PLAY_TIME":"27/09/2017 17:59:50",
            "SCHEDULE":"True",
            "SCHEDULE_FAILED":"False",
            "MESSAGE_TYPE":"A1"
        },
        {
            "AUDIO_MESSAGES_ID":"65931646",
            "TRIP_ID":"1572531",
            "TRIP_NAME":"WC920",
            "STOP_CODE":"MAD",
            "FULL_MESSAGE":"PASSAGEIROS DA ESTAï¿½ï¿½O, Madureira, O TREM QUE DEU ENTRADA NA PLATAFORMA 2, LINHA B Nï¿½O FARï¿½ SERVIï¿½O DE PASSAGEIROS. POR GENTILEZA, Nï¿½O EMBARQUEM.",
            "PLAY_TIME":"27/09/2017 18:01:01",
            "SCHEDULE":"True",
            "SCHEDULE_FAILED":"False",
            "MESSAGE_TYPE":"A2"
        },
        {
            "AUDIO_MESSAGES_ID":"65931601",
            "TRIP_ID":"1571478",
            "TRIP_NAME":"UC226",
            "STOP_CODE":"DEO",
            "FULL_MESSAGE":"O trem com destino ï¿½ Central do Brasil, vai sair da plataforma, 1, linha, B, em aproximadamente 8 minutos.",
            "PLAY_TIME":"27/09/2017 18:00:00",
            "SCHEDULE":"True",
            "SCHEDULE_FAILED":"False",
            "MESSAGE_TYPE":"D1"
        },
        {
            "AUDIO_MESSAGES_ID":"65931605",
            "TRIP_ID":"1571853",
            "TRIP_NAME":"UP209",
            "STOP_CODE":"DPO",
            "FULL_MESSAGE":"O trem com destino ï¿½ Japeri, vai sair da plataforma, 8, linha H, tenha atenï¿½ï¿½o ao fechamento das portas ",
            "PLAY_TIME":"27/09/2017 18:00:00",
            "SCHEDULE":"True",
            "SCHEDULE_FAILED":"False",
            "MESSAGE_TYPE":"D2"
        },
        ...
    ]

There is some sort of encoding error, but on the first object, the `MESSAGE_TYPE` is `A1`, which indicates that a train is arriving on that station. On `FULL_MESSAGE` property we can see the standard:

> Passageiros da estação, **station_name**. Chegará trem **trip_type** para **destination**, na plataforma **platform_number**, linha **track_letter**, em aproximadamente **minutes_to_arrive** minuto[s].

The second object, with `MESSAGE_TYPE` as `A2`, represents a train that won't be offering passengers service:

> PASSAGEIROS DA ESTAÇÃO, **station_name**, O TREM QUE DEU ENTRADA NA PLATAFORMA **platform_number**, LINHA **track_letter** NÃO FARÁ SERVIÇO DE PASSAGEIROS. POR GENTILEZA, NÃO EMBARQUEM.

Finally, messages with `MESSAGE_TYPE` that starts with `D` indicates departures from terminal stations. `D1` indicates a future departure, with the following `FULL_MESSAGE` standard:

> O trem com destino à **station_name**, vai sair da plataforma, **platform_number**, linha, **track_letter**, em aproximadamente **minutes_to_depart** minutos.

And `MESSAGE_TYPE` = `D2` indicates a departure happening right now. It has the following `FULL_MESSAGE` standard:

> O trem com destino à **station_name**, vai sair da plataforma, **platform_number**, linha **track_letter**, tenha atenção ao fechamento das portas 
