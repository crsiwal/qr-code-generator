import { useEffect, useState } from "react";
import { phoneText } from "../../utils/inputTextControl";
import { validatePhoneNumber } from "../../utils/validates";

function TabPhone({ setText, setQrError }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handlePhoneNumber = e => {
    const phoneNumber = phoneText(e.target.value, 15);
    setPhoneNumber(phoneNumber);
    setPhoneNumberError(phoneNumber && phoneNumber !== "" ? !validatePhoneNumber(phoneNumber) : false);
  };

  useEffect(() => {
    setQrError(phoneNumberError);
  }, [phoneNumberError, setQrError]);

  useEffect(() => {
    setText(!phoneNumberError ? `tel:${phoneNumber}` : "");
  }, [phoneNumber, setText]);

  return (
    <>
      <div>
        <p>Link a phone number for quick calls</p>
        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${phoneNumberError ? "is-invalid" : ""}`} placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumber} />
          <label htmlFor="floatingInput">Phone number</label>
          <div className="invalid-feedback">Please enter a valid Phone number</div>
        </div>
      </div>
    </>
  );
}
export default TabPhone;
