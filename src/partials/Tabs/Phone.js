import { useEffect, useState } from "react";
import { numericText } from "../../utils/inputTextControl";

function TabPhone({ text, setText, setQrError }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState("");

  const handleInputPhoneNumber = newText => {
    setPhoneNumber(newText);
    if (newText === "") {
      setValidPhoneNumber(true);
      setQrError(true);
    } else {
      const isValidPhoneNumber = validatePhoneNumber(newText);
      setValidPhoneNumber(isValidPhoneNumber);
      setQrError(!isValidPhoneNumber);
    }
  };

  const validatePhoneNumber = number => {
    const phoneRegex = /^(?:\+?\d{1,3})?[-.\s]?\(?(?:\d{3})?\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // Example regex
    return phoneRegex.test(number);
  };

  useEffect(() => {
    if (validPhoneNumber) {
      const newText = `tel:${phoneNumber}`;
      setText(newText);
    }
  }, [phoneNumber, setText]);

  return (
    <>
      <div>
        <p>Link a phone number for quick calls</p>
        <div className="form-floating">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Phone number" value={phoneNumber} onChange={e => handleInputPhoneNumber(numericText(e.target.value, 15))} />
          <label htmlFor="floatingInput">Phone number</label>
          <div className="invalid-feedback">Please enter a valid Phone number</div>
        </div>
      </div>
    </>
  );
}
export default TabPhone;
