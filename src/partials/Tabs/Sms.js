import { useEffect, useState } from "react";
import { anyText, numericText } from "../../utils/inputTextControl";
import { handleNoLineBreak } from "../../utils/noLineBreak";

function TabSms({ text, setText, setQrError }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (phoneNumber && message) {
      const newText = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
      setText(newText);
    }
  }, [phoneNumber, message, setText]);

  return (
    <>
      <div>
        <p>Link phone number to send a text message quicker</p>

        <div className="form-floating">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Phone number" value={phoneNumber} onChange={e => setPhoneNumber(numericText(e.target.value, 10))} />
          <label htmlFor="floatingInput">Phone number</label>
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
