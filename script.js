const SUPERVIA_API = 'https://cors-anywhere.herokuapp.com/http://webapisupervia.rio.rj.gov.br/api/v1/supervia'

const MAPBOX_API_TOKEN = 'pk.eyJ1IjoiYXJsaW5kbyIsImEiOiJjaWljZDgwemYwMGFydWJrc2FlNW05ZjczIn0.rOROEuNNxKWUIcj6Uh4Xzg'
const MAPBOX_LIGHT = `https://api.mapbox.com/styles/v1/arlindo/cj6mameic8ues2spffqvh7hx1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_API_TOKEN}`

const INITIAL_LAT_LNG = [-22.9, -43.4]
const INITIAL_ZOOM = 11

// Stations data from data.rio
// http://data.rio/dataset/trem-supervia-estacoes/resource/0cc4eece-3584-4da9-a5ba-47ac3b929fa5
const SUPERVIA_STATIONS = {
    "type":"FeatureCollection",
    "features":[
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26119648,
                    -22.86529824
                ]
            },
            "properties":{
                "estacao":"Adeus",
                "sigla":"ADS",
                "ramal":"Teleférico A",
                "latitude":"-22.86529824",
                "longitude":"-43.26119648",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"0.64",
                "endereco":"Rua Pedro Avelino s/n",
                "cep":"21061-640"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.38142338,
                    -22.78860158
                ]
            },
            "properties":{
                "estacao":"Agostinho Porto",
                "sigla":"AGO",
                "ramal":"Belford Roxo",
                "latitude":"-22.78860158",
                "longitude":"-43.38142338",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"29.57",
                "endereco":"Avenida Rio D?Ouro 496",
                "cep":"25550-660"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.27096508,
                    -22.85825628
                ]
            },
            "properties":{
                "estacao":"Alemão",
                "sigla":"ALO",
                "ramal":"Teleférico A",
                "latitude":"-22.85825628",
                "longitude":"-43.27096508",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"2.007",
                "endereco":"Estrada do Itararé Avenida Central s/n",
                "cep":"21061-240"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.40239292,
                    -22.82538659
                ]
            },
            "properties":{
                "estacao":"Anchieta",
                "sigla":"ACT",
                "ramal":"Japeri",
                "latitude":"-22.82538659",
                "longitude":"-43.40239292",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"26.464",
                "endereco":"Avenida Nazaré s/n",
                "cep":"21645-010"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.53715455,
                    -22.89284855
                ]
            },
            "properties":{
                "estacao":"Augusto Vasconcelos",
                "sigla":"AVS",
                "ramal":"Santa Cruz",
                "latitude":"-22.89284855",
                "longitude":"-43.53715455",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"39.08",
                "endereco":"Rua Tenente Agenor de Brito s/n",
                "cep":"23013-440"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.52343736,
                    -22.72011302
                ]
            },
            "properties":{
                "estacao":"Austin",
                "sigla":"AUS",
                "ramal":"Japeri",
                "latitude":"-22.72011302",
                "longitude":"-43.52343736",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"44.503",
                "endereco":"Rua Coronel Monteiro de Barros s/n",
                "cep":"26395-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26628677,
                    -22.85874066
                ]
            },
            "properties":{
                "estacao":"Baiana",
                "sigla":"BNA",
                "ramal":"Teleférico A",
                "latitude":"-22.85874066",
                "longitude":"-43.26628677",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"1.54",
                "endereco":"Rua Itajubara / Rua Jorge Gomes s/n",
                "cep":"21060-180"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.46484449,
                    -22.87540916
                ]
            },
            "properties":{
                "estacao":"Bangu",
                "sigla":"BGU",
                "ramal":"Santa Cruz",
                "latitude":"-22.87540916",
                "longitude":"-43.46484449",
                "nomeantigo":"",
                "bicicletario":"1",
                "km":"31.088",
                "endereco":"Rua Coronel Tamarindo s/n",
                "cep":"21840-441"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.36651676,
                    -22.83283177
                ]
            },
            "properties":{
                "estacao":"Barros Filho",
                "sigla":"BFO",
                "ramal":"Belford Roxo",
                "latitude":"-22.83283177",
                "longitude":"-43.36651676",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"23.592",
                "endereco":"Estrada João Paulo s/n",
                "cep":"21516-200"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.40030709,
                    -22.76348481
                ]
            },
            "properties":{
                "estacao":"Belford Roxo",
                "sigla":"BRX",
                "ramal":"Belford Roxo",
                "latitude":"-22.76348481",
                "longitude":"-43.40030709",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"32.976",
                "endereco":"Rua Floripes da Rocha s/n",
                "cep":"26113-340"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.58089803,
                    -22.90613366
                ]
            },
            "properties":{
                "estacao":"Benjamin do Monte",
                "sigla":"BME",
                "ramal":"Santa Cruz",
                "latitude":"-22.90613366",
                "longitude":"-43.58089803",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"43.8",
                "endereco":"Rua Campo Grande s/n",
                "cep":"23070-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.36206549,
                    -22.86430916
                ]
            },
            "properties":{
                "estacao":"Bento Ribeiro",
                "sigla":"BRO",
                "ramal":"Deodoro",
                "latitude":"-22.86430916",
                "longitude":"-43.36206549",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"19.278",
                "endereco":"Rua Carolina Machado s/n",
                "cep":"21555-290"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.25564504,
                    -22.86683789
                ]
            },
            "properties":{
                "estacao":"Bonsucesso",
                "sigla":"BSS",
                "ramal":"Saracuruna",
                "latitude":"-22.86683789",
                "longitude":"-43.25564504",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"7.846",
                "endereco":"Praça das Nações s/n",
                "cep":"21041-010"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.29322026,
                    -22.83016535
                ]
            },
            "properties":{
                "estacao":"Brás de Pina",
                "sigla":"BPA",
                "ramal":"Saracuruna",
                "latitude":"-22.83016535",
                "longitude":"-43.29322026",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"13.719",
                "endereco":"Rua Itabira s/n",
                "cep":"21215-310"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.56021078,
                    -22.90226577
                ]
            },
            "properties":{
                "estacao":"Campo Grande",
                "sigla":"CGE",
                "ramal":"Santa Cruz",
                "latitude":"-22.90226577",
                "longitude":"-43.56021078",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"41.621",
                "endereco":"Rua Campo Grande s/n",
                "cep":"23085-360"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.28075867,
                    -22.70405765
                ]
            },
            "properties":{
                "estacao":"Campos Elíseos",
                "sigla":"CEL",
                "ramal":"Saracuruna",
                "latitude":"-22.70405765",
                "longitude":"-43.28075867",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"29.479",
                "endereco":"Rua Luis de Camões s/n",
                "cep":"25225-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.32804782,
                    -22.8827522
                ]
            },
            "properties":{
                "estacao":"Cascadura",
                "sigla":"CAS",
                "ramal":"Deodoro",
                "latitude":"-22.8827522",
                "longitude":"-43.32804782",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"15.403",
                "endereco":"Avenida Suburbana s/n",
                "cep":"21380-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.31575046,
                    -22.87456836
                ]
            },
            "properties":{
                "estacao":"Cavalcante",
                "sigla":"CAV",
                "ramal":"Belford Roxo",
                "latitude":"-22.87456836",
                "longitude":"-43.31575046",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"15.7",
                "endereco":"Rua Enaldo dos Santos Araújo 936",
                "cep":"21370-200"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.19170889,
                    -22.9033851
                ]
            },
            "properties":{
                "estacao":"Central do Brasil",
                "sigla":"CBL",
                "ramal":"Deodoro",
                "latitude":"-22.9033851",
                "longitude":"-43.19170889",
                "nomeantigo":"Dom Pedro II",
                "bicicletario":"0",
                "km":"0",
                "endereco":"Praça Cristiano Ottoni s/n",
                "cep":"20221-250"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.01486605,
                    -22.59265943
                ]
            },
            "properties":{
                "estacao":"Citrolândia",
                "sigla":"CLA",
                "ramal":"Guapimirim",
                "latitude":"-22.59265943",
                "longitude":"-43.01486605",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"65.501",
                "endereco":"Rua João Café Filho s/n",
                "cep":"25942-220"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.38715096,
                    -22.77916113
                ]
            },
            "properties":{
                "estacao":"Coelho da Rocha",
                "sigla":"CRA",
                "ramal":"Belford Roxo",
                "latitude":"-22.77916113",
                "longitude":"-43.38715096",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"30.791",
                "endereco":"Rua da Matriz 3.351",
                "cep":"25550-170"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.48781398,
                    -22.74471608
                ]
            },
            "properties":{
                "estacao":"Comendado Soares",
                "sigla":"CSS",
                "ramal":"Japeri",
                "latitude":"-22.74471608",
                "longitude":"-43.48781398",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"39.741",
                "endereco":"Rua Tomaz Fonseca s/n",
                "cep":"26280-480"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.29612467,
                    -22.82358558
                ]
            },
            "properties":{
                "estacao":"Cordovil",
                "sigla":"COR",
                "ramal":"Saracuruna",
                "latitude":"-22.82358558",
                "longitude":"-43.29612467",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"14.55",
                "endereco":"Rua Itabira s/n",
                "cep":"21215-310"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30636094,
                    -22.77095553
                ]
            },
            "properties":{
                "estacao":"Corte Oito",
                "sigla":"COO",
                "ramal":"Saracuruna",
                "latitude":"-22.77095553",
                "longitude":"-43.30636094",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"20.827",
                "endereco":"Rua Grajaú esquina com a Avenida Jacatirão s/n",
                "cep":"25070-310"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.6147201,
                    -22.91291931
                ]
            },
            "properties":{
                "estacao":"Cosmos",
                "sigla":"COS",
                "ramal":"Santa Cruz",
                "latitude":"-22.91291931",
                "longitude":"-43.6147201",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"47.398",
                "endereco":"Rua Campo Grande s/n",
                "cep":"23060-660"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.37022126,
                    -22.82212796
                ]
            },
            "properties":{
                "estacao":"Costa Barros",
                "sigla":"COB",
                "ramal":"Belford Roxo",
                "latitude":"-22.82212796",
                "longitude":"-43.37022126",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"25.142",
                "endereco":"Estrada de Botafogo s/n",
                "cep":"21525-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26984931,
                    -22.88049188
                ]
            },
            "properties":{
                "estacao":"Del Castilho",
                "sigla":"DEL",
                "ramal":"Belford Roxo",
                "latitude":"-22.88049188",
                "longitude":"-43.26984931",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"10.004",
                "endereco":"Avenida Suburbana 3.600",
                "cep":"20771-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.38351664,
                    -22.85490865
                ]
            },
            "properties":{
                "estacao":"Deodoro",
                "sigla":"DEO",
                "ramal":"Deodoro",
                "latitude":"-22.85490865",
                "longitude":"-43.38351664",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"22.058",
                "endereco":"Avenida Duque de Caxias s/n",
                "cep":"21615-220"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30948981,
                    -22.78724515
                ]
            },
            "properties":{
                "estacao":"Duque de Caxias",
                "sigla":"DCX",
                "ramal":"Saracuruna",
                "latitude":"-22.78724515",
                "longitude":"-43.30948981",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"19.176",
                "endereco":"Avenida Presidente Vargas s/n",
                "cep":"25070-330"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.4227037,
                    -22.79618332
                ]
            },
            "properties":{
                "estacao":"Edson Passos",
                "sigla":"EPS",
                "ramal":"Japeri",
                "latitude":"-22.79618332",
                "longitude":"-43.4227037",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"30.39",
                "endereco":"Avenida Getúlio de Moura s/n",
                "cep":"26240-040"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.60619524,
                    -22.67859647
                ]
            },
            "properties":{
                "estacao":"Engenheiro Pedreira",
                "sigla":"EPA",
                "ramal":"Japeri",
                "latitude":"-22.67859647",
                "longitude":"-43.60619524",
                "nomeantigo":"",
                "bicicletario":"1",
                "km":"54.92",
                "endereco":"Avenida das Nações s/n",
                "cep":"26373-320"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26999172,
                    -22.90318776
                ]
            },
            "properties":{
                "estacao":"Engenho Novo",
                "sigla":"ENO",
                "ramal":"Deodoro",
                "latitude":"-22.90318776",
                "longitude":"-43.26999172",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"8.863",
                "endereco":"Rua Vinte e Quatro de Maio s/n",
                "cep":"20725-001"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.29444054,
                    -22.89555781
                ]
            },
            "properties":{
                "estacao":"Engenho de Dentro",
                "sigla":"EDO",
                "ramal":"Deodoro",
                "latitude":"-22.89555781",
                "longitude":"-43.29444054",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"11.398",
                "endereco":"Rua Arquias Cordeiro s/n",
                "cep":"20770-001"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.18444693,
                    -22.58876582
                ]
            },
            "properties":{
                "estacao":"Fragoso",
                "sigla":"FRA",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.58876582",
                "longitude":"-43.18444693",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"47.456",
                "endereco":"Rua Victor Tinoco s/n",
                "cep":"25900-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30423811,
                    -22.75167814
                ]
            },
            "properties":{
                "estacao":"Gramacho",
                "sigla":"GRM",
                "ramal":"Saracuruna",
                "latitude":"-22.75167814",
                "longitude":"-43.30423811",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"23.238",
                "endereco":"Avenida Presidente Kennedy s/n",
                "cep":"25036-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -42.97753906,
                    -22.51995465
                ]
            },
            "properties":{
                "estacao":"Guapimirim",
                "sigla":"GPM",
                "ramal":"Guapimirim",
                "latitude":"-22.51995465",
                "longitude":"-42.97753906",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"74.521",
                "endereco":"Rua Prof Rocha Faria s/n",
                "cep":"25946-079"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.45594853,
                    -22.8752604
                ]
            },
            "properties":{
                "estacao":"Guilherme da Silveira",
                "sigla":"GSA",
                "ramal":"Santa Cruz",
                "latitude":"-22.8752604",
                "longitude":"-43.45594853",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"30.196",
                "endereco":"Rua Coronel Tamarindo s/n",
                "cep":"21840-440"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.35723218,
                    -22.8496366
                ]
            },
            "properties":{
                "estacao":"Honório Gurgel",
                "sigla":"HON",
                "ramal":"Belford Roxo",
                "latitude":"-22.8496366",
                "longitude":"-43.35723218",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"21.481",
                "endereco":"Rua das Safiras s/n",
                "cep":"21511-380"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.21962989,
                    -22.64217902
                ]
            },
            "properties":{
                "estacao":"Imbariê",
                "sigla":"IMB",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.64217902",
                "longitude":"-43.21962989",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"39.281",
                "endereco":"Rua Coronel Sisson s/n",
                "cep":"25275-440"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.5957031,
                    -22.90918372
                ]
            },
            "properties":{
                "estacao":"Inhoaíba",
                "sigla":"IBA",
                "ramal":"Santa Cruz",
                "latitude":"-22.90918372",
                "longitude":"-43.5957031",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"45.328",
                "endereco":"Rua Campo Grande s/n",
                "cep":"23063-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.06625322,
                    -22.65312954
                ]
            },
            "properties":{
                "estacao":"Iriri",
                "sigla":"IRI",
                "ramal":"Guapimirim",
                "latitude":"-22.65312954",
                "longitude":"-43.06625322",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"54.931",
                "endereco":"Rua Cantagalo s/n",
                "cep":"25900-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.27204644,
                    -22.86156034
                ]
            },
            "properties":{
                "estacao":"Itararé",
                "sigla":"IRE",
                "ramal":"Teleférico A",
                "latitude":"-22.86156034",
                "longitude":"-43.27204644",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"2.397",
                "endereco":"Estrada do Itararé / Rua Nova s/n",
                "cep":"21061-240"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.25504159,
                    -22.88422866
                ]
            },
            "properties":{
                "estacao":"Jacarezinho",
                "sigla":"JAR",
                "ramal":"Belford Roxo",
                "latitude":"-22.88422866",
                "longitude":"-43.25504159",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"8.24",
                "endereco":"Rua Comandante Gracindo de Sá 22",
                "cep":"20972-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.65298138,
                    -22.64461386
                ]
            },
            "properties":{
                "estacao":"Japeri",
                "sigla":"JRI",
                "ramal":"Japeri",
                "latitude":"-22.64461386",
                "longitude":"-43.65298138",
                "nomeantigo":"",
                "bicicletario":"1",
                "km":"61.749",
                "endereco":"Rua Lenir Ferreira s/n",
                "cep":"26375-520"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -42.99505322,
                    -22.56264403
                ]
            },
            "properties":{
                "estacao":"Jardim Guapimirim",
                "sigla":"CPM",
                "ramal":"Guapimirim",
                "latitude":"-22.56264403",
                "longitude":"-42.99505322",
                "nomeantigo":"Parada Capim",
                "bicicletario":"0",
                "km":"69.411",
                "endereco":"Rua H s/n",
                "cep":"25943-410"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.03031613,
                    -22.63592073
                ]
            },
            "properties":{
                "estacao":"Jardim Nova Marília",
                "sigla":"NMA",
                "ramal":"Guapimirim",
                "latitude":"-22.63592073",
                "longitude":"-43.03031613",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"60.131",
                "endereco":"Estrada Adam Blummer s/n",
                "cep":"25908-683"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26245293,
                    -22.69030856
                ]
            },
            "properties":{
                "estacao":"Jardim Primavera",
                "sigla":"JPR",
                "ramal":"Saracuruna",
                "latitude":"-22.69030856",
                "longitude":"-43.26245293",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"31.8",
                "endereco":"Avenida Marquês de Baependi s/n",
                "cep":"25211-450"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.02486269,
                    -22.60533239
                ]
            },
            "properties":{
                "estacao":"Jororó",
                "sigla":"JRO",
                "ramal":"Guapimirim",
                "latitude":"-22.60533239",
                "longitude":"-43.02486269",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"63.831",
                "endereco":"Rua Sem Nome s/n",
                "cep":"25940-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.70428466,
                    -22.62191324
                ]
            },
            "properties":{
                "estacao":"Lages",
                "sigla":"LAJ",
                "ramal":"Japeri",
                "latitude":"-22.62191324",
                "longitude":"-43.70428466",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"67.885",
                "endereco":"Rua Anibal Cardoso s/n",
                "cep":"26600-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.33658139,
                    -22.8773125
                ]
            },
            "properties":{
                "estacao":"Madureira",
                "sigla":"MAD",
                "ramal":"Deodoro",
                "latitude":"-22.8773125",
                "longitude":"-43.33658139",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"16.68",
                "endereco":"Rua Carolina Machado s/n",
                "cep":"21351-021"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.41326229,
                    -22.86799931
                ]
            },
            "properties":{
                "estacao":"Magalhães Bastos",
                "sigla":"MGA",
                "ramal":"Santa Cruz",
                "latitude":"-22.86799931",
                "longitude":"-43.41326229",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"25.18",
                "endereco":"Rua São Pedro de Alcântara s/n",
                "cep":"21615-311"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.04215914,
                    -22.65194544
                ]
            },
            "properties":{
                "estacao":"Magé",
                "sigla":"MGE",
                "ramal":"Guapimirim",
                "latitude":"-22.65194544",
                "longitude":"-43.04215914",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"57.471",
                "endereco":"Rua Coronel Macieira s/n",
                "cep":"25900-115"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.251485,
                    -22.87833772
                ]
            },
            "properties":{
                "estacao":"Manguinhos",
                "sigla":"MGS",
                "ramal":"Saracuruna",
                "latitude":"-22.87833772",
                "longitude":"-43.251485",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"6.58",
                "endereco":"Rua Leopoldo Bulhões s/n",
                "cep":"20911-300"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.21046919,
                    -22.63047513
                ]
            },
            "properties":{
                "estacao":"Manoel Belo",
                "sigla":"BEM",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.63047513",
                "longitude":"-43.21046919",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"40.781",
                "endereco":"Rua Coronel Sisson s/n",
                "cep":"25272-250"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.23327398,
                    -22.90933828
                ]
            },
            "properties":{
                "estacao":"Maracanã",
                "sigla":"MAR",
                "ramal":"Deodoro",
                "latitude":"-22.90933828",
                "longitude":"-43.23327398",
                "nomeantigo":"Derby Club",
                "bicicletario":"0",
                "km":"4.238",
                "endereco":"Avenida Presidente Castelo Branco s/n",
                "cep":"20271-130"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.37065899,
                    -22.86097425
                ]
            },
            "properties":{
                "estacao":"Marechal Hermes",
                "sigla":"MHS",
                "ramal":"Deodoro",
                "latitude":"-22.86097425",
                "longitude":"-43.37065899",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"20.502",
                "endereco":"Rua João Vicente s/n",
                "cep":"21331-260"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.42870264,
                    -22.78281393
                ]
            },
            "properties":{
                "estacao":"Mesquita",
                "sigla":"MES",
                "ramal":"Japeri",
                "latitude":"-22.78281393",
                "longitude":"-43.42870264",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"31.952",
                "endereco":"Rua Baronesa de Mesquita s/n",
                "cep":"26235-020"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.23054903,
                    -22.65849761
                ]
            },
            "properties":{
                "estacao":"Morabi",
                "sigla":"MBI",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.65849761",
                "longitude":"-43.23054903",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"36.965",
                "endereco":"Avenida Anhangá 20",
                "cep":"25264-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.27805618,
                    -22.90179617
                ]
            },
            "properties":{
                "estacao":"Méier",
                "sigla":"MER",
                "ramal":"Deodoro",
                "latitude":"-22.90179617",
                "longitude":"-43.27805618",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"9.507",
                "endereco":"Rua Arquias Cordeiro s/n",
                "cep":"20770-001"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.41547012,
                    -22.80809168
                ]
            },
            "properties":{
                "estacao":"Nilópolis",
                "sigla":"NLS",
                "ramal":"Japeri",
                "latitude":"-22.80809168",
                "longitude":"-43.41547012",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"28.724",
                "endereco":"Avenida Governador Roberto Silveira s/n",
                "cep":"26545-770"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.45005667,
                    -22.76067293
                ]
            },
            "properties":{
                "estacao":"Nova Iguaçu",
                "sigla":"NIU",
                "ramal":"Japeri",
                "latitude":"-22.76067293",
                "longitude":"-43.45005667",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"35.349",
                "endereco":"Avenida Marechal Floriano Peixoto s/n",
                "cep":"26210-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26640843,
                    -22.84714982
                ]
            },
            "properties":{
                "estacao":"Olaria",
                "sigla":"OLA",
                "ramal":"Saracuruna",
                "latitude":"-22.84714982",
                "longitude":"-43.26640843",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"10.342",
                "endereco":"Rua Etelvina s/n",
                "cep":"21060-020"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.41002904,
                    -22.81746495
                ]
            },
            "properties":{
                "estacao":"Olinda",
                "sigla":"OLI",
                "ramal":"Japeri",
                "latitude":"-22.81746495",
                "longitude":"-43.41002904",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"27.718",
                "endereco":"Avenida Governador Roberto Silveira s/n",
                "cep":"26545-770"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.34983332,
                    -22.86937822
                ]
            },
            "properties":{
                "estacao":"Oswaldo Cruz",
                "sigla":"OCZ",
                "ramal":"Deodoro",
                "latitude":"-22.86937822",
                "longitude":"-43.34983332",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"18.099",
                "endereco":"Rua João Vicente s/n",
                "cep":"21340-021"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.63242443,
                    -22.91630983
                ]
            },
            "properties":{
                "estacao":"Paciência",
                "sigla":"PAC",
                "ramal":"Santa Cruz",
                "latitude":"-22.91630983",
                "longitude":"-43.63242443",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"49.283",
                "endereco":"Estrada da Urucânia s/n",
                "cep":"23580-240"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.44742978,
                    -22.87518483
                ]
            },
            "properties":{
                "estacao":"Padre Miguel",
                "sigla":"PML",
                "ramal":"Santa Cruz",
                "latitude":"-22.87518483",
                "longitude":"-43.44742978",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"29.248",
                "endereco":"Rua Coronel Tamarindo s/n",
                "cep":"21870-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.28149423,
                    -22.86294946
                ]
            },
            "properties":{
                "estacao":"Palmeiras",
                "sigla":"PMS",
                "ramal":"Teleférico A",
                "latitude":"-22.86294946",
                "longitude":"-43.28149423",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"3.326",
                "endereco":"Rua Aristóteles dos Santos / Rua Augusto Borborema s/n",
                "cep":"20766-195"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.71072231,
                    -22.61092202
                ]
            },
            "properties":{
                "estacao":"Paracambi",
                "sigla":"PBI",
                "ramal":"Japeri",
                "latitude":"-22.61092202",
                "longitude":"-43.71072231",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"69.776",
                "endereco":"Rua Ministro Sebastião Lacerda s/n",
                "cep":"26600-001"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.2024352,
                    -22.62070983
                ]
            },
            "properties":{
                "estacao":"Parada Angélica",
                "sigla":"PAG",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.62070983",
                "longitude":"-43.2024352",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"42.23",
                "endereco":"Rua Coronel Sisson s/n",
                "cep":"25272-210"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -42.98217031,
                    -22.53681406
                ]
            },
            "properties":{
                "estacao":"Parada Bananal",
                "sigla":"BNL",
                "ramal":"Guapimirim",
                "latitude":"-22.53681406",
                "longitude":"-42.98217031",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"72.581",
                "endereco":"Rua Claudionor Batista s/n",
                "cep":"25946-334"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.00510648,
                    -22.5794
                ]
            },
            "properties":{
                "estacao":"Parada Ideal",
                "sigla":"IDL",
                "ramal":"Guapimirim",
                "latitude":"-22.5794",
                "longitude":"-43.00510648",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"67.281",
                "endereco":"Rua Sem Nome s/n",
                "cep":"25940-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -42.98544131,
                    -22.5465768
                ]
            },
            "properties":{
                "estacao":"Parada Modelo",
                "sigla":"MDO",
                "ramal":"Guapimirim",
                "latitude":"-22.5465768",
                "longitude":"-42.98544131",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"71.541",
                "endereco":"Rua João Nogueira da Silva s/n",
                "cep":"25943-554"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30076628,
                    -22.81627239
                ]
            },
            "properties":{
                "estacao":"Parada de Lucas",
                "sigla":"LUC",
                "ramal":"Saracuruna",
                "latitude":"-22.81627239",
                "longitude":"-43.30076628",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"15.547",
                "endereco":"Rua Bulhões Marcial s/n",
                "cep":"21215-370"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.20821392,
                    -22.65027338
                ]
            },
            "properties":{
                "estacao":"Parque Estrela",
                "sigla":"PEA",
                "ramal":"Guapimirim",
                "latitude":"-22.65027338",
                "longitude":"-43.20821392",
                "nomeantigo":"Meia Noite",
                "bicicletario":"0",
                "km":"39.151",
                "endereco":"Estrada União Indústria s/n",
                "cep":"25275-440"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.36804393,
                    -22.80476289
                ]
            },
            "properties":{
                "estacao":"Pavuna/São João de Meriti",
                "sigla":"PVN",
                "ramal":"Belford Roxo",
                "latitude":"-22.80476289",
                "longitude":"-43.36804393",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"27.002",
                "endereco":"Rua Nossa Senhora das Graças 13",
                "cep":"25515-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.27855099,
                    -22.84029818
                ]
            },
            "properties":{
                "estacao":"Penha",
                "sigla":"PEN",
                "ramal":"Saracuruna",
                "latitude":"-22.84029818",
                "longitude":"-43.27855099",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"11.94",
                "endereco":"Rua José Maurício s/n",
                "cep":"21070-150"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.28531762,
                    -22.83637389
                ]
            },
            "properties":{
                "estacao":"Penha Circular",
                "sigla":"PCR",
                "ramal":"Saracuruna",
                "latitude":"-22.83637389",
                "longitude":"-43.28531762",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"12.67",
                "endereco":"Avenida Lobo Junior s/n",
                "cep":"21020-121"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.17957579,
                    -22.60930108
                ]
            },
            "properties":{
                "estacao":"Piabetá",
                "sigla":"PIA",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.60930108",
                "longitude":"-43.17957579",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"44.964",
                "endereco":"Rua Prefeito Olivio de Matos s/n",
                "cep":"25935-750"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30960487,
                    -22.89049136
                ]
            },
            "properties":{
                "estacao":"Piedade",
                "sigla":"PIE",
                "ramal":"Deodoro",
                "latitude":"-22.89049136",
                "longitude":"-43.30960487",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"13.121",
                "endereco":"Rua Manoel Vitorino s/n",
                "cep":"20740-280"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.29219938,
                    -22.88059801
                ]
            },
            "properties":{
                "estacao":"Pilares",
                "sigla":"PLA",
                "ramal":"Belford Roxo",
                "latitude":"-22.88059801",
                "longitude":"-43.29219938",
                "nomeantigo":"Cintra Vidal",
                "bicicletario":"0",
                "km":"12.372",
                "endereco":"Rua Turi s/n",
                "cep":"20771-010"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.21298828,
                    -22.91002694
                ]
            },
            "properties":{
                "estacao":"Praça da Bandeira",
                "sigla":"PBA",
                "ramal":"Deodoro",
                "latitude":"-22.91002694",
                "longitude":"-43.21298828",
                "nomeantigo":"Lauro Muller",
                "bicicletario":"0",
                "km":"2.36",
                "endereco":"Praça da Bandeira s/n",
                "cep":"20270-150"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.43397412,
                    -22.77094136
                ]
            },
            "properties":{
                "estacao":"Presidente Juscelino",
                "sigla":"JUS",
                "ramal":"Japeri",
                "latitude":"-22.77094136",
                "longitude":"-43.43397412",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"33.45",
                "endereco":"Rua Feliciano Sodré s/n",
                "cep":"26250-480"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.55592462,
                    -22.71614807
                ]
            },
            "properties":{
                "estacao":"Queimados",
                "sigla":"QMO",
                "ramal":"Japeri",
                "latitude":"-22.71614807",
                "longitude":"-43.55592462",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"48.297",
                "endereco":"Rua Doutor Elóy Teixeira s/n",
                "cep":"26391-010"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.32118032,
                    -22.88852453
                ]
            },
            "properties":{
                "estacao":"Quintino",
                "sigla":"QTO",
                "ramal":"Deodoro",
                "latitude":"-22.88852453",
                "longitude":"-43.32118032",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"14.357",
                "endereco":"Rua Nerval de Gouveia s/n",
                "cep":"21311-110"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.2596545,
                    -22.85577367
                ]
            },
            "properties":{
                "estacao":"Ramos",
                "sigla":"RMS",
                "ramal":"Saracuruna",
                "latitude":"-22.85577367",
                "longitude":"-43.2596545",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"9.288",
                "endereco":"Rua Uranos s/n",
                "cep":"21090-070"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.42862647,
                    -22.87479967
                ]
            },
            "properties":{
                "estacao":"Realengo",
                "sigla":"REA",
                "ramal":"Santa Cruz",
                "latitude":"-22.87479967",
                "longitude":"-43.42862647",
                "nomeantigo":"",
                "bicicletario":"1",
                "km":"27.395",
                "endereco":"Praça Campo de Marte s/n",
                "cep":"21710-270"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.25639298,
                    -22.90158796
                ]
            },
            "properties":{
                "estacao":"Riachuelo",
                "sigla":"RIA",
                "ramal":"Deodoro",
                "latitude":"-22.90158796",
                "longitude":"-43.25639298",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"7.07",
                "endereco":"Rua Ana Neri s/n",
                "cep":"20960-002"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.3981569,
                    -22.83938683
                ]
            },
            "properties":{
                "estacao":"Ricardo de Albuquerque",
                "sigla":"RIC",
                "ramal":"Japeri",
                "latitude":"-22.83938683",
                "longitude":"-43.3981569",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"24.454",
                "endereco":"Avenida Nazaré s/n",
                "cep":"21640-010"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.35167652,
                    -22.85476201
                ]
            },
            "properties":{
                "estacao":"Rocha Miranda",
                "sigla":"RMA",
                "ramal":"Belford Roxo",
                "latitude":"-22.85476201",
                "longitude":"-43.35167652",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"20.66",
                "endereco":"Rua Conselheiro Galvão s/n",
                "cep":"21540-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.26178964,
                    -22.90194501
                ]
            },
            "properties":{
                "estacao":"Sampaio",
                "sigla":"SPO",
                "ramal":"Deodoro",
                "latitude":"-22.90194501",
                "longitude":"-43.26178964",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"7.742",
                "endereco":"Rua Vinte e Quatro de Maio s/n",
                "cep":"20725-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.68472511,
                    -22.9159342
                ]
            },
            "properties":{
                "estacao":"Santa Cruz",
                "sigla":"SCZ",
                "ramal":"Santa Cruz",
                "latitude":"-22.9159342",
                "longitude":"-43.68472511",
                "nomeantigo":"",
                "bicicletario":"1",
                "km":"54.774",
                "endereco":"Rua Dom João VI s/n",
                "cep":"23570-230"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.5110709,
                    -22.87938262
                ]
            },
            "properties":{
                "estacao":"Santíssimo",
                "sigla":"STO",
                "ramal":"Santa Cruz",
                "latitude":"-22.87938262",
                "longitude":"-43.5110709",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"35.883",
                "endereco":"Rua Annes Dias s/n",
                "cep":"23094-010"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.24719957,
                    -22.67780503
                ]
            },
            "properties":{
                "estacao":"Saracuruna",
                "sigla":"SAR",
                "ramal":"Saracuruna",
                "latitude":"-22.67780503",
                "longitude":"-43.24719957",
                "nomeantigo":"",
                "bicicletario":"1",
                "km":"34.021",
                "endereco":"Avenida Nelson Mauro s/n",
                "cep":"25211-160"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.48718913,
                    -22.87585029
                ]
            },
            "properties":{
                "estacao":"Senador Camará",
                "sigla":"SEN",
                "ramal":"Santa Cruz",
                "latitude":"-22.87585029",
                "longitude":"-43.48718913",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"33.229",
                "endereco":"Rua Coronel Tamarindo s/n",
                "cep":"21840-700"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.27560406,
                    -22.90394565
                ]
            },
            "properties":{
                "estacao":"Silva Freire",
                "sigla":"SFE",
                "ramal":"Deodoro",
                "latitude":"-22.90394565",
                "longitude":"-43.27560406",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"9.207",
                "endereco":"Rua 24 de Maio s/n",
                "cep":"20710-030"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.12897237,
                    -22.66298945
                ]
            },
            "properties":{
                "estacao":"Surui",
                "sigla":"SRI",
                "ramal":"Guapimirim",
                "latitude":"-22.66298945",
                "longitude":"-43.12897237",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"47.841",
                "endereco":"Rua Capitão José de Paula s/n",
                "cep":"25922-440"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.22300634,
                    -22.90983717
                ]
            },
            "properties":{
                "estacao":"São Cristóvão",
                "sigla":"SCO",
                "ramal":"Deodoro",
                "latitude":"-22.90983717",
                "longitude":"-43.22300634",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"3.46",
                "endereco":"Avenida Bartolomeu de Gusmão s/n",
                "cep":"20941-160"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.24481115,
                    -22.90234709
                ]
            },
            "properties":{
                "estacao":"São Francisco Xavier",
                "sigla":"SFX",
                "ramal":"Deodoro",
                "latitude":"-22.90234709",
                "longitude":"-43.24481115",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"5.88",
                "endereco":"Rua Vinte e Quatro de Maio s/n",
                "cep":"20950-090"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.6494616,
                    -22.91891418
                ]
            },
            "properties":{
                "estacao":"Tancredo Neves",
                "sigla":"TNS",
                "ramal":"Santa Cruz",
                "latitude":"-22.91891418",
                "longitude":"-43.6494616",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"50.95",
                "endereco":"Estrada da Urucânia s/n",
                "cep":"23570-290"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30402244,
                    -22.86902571
                ]
            },
            "properties":{
                "estacao":"Tomás Coelho",
                "sigla":"TOM",
                "ramal":"Belford Roxo",
                "latitude":"-22.86902571",
                "longitude":"-43.30402244",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"14.45",
                "endereco":"Rua MoaciRuade Almeida 68",
                "cep":"20750-340"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.24413659,
                    -22.89677514
                ]
            },
            "properties":{
                "estacao":"Triagem",
                "sigla":"TRI",
                "ramal":"Saracuruna",
                "latitude":"-22.89677514",
                "longitude":"-43.24413659",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"5.65",
                "endereco":"Rua Francisco Manoel s/n",
                "cep":"20911-270"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.30542913,
                    -22.80565025
                ]
            },
            "properties":{
                "estacao":"Vigário Geral",
                "sigla":"VGL",
                "ramal":"Saracuruna",
                "latitude":"-22.80565025",
                "longitude":"-43.30542913",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"16.952",
                "endereco":"Rua Bulhões Marcial s/n",
                "cep":"21215-370"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.18484303,
                    -22.57145329
                ]
            },
            "properties":{
                "estacao":"Vila Inhomirim",
                "sigla":"VIN",
                "ramal":"Vila Inhomirim",
                "latitude":"-22.57145329",
                "longitude":"-43.18484303",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"49.37",
                "endereco":"Estrada União Indústria s/n",
                "cep":"25900-000"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.40220459,
                    -22.86273998
                ]
            },
            "properties":{
                "estacao":"Vila Militar",
                "sigla":"VMR",
                "ramal":"Santa Cruz",
                "latitude":"-22.86273998",
                "longitude":"-43.40220459",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"24.264",
                "endereco":"Rua São Pedro de Alcântara s/n",
                "cep":"21615-310"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -43.37530791,
                    -22.79406425
                ]
            },
            "properties":{
                "estacao":"Vila Rosali",
                "sigla":"VRO",
                "ramal":"Belford Roxo",
                "latitude":"-22.79406425",
                "longitude":"-43.37530791",
                "nomeantigo":"",
                "bicicletario":"0",
                "km":"28.63",
                "endereco":"Rua Manoel Correa s/n",
                "cep":"25510-220"
            }
        }
    ]
}

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
        let station = SUPERVIA_STATIONS.features.find( station => returnStationById(station, message.STOP_CODE) )

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