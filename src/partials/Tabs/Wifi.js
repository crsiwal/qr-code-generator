import { useEffect, useState } from "react";
import { anyText, numericText } from "../../utils/inputTextControl";

function TabWifi({ text, setText, setQrError }) {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryptionType, setEncryptionType] = useState("WPA"); // Default value

  const encryptionOptions = [
    { value: "WPA", label: "WPA" },
    { value: "WPA2", label: "WPA2" },
    { value: "WPA3", label: "WPA3" },
    { value: "WEP", label: "WEP" },
    { value: "nopass", label: "No Encryption" },
  ];

  useEffect(() => {
    if (encryptionType && ssid) {
      if (encryptionType !== "nopass" && password === "") {
        setQrError(true);
      } else {
        setQrError(false);
        const wifiString = `WIFI:S:${ssid};T:${encryptionType};P:${password};;`;
        setText(wifiString);
      }
    } else {
      setQrError(true);
    }
  }, [ssid, password, encryptionType, setText]);

  return (
    <>
      <div>
        <p>Easily generate a QR code for share WiFi access by entering your network credentials.</p>

        <div class="form-floating">
          <select id="formEncryptionType" value={encryptionType} class="form-select" onChange={e => setEncryptionType(e.target.value)}>
            <option disabled>Select Encryption Type</option>
            {encryptionOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label for="formEncryptionType">Encryption Type</label>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Enter your WiFi SSID" value={ssid} onChange={e => setSsid(anyText(e.target.value, 64))} />
          <label htmlFor="floatingInput">WiFi SSID</label>
          <div className="invalid-feedback">Please enter a valid Wifi SSID</div>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Enter your WiFi Password" value={password} onChange={e => setPassword(anyText(e.target.value, 128))} disabled={encryptionType === "nopass"} />
          <label htmlFor="floatingInput">WiFi Password</label>
        </div>
      </div>
    </>
  );
}
export default TabWifi;
