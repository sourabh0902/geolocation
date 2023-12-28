import axios from 'axios';
import React from 'react';

const App = () => {

  const handleLocation = async () => {
    navigator.geolocation.getCurrentPosition(async position => {

      const { latitude, longitude } = position.coords;

      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        console.log(response.data.address.city);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    });
  };

  return (
    <div>
      <button onClick={handleLocation}>
        Get Location
      </button>
    </div>
  );
};

export default App;
