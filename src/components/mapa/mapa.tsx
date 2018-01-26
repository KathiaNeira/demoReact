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
    width: '40%'
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

export class Mapa extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            direction: "Lima",
            map: '',
            marker: ''
        }
        console.log('===>', this.props.location);
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
            
            // var icon = {
            //     path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            //     fillColor: '#FF0000',
            //     fillOpacity: .6,
            //     anchor: new google.maps.Point(0,0),
            //     strokeWeight: 0,
            //     scale: 1
            // }
            // 2: creando el marker
            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                position: {
                    lat: DIRECTION1.position.latitude,
                    lng: DIRECTION1.position.longitude
                },
                // icon: icon
            });
            
            marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
             this.setState(function(){
                 return {
                     map: map,
                     marker: marker
                 } 
             })
        });
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
                this.state.marker.setPosition(results[0].geometry.location);
                return
            }

            alert('no se encontré resultados para esta búsqueda');
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