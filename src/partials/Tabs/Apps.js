import { useEffect, useState } from "react";
import { validateURL } from "../../utils/validates";
import { anyText } from "../../utils/inputTextControl";

function TabApps({ setText, setQrError }) {
  const serviceUrl = "https://onelink.gchat.in";
  const [playStore, setPlayStore] = useState("");
  const [playStoreError, setPlayStoreError] = useState("");
  const [appStore, setAppStore] = useState("");
  const [appStoreError, setAppStoreError] = useState("");
  const [otherStore, setOtherStore] = useState("");
  const [otherStoreError, setOtherStoreError] = useState("");

  const handlePlayStoreUrl = e => {
    const urlText = anyText(e.target.value);
    setPlayStore(urlText);
    setPlayStoreError(urlText && urlText !== "" ? !validateURL(urlText) : false);
  };

  const handleAppStoreUrl = e => {
    const urlText = anyText(e.target.value);
    setAppStore(urlText);
    setAppStoreError(urlText && urlText !== "" ? !validateURL(urlText) : false);
  };

  const handleOtherStoreUrl = e => {
    const urlText = anyText(e.target.value);
    setOtherStore(urlText);
    setOtherStoreError(urlText && urlText !== "" ? !validateURL(urlText) : false);
  };

  useEffect(() => {
    setQrError(playStoreError || appStoreError || otherStoreError);
  }, [playStoreError, appStoreError, otherStoreError, setQrError]);

  useEffect(() => {
    const params = JSON.stringify({ p: playStore, a: appStore, u: otherStore });
    setText(`${serviceUrl}?d=${encodeURIComponent(params)}`);
  }, [playStore, appStore, otherStore, setText]);

  return (
    <>
      <div>
        <p>Redirect to app download based on the device OS</p>
        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${playStoreError ? "is-invalid" : ""}`} placeholder="URL for Android" value={playStore} onChange={handlePlayStoreUrl} />
          <label htmlFor="floatingInput">Android App PlayStore URL</label>
          <div className="invalid-feedback">Please enter a valid URL.</div>
          <small className="text-muted ms-1">e.g. https://play.google.com/store/apps/details?id=com.google.android.apps.maps</small>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${appStoreError ? "is-invalid" : ""}`} placeholder="URL for iOS" value={appStore} onChange={handleAppStoreUrl} />
          <label htmlFor="floatingInput">IOS AppStore URL</label>
          <div className="invalid-feedback">Please enter a valid URL.</div>
          <small className="text-muted ms-1">e.g. https://apps.apple.com/us/app/google-maps/id585027354</small>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${otherStoreError ? "is-invalid" : ""}`} placeholder="Enter URL" value={otherStore} onChange={handleOtherStoreUrl} />
          <label htmlFor="floatingInput">URL for other devices *</label>
          <div className="invalid-feedback">Please enter a valid URL.</div>
          <small className="text-muted ms-1">e.g. https://maps.google.com</small>
        </div>
      </div>
    </>
  );
}
export default TabApps;
