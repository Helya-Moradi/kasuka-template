import './index.css'
import {useRef,useState,useEffect} from "react";
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVseWFtNzgiLCJhIjoiY2xrY2hycDNpMG9rNDNvbzA2em9pbjVuOCJ9.xOJLM5bx6ButgQp3Ph-g7g';
function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker=useRef(null)
    const [lng, setLng] = useState(51.337776);
    const [lat, setLat] = useState(35.699444);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        if(lng && lat){
            const el = document.createElement('div');
            el.innerHTML = `
            <svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" />
                <circle cx="192" cy="192" r="80" fill="#fff" />
            </svg>`;
            el.className = 'markerContainer';

            marker.current = new mapboxgl.Marker(el)
                .setLngLat([lng, lat])
                .addTo(map.current);
        }

    },[mapContainer]);

    return <div>
        <div ref={mapContainer} className="map" />
    </div>;
}

export default Map;