import { useEffect, useState } from "react";
import { anyText, emailText } from "../../utils/inputTextControl";
import { validateEmail } from "../../utils/validates";

function TabEmail({ setText, setQrError }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = e => {
    const email = emailText(e.target.value, 256);
    setEmail(email);
    setEmailError(email && email !== "" ? !validateEmail(email) : false);
  };

  useEffect(() => {
    setQrError(emailError);
  }, [emailError, setQrError]);

  useEffect(() => {
    setText(!emailError ? `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}` : "");
  }, [email, subject, message, setText]);

  return (
    <>
      <div>
        <p>Link an email address to open the email app ready to go</p>

        <div className="form-floating">
          <input type="text" className={`form-control border-0 border-bottom ${emailError ? "is-invalid" : ""}`} placeholder="Email address" value={email} onChange={handleEmail} />
          <label htmlFor="floatingInput">Email address</label>
          <div className="invalid-feedback">Please enter a valid email address</div>
        </div>

        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Email Subject" value={subject} onChange={e => setSubject(anyText(e.target.value, 512))} />
          <label htmlFor="floatingInput">Email subject</label>
        </div>

        <div className="form-floating mt-3">
          <textarea className="form-control border-0 border-bottom" placeholder="Enter text here" style={{ height: "150px" }} value={message} onChange={e => setMessage(anyText(e.target.value))} />
          <label htmlFor="floatingInput">Add message</label>
        </div>
      </div>
    </>
  );
}
export default TabEmail;
