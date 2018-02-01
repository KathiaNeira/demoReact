import * as React from "react";
import * as ReactDOM from "react-dom";

interface State {
    direction?: any;
    directions?:any;
    map?: any;
    marker?: any;
}

const MAP_STYLE = {
    height: '500px',
    width: '100%'
}

const DIRECTION1 = {
    address: 'Lima, Perú',
    position: {
        latitude: -12.0463731,
        longitude: -77.042754
    }
}

const ZOOM = 13;

const KEY = 'AIzaSyDNsN9zpuUNI6CFY2rBcGldDdNbNmQH0Io';

const locations = [
    {lat: -12.0463733, lng: -77.043754},
    {lat: -12.0463733, lng: -77.043754},
    {lat: -12.0468731, lng: -77.047754},
    {lat: -12.0493731, lng: -77.042254},
    {lat: -12.0463733, lng: -77.043754},
    {lat: -12.0468731, lng: -77.047754},
    {lat: -12.0493731, lng: -77.042254},
    {lat: -12.0463733, lng: -77.043754},
    {lat: -12.0468731, lng: -77.047754},
    {lat: -12.0493731, lng: -77.042254},
    {lat: -12.0463733, lng: -77.043754},
    {lat: -12.0468731, lng: -77.047754},
    {lat: -12.0493731, lng: -77.042254},

    {lat: -12.0463723, lng: -77.093754},
    {lat: -12.0468791, lng: -77.047154},
    {lat: -12.0493851, lng: -77.032254},
    {lat: -12.0464791, lng: -77.049754},
    {lat: -12.0464791, lng: -77.049754},

  ]
export class Mapa extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            direction: "Lima",
            map: '',
            marker: ''
        }
    }

    // Despues del montaje del componente pintar el mapa
    componentDidMount(){
        this.initMap();
    }
    
    
    initMap() {
        var map, infowindow,  marker, geocoder;
        this.loadScript(`https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=`, () => {
            // 1: creando el mapa y mostrarlo en el div que tenga "REF"
            map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), { 
                center: {
                    lat: DIRECTION1.position.latitude,
                    lng: DIRECTION1.position.longitude
                },
                zoom: ZOOM
                // zoom: 3,
                // center: {lat: -28.024, lng: 140.887}
            });

            var contentString = 
            `<div class="u-flex">
                <div>
                    <img src="http://maytech.com.mx/wp-content/uploads/2014/12/Negocio.png"/>
                </div>
                <div>
                    <p>Mi Título</p>
                    <p>tipo de inmueble</p>
                    <p>S/. 475.6541</p>
                </div>
            </div>`;

            infowindow = new google.maps.InfoWindow({
            content: contentString
            });
            

            // 2: creando el marker
            // marker = new google.maps.Marker({
            //     map: map,
            //     draggable: true,
            //     position: {
            //         lat: DIRECTION1.position.latitude,
            //         lng: DIRECTION1.position.longitude
            //     },
            //     // icon: icon
            // });

            var clusterStyles = [
                {
                  textColor: 'white',
                  url: 'https://icon-icons.com/icons2/1238/PNG/512/blacksquare_83753.png',
                  height: 35,
                  width: 35,
                  minimumClusterSize: 3
                },
               {
                  textColor: 'white',
                  url: 'https://icon-icons.com/icons2/1238/PNG/512/blacksquare_83753.png',
                  height: 50,
                  width: 50,
                  minimumClusterSize:17
                },
               {
                  textColor: 'white',
                  url: 'https://icon-icons.com/icons2/1238/PNG/512/blacksquare_83753.png',
                  height: 60,
                  width: 60,
                  minimumClusterSize: 20
                }
              ];
            
              var mcOptions = {
                gridSize: 50,
                styles: clusterStyles,
                maxZoom: 15
            };

            var labels = '0123456789';
            var markers = locations.map(function(location, i) {
                console.log('labels[i]', labels[i]);
                return new google.maps.Marker({
                    position: location,
                    label: labels[i]
                });
            });
            
            let max = (window as any).MarkerClusterer;
            var markerCluster = new max(map, markers, mcOptions);


            // marker.addListener('click', function() {
            //     infowindow.open(map, marker);
            //   });

            // marker.addListener('click', (function(markers,content,infowindow){ 
                
                //     return function() {
                    //         infowindow.setContent(content);
                    //         infowindow.open(map,markers);
                    //     };
                    // })(marker,content,infowindow)); 
                    
                    console.log('marker', markers);
                    // this.setMarker(map, locations)
             this.setState(function(){
                 return {
                     map: map,
                     marker: marker
                 } 
             })
        });
    }
    
setMarker(map, location){
    var infowindow = new google.maps.InfoWindow()
    for (var i=0; i< locations.length; i++) {
        var lat = locations[i].lat;
        var long = locations[i].lng;
        console.log('lat...', lat);
        console.log('long', long);
        var latlngset = new google.maps.LatLng(lat, long);
        var marker = new google.maps.Marker({
            map: map,
            title: 'título',
            position: latlngset
        });
        map.setCenter(marker.getPosition())
        var content = "Aqui mostrar la informacion del inmueble" +" "+i;
        
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
            console.log('click');
            return function() {
                infowindow.setContent(content);
                infowindow.open(map,marker);
            };
        })(marker,content,infowindow));  
    }
}

    onSubmit(evt) {
        evt.preventDefault();
        console.log('address', this.onChangeDirection(evt));
        var address = this.onChangeDirection(evt);
        this.geocodeAddress(address);
    }

    onChangeDirection(evt) {
        let target = evt.target;
        this.setState(function(prevState) {
            return {
                direction: target.value
            }
        });
        return this.state.direction;
    }

    geocodeAddress(address) {
        var geocoder = new google.maps.Geocoder();
        var marker;
        geocoder.geocode({'address': address}, function handleResults(results, status) {
            if ( status === google.maps.GeocoderStatus.OK) {
                // Actualizamos las coordenadas del mapa
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                console.log('latitude', latitude, 'longitude', longitude);
                console.log(results[0].address_components)
                this.state.map.setCenter(results[0].geometry.location);
                // this.state.marker.setPosition(results[0].geometry.location);
                return
            }

            alert('no se encontró resultados para esta búsqueda');
        }.bind(this));
    }

    // creando el script asíncrono
    loadScript(url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;        
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    };    

    render() {
        return(
            <div>
                <form action="" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" value={this.state.direction} onChange={this.onChangeDirection.bind(this)}/>
                    <button>Buscar</button>
                </form>
                <div id="map" ref="map" style={MAP_STYLE}></div>
            </div>
        )
    }
}