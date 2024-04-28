import  { useState, useEffect } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import Map from './Map';

import mapImage from '../assets/image.png';

const Disaster = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    // Fetch disaster reports from an API
    axios
      .get('http://127.0.0.1:8000/disaster/reports/')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  const defaultCenter = {
    lat: 0,
    lng: 0,
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start mt-10 pt-12">
    <Map center={defaultCenter} zoom={2}>
      {reports.map(report => (
        <Marker
          key={report.id}
          position={{ lat: report.latitude, lng: report.longitude }}
          onClick={() => setSelectedReport(report)}
        />
      ))}
      {selectedReport && (
        <InfoWindow
          position={{ lat: selectedReport.latitude, lng: selectedReport.longitude }}
          onCloseClick={() => setSelectedReport(null)}
        >
          <div>
            <h2>{selectedReport.disaster_type}</h2>
            <p>{selectedReport.details}</p>
          </div>
        </InfoWindow>
      )}
    </Map>
    <img src={mapImage} alt="Map" />
    </div>
  );
};

export default Disaster;