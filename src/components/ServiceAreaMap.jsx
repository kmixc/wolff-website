import React from 'react'
import { MapContainer, TileLayer, Polygon, Marker, Popup, Tooltip, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon missing in CRA builds
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

// Custom pin icon styled to match the site palette
const makePin = (color = '#8F9E8B') =>
    L.divIcon({
        className: '',
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30">
            <path d="M11 0C4.9 0 0 4.9 0 11c0 8.25 11 19 11 19s11-10.75 11-19C22 4.9 17.1 0 11 0z" fill="${color}" opacity="0.9"/>
            <circle cx="11" cy="11" r="4" fill="#FAFAF8" opacity="0.9"/>
        </svg>`,
        iconSize: [22, 30],
        iconAnchor: [11, 30],
        popupAnchor: [0, -32],
    })

const homePin = makePin('#6D7953')   // moss — home base
const townPin = makePin('#8F9E8B')   // lichen — service towns
const farPin = makePin('#4D6664')   // river — extended reach

// Approximate boundary of Wellington County
const wellingtonBoundary = [
    [44.17, -80.75],
    [44.17, -79.90],
    [43.65, -79.90],
    [43.65, -80.35],
    [43.73, -80.55],
    [43.90, -80.75],
]

// Approximate boundary of Peel County (Region of Peel — relevant section)
const peelBoundary = [
    [43.90, -79.90],
    [44.05, -79.90],
    [44.05, -79.60],
    [43.60, -79.60],
    [43.60, -79.90],
    [43.73, -79.90],
]

const towns = [
    { name: 'Orton / Erin', note: 'Home Base', lat: 43.785, lng: -80.065, pin: homePin },
    { name: 'Alton', note: 'Maintenance & Design', lat: 43.870, lng: -80.075, pin: townPin },
    { name: 'Terra Cotta', note: 'Landscaping & Tree Care', lat: 43.760, lng: -79.900, pin: townPin },
    { name: 'Caledon Village', note: 'Full Services', lat: 43.870, lng: -79.950, pin: townPin },
    { name: 'Orangeville', note: 'Full Services', lat: 43.920, lng: -80.095, pin: townPin },
    { name: 'Rockwood', note: 'Full Services', lat: 43.614, lng: -80.148, pin: townPin },
    { name: 'Fergus', note: 'Full Services', lat: 43.706, lng: -80.374, pin: townPin },
    { name: 'Sturgeon Bay', note: 'Tree Care & Removal', lat: 44.820, lng: -79.680, pin: farPin },
]

const wellingtonStyle = { color: '#8FD14F', weight: 2, fillColor: '#8FD14F', fillOpacity: 0.18 }
const peelStyle = { color: '#56CFE1', weight: 2, fillColor: '#56CFE1', fillOpacity: 0.15 }

export default function ServiceAreaMap() {
    return (
        <MapContainer
            center={[43.80, -80.10]}
            zoom={9}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            attributionControl={false}
            zoomControl={false}
        >
            <ZoomControl position="bottomright" />
            {/* ESRI World Imagery — free satellite, no API key required */}
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="Tiles &copy; Esri"
                maxZoom={19}
            />

            {/* County overlays */}
            <Polygon positions={wellingtonBoundary} pathOptions={wellingtonStyle}>
                <Tooltip sticky>Wellington County</Tooltip>
            </Polygon>
            <Polygon positions={peelBoundary} pathOptions={peelStyle}>
                <Tooltip sticky>Region of Peel</Tooltip>
            </Polygon>

            {/* Town markers */}
            {towns.map(t => (
                <Marker key={t.name} position={[t.lat, t.lng]} icon={t.pin}>
                    <Popup>
                        <strong style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.82rem' }}>{t.name}</strong>
                        <br />
                        <span style={{ fontSize: '0.75rem', color: '#5A4E3B' }}>{t.note}</span>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}
