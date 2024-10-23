import { useEffect, useState } from "react";
import { validateAltitude, validateLatitude, validateLongitude, validateURL } from "../../utils/validates";
import { floatText } from "../../utils/inputTextControl";

function TabLocation({ setText, setQrError }) {
  const [latitude, setLatitude] = useState("");
  const [latitudeError, setLatitudeError] = useState("");
  const [longitude, setLongitude] = useState("");
  const [longitudeError, setLongitudeError] = useState("");
  const [altitude, setAltitude] = useState("");
  const [altitudeError, setAltitudeError] = useState("");

  const handleInputLocationString = input => {
    // Split the input by comma and trim spaces
    const coordinates = input.split(",").map(coord => coord.trim());
    if (coordinates.length === 2) {
      const lat = parseFloat(coordinates[0]);
      const lon = parseFloat(coordinates[1]);
      // Validate latitude and longitude
      if (validateLatitude(lat) && validateLongitude(lon)) {
        setLatitude(lat);
        setLongitude(lon);
        return true;
      }
    }
    return false;
  };

  const handleLatitude = e => {
    if (!handleInputLocationString(e.target.value)) {
      const value = floatText(e.target.value);
      setLatitude(value);
    }
  };

  const handleLongitude = e => {
    if (!handleInputLocationString(e.target.value)) {
      const value = floatText(e.target.value);
      setLongitude(value);
    }
  };

  const handleAltitude = e => {
    const value = floatText(e.target.value);
    setAltitude(value);
  };

  useEffect(() => {
    setQrError(latitudeError || longitudeError || altitudeError);
  }, [latitudeError, longitudeError, altitudeError, setQrError]);

  useEffect(() => {
    /* Validate latitude */
    setLatitudeError(latitude && latitude !== "" ? !validateLatitude(latitude) : false);

    /* Validate longitude */
    setLongitudeError(longitude && longitude !== "" ? !validateLongitude(longitude) : false);

    /* Validate  altitude*/
    setAltitudeError(altitude && altitude !== "" ? !validateAltitude(altitude) : false);

    const newText = latitude && longitude ? (altitude ? `geo:${latitude},${longitude},${altitude}` : `geo:${latitude},${longitude}`) : "";
    setText(!latitudeError && !longitudeError && !altitudeError ? newText : "");
  }, [latitude, longitude, altitude, setText]);

  return (
    <>
      <div>
        <p>Easily Share Your Location with QR Code Scanning for Everyone</p>
        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${latitudeError ? "is-invalid" : ""}`} placeholder="Enter latitude" value={latitude} onChange={handleLatitude} />
          <label htmlFor="floatingInput">Location latitude</label>
          <div className="invalid-feedback">Please enter a valid latitude.</div>
          <small className="text-muted ms-1">eg: 37.7749</small>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${longitudeError ? "is-invalid" : ""}`} placeholder="Enter longitude" value={longitude} onChange={handleLongitude} />
          <label htmlFor="floatingInput">Location latitude</label>
          <div className="invalid-feedback">Please enter a valid latitude.</div>
          <small className="text-muted ms-1">eg: -122.4194</small>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${altitudeError ? "is-invalid" : ""}`} placeholder="Enter altitude" value={altitude} onChange={handleAltitude} />
          <label htmlFor="floatingInput">Location altitude</label>
          <div className="invalid-feedback">Please enter a valid altitude.</div>
          <small className="text-muted ms-1">eg: 16</small>
        </div>
      </div>
    </>
  );
}

export default TabLocation;
