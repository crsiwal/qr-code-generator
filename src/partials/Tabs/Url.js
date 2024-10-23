import { useEffect, useState } from "react";
import { validateURL } from "../../utils/validates";
import { anyText } from "../../utils/inputTextControl";

function TabUrl({ setText, setQrError }) {
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState(false);

  const handleInputUrl = e => {
    const urlText = anyText(e.target.value);
    setUrl(urlText);
    setUrlError(urlText && urlText !== "" ? !validateURL(urlText) : false);
  };

  useEffect(() => {
    setQrError(urlError);
  }, [urlError, setQrError]);

  useEffect(() => {
    setText(!urlError ? url : "");
  }, [url, setText]);

  return (
    <>
      <div>
        <p>Redirect to an existing web URL</p>
        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${urlError ? "is-invalid" : ""}`} placeholder="Enter URL" value={url} onChange={handleInputUrl} />
          <label htmlFor="floatingInput">Enter URL</label>
          <div className="invalid-feedback">Please enter a valid URL.</div>
        </div>
        <small className="text-muted">Try something like https://example.com/</small>
      </div>
    </>
  );
}
export default TabUrl;
