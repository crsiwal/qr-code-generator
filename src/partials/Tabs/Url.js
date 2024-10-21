import { useState } from "react";

function TabUrl({ text, setText, setQrError }) {
  const [validUrl, setValidUrl] = useState(true);

  const handleInputUrl = newText => {
    setText(newText);
    if (newText === "") {
      setValidUrl(true);
      setQrError(true);
    } else {
      const isValidUrl = validateURL(newText);
      setValidUrl(isValidUrl);
      setQrError(!validUrl);
    }
  };

  const validateURL = inputUrl => {
    try {
      new URL(inputUrl);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <>
      <div>
        <p>Redirect to an existing web URL</p>
        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${!validUrl ? "is-invalid" : ""}`} placeholder="Enter URL" value={text} onChange={e => handleInputUrl(e.target.value)} />
          <label htmlFor="floatingInput">Enter URL</label>
          <div className="invalid-feedback">Please enter a valid URL.</div>
        </div>
        <small className="text-muted">Try something like https://example.com/</small>
      </div>
    </>
  );
}
export default TabUrl;
