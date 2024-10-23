import { useEffect, useState } from "react";
import { anyText, phoneText } from "../../utils/inputTextControl";
import { handleNoLineBreak } from "../../utils/noLineBreak";
import { validatePhoneNumber } from "../../utils/validates";

function TabSms({ setText, setQrError }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [message, setMessage] = useState("");

  const handlePhoneNumber = e => {
    const phoneNumber = phoneText(e.target.value, 15);
    setPhoneNumber(phoneNumber);
    setPhoneNumberError(phoneNumber && phoneNumber !== "" ? !validatePhoneNumber(phoneNumber) : false);
  };

  useEffect(() => {
    setQrError(phoneNumberError);
  }, [phoneNumberError, setQrError]);

  useEffect(() => {
    setText(!phoneNumberError ? `sms:${phoneNumber}?body=${encodeURIComponent(message)}` : "");
  }, [phoneNumber, message, setText]);

  return (
    <>
      <div>
        <p>Link phone number to send a text message quicker</p>

        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${phoneNumberError ? "is-invalid" : ""}`} placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumber} />
          <label htmlFor="floatingInput">Phone number</label>
          <div className="invalid-feedback">Please enter a valid Phone number</div>
        </div>

        <div className="form-floating mt-3">
          <textarea onKeyDown={handleNoLineBreak} className="form-control border-0 border-bottom" placeholder="Enter text here" style={{ height: "150px" }} value={message} onChange={e => setMessage(anyText(e.target.value, 512))} />
          <label htmlFor="floatingInput">Add message</label>
        </div>
      </div>
    </>
  );
}
export default TabSms;
