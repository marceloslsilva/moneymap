mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2Vsb2xtc2lsdmEiLCJhIjoiY2t3cGRtdnMyMDhsazJvcnR2M2Ric282eSJ9.uus1HR47tEE_5vKGMtp42A';

const bounds = [
    [-8.456726320510029, 41.4390806769551 ], // Southwest coordinates
    [-8.246665316394639, 41.53343534603719 ] // Northeast coordinates
    ];
    const features = [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-8.344809019151334, 41.485499753508215]
        },
        properties: {
            title: 'Capitulo I - Lameira',
            description: 'Washington, D.C.', 
        }, 
        popInfo: {
            text: 'Em que ano foi inaugurado o mercado?',
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-8.343955987470581, 41.484559912231994 ]
        },
        properties: {
            title: 'Capitulo I - Parque',
            description: 'San Francisco, California', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres', 
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-8.341913231412763,41.48239058501657 ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-8.340812562670624,41.4831908987967 ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.340016408680805, 41.48541487079501 ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.337825483180957,41.48719739322971  ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.33683586438669, 41.48862578531892  ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: 2021
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [  -8.33838894023122 ,41.49037217355764 ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-8.34121153858511 ,41.490635378857014  ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.34426399373977, 41.48879366302535  ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado1',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.345219233149512, 41.487856808283716  ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.344005848532618, 41.48703473933321  ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-8.342495627208907, 41.4877731613393    ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [ -8.34206662818974,41.48600402451866     ]
        },
        properties: {
            title: 'Capitulo I - Antigo Mercado',
            description: 'Washington, D.C.', 
        },
        popInfo: {
            text: 'Titulo que podes por o que quiseres',
            correctCode: false,
            pin: "ss"
        }
    }
    ];

    let corrects = 0;

    const geojson = {
        'type': 'FeatureCollection',
        'features': features
    };

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-8.343761517816915, 41.49288974676266 ],
    zoom: 14,
    maxBounds: bounds ,
    minZoom: 13.5,

    antialias: true
});

map.on('load', () => {
    // Load an image from an external URL.
 
     
    // Add a data source containing one point feature.
    map.addSource('point', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {
        'description':
        '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
        },
    'geometry': {
    'type': 'Point',
    'coordinates': [-8.342245341059972,41.487817992240934]
    }
    }
    ]
    }
    });
     
    // Add a layer to use the image to represent the data.
    map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'point', 
    'minzoom': 16,// reference the data source
    'layout': {
    'icon-image': 'cat', // reference the image
    'icon-size': 0.4,
    'icon-allow-overlap': true,
    
    
   
    }
    });

    map.on('click', 'points', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
         
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
         
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
        });
         
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'point', () => {
        map.getCanvas().style.cursor = 'pointer';
        });
         
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'point', () => {
        map.getCanvas().style.cursor = '';
        });
    }
    );
    

        let count = 0;
        // add markers to map
        for (const feature of geojson.features) {
            // create a HTML element for each feature
            try {
                const el = document.createElement('div');
                el.className = 'marker';
                el.setAttribute("id", `marker_${count}`);
                el.setAttribute("p", count);
        
                // make a marker for each feature and add it to the map   
                new mapboxgl.Marker(el)
                    .setLngLat(feature.geometry.coordinates)
                    .addTo(map);
                
                
            } catch (error) {
                console.log("error", error)
            }
            count++; // este contador vai nos primitir saber qual é a posição da coordenada no array de features.
        }
        
        // removi o click para fora
        map.on("click", function(e) {
            e.preventDefault();
            const posicaoElemento = parseInt(document.getElementById(e.originalEvent.target.id).getAttribute('p'));
        
            if (features[posicaoElemento].popInfo.correctCode) {
                return;
            }
        
            // a popup so deve criada quando precisa mos dela.
            new mapboxgl.Popup()
                .setLngLat(features[posicaoElemento].geometry.coordinates)
                .setHTML(`<div style='' id='marker' posicao ='${posicaoElemento}'> 
                            <div id="maker-inside">
                            <br><div id='taipas'><p><h1 id='tit'> CALDAS DAS TAIPAS </h1></p>
                             <p><h4 id='capitulo'>${features[posicaoElemento].properties.title}</h4></p><br><p id='capitulo'>Usa o mapa e a DICA para encontrares o <strong>código segreto</strong>, digite os números e se acertares passa para próximo ponto.</p>
                             <div id='dica'><p><strong>Dica:</strong></p><p>${features[posicaoElemento].popInfo.text}</p></div>
                                <h4 id='dica'>Código Secreto</h4> <input id='user-input-pin' type='text' />
                                <input  id='submitbtn' type='submit'/>
                            </div>
                            <div id='pin-answer'></div>
                        </div > `)
                .addTo(map);
        
            
            document.getElementById("submitbtn").addEventListener('click', function() {
                let userPin = document.getElementById("user-input-pin").value;
                
                if (features[posicaoElemento].popInfo.pin == userPin) {
                    document.getElementById("pin-answer").innerHTML = "Pin Valido";
                    document.getElementById("pin-answer").style.color = "green";
                    document.getElementById("maker-inside").remove();
                    pinValido(posicaoElemento); // aqui vamos para a função que é responsavel por enviar o utilizador para o proximo ponto.
                    changeProgressBar();
                    document.getElementById('marker_' + posicaoElemento).innerHTML = '<p class="marker_correcto">&#10004;<p>';
                    document.getElementById('marker_' + posicaoElemento).classList.remove('marker');
                    features[posicaoElemento].popInfo.correctCode = true;
                } else {
                    document.getElementById("pin-answer").innerHTML = "Pin-inválido";
                    document.getElementById("pin-answer").style.color = "red";
                    document.getElementById("pin-answer").style.fontSize = "20px";
                    document.getElementById("pin-answer").style.fontFamily = "Kingthings";
                }
            })
        
            // esta é a função que envia o cliente para a posição 
            map.flyTo({
                center: [e.lngLat.lng, e.lngLat.lat]
            });
        });
        
        //coordenadas [-8.340594576287888, 41.483945171775744]
        function pinValido(posicaoElemento) {
            let coordenadas = null; 
        
            // vamos buscar a posição do elemento no array
            var elements =  document.getElementsByClassName("mapboxgl-popup");
                elements[0].parentNode.removeChild(elements[0]);
            // Nas duas linhas de cima removemos a popup de introdução do pin.
        
            // Valida mos se existe um proximo elemento
            if (features[(posicaoElemento + 1)]) {
                coordenadas = features[posicaoElemento + 1].geometry.coordinates
            } else { // caso nao exista vamos buscar o anterior
                coordenadas = features[posicaoElemento - 1].geometry.coordinates
            }
            
            map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: coordenadas,
        
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
                zoom: 17,
                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.
                easing: (t) => t,
        
                // this animation is considered essential with respect to prefers-reduced-motion
                essential: true
            });
        }



// create an instance of ScaleControl
let scalebar = new mapboxgl.ScaleControl({
    maxWidth: 180,
    unit: 'metric',
    
    
    
})
map.addControl(new mapboxgl.NavigationControl());
// add the scale to your map
map.addControl(scalebar, 'bottom-right' )

// Initialize the GeolocateControl.
// Initialize the geolocate control.
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
    );
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

