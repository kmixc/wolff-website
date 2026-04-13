import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip, Circle, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon missing in CRA builds
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const homePin = L.divIcon({
    className: '',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 11.25 15 25 15 25s15-13.75 15-25C30 6.7 23.3 0 15 0z" fill="#6D7953"/>
        <circle cx="15" cy="15" r="6" fill="#FAFAF8" opacity="0.95"/>
    </svg>`,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -44],
})

// Orton/Erin home base coordinates
const HOME = [43.785, -80.065]

// Soft radius circle showing approx service reach (~40km)
const serviceCircleOptions = {
    color: '#8F9E8B',
    weight: 1.5,
    fillColor: '#6D7953',
    fillOpacity: 0.08,
    dashArray: '6 6',
}

export default function ContactMap() {
    return (
        <MapContainer
            center={HOME}
            zoom={12}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
            attributionControl={false}
            zoomControl={false}
        >
            <ZoomControl position="bottomright" />

            {/* ESRI World Imagery satellite */}
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="Tiles &copy; Esri"
                maxZoom={19}
            />

            {/* Soft service area radius */}
            <Circle center={HOME} radius={40000} pathOptions={serviceCircleOptions} />

            {/* Home base marker */}
            <Marker position={HOME} icon={homePin}>
                <Tooltip permanent direction="top" offset={[0, -44]} opacity={1}>
                    <strong style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.82rem', color: '#29292A' }}>
                        WOLFF — Orton / Erin, ON
                    </strong>
                    <br />
                    <span style={{ fontSize: '0.72rem', color: '#6D7953' }}>Serving the Headwaters Region &amp; beyond</span>
                </Tooltip>
            </Marker>
        </MapContainer>
    )
}
