/* eslint-disable react/prop-types */
// Map.jsx
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map = ({ children, center, zoom }) => (
  <LoadScript googleMapsApiKey={apiKey}>
    <GoogleMap center={center} zoom={zoom}>
      {children}
    </GoogleMap>
  </LoadScript>
);

export default Map;