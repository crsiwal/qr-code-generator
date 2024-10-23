import { useEffect, useState } from "react";
import { anyText, emailText, numericText, phoneText } from "../../utils/inputTextControl";
import { validateEmail, validatePhoneNumber, validateURL } from "../../utils/validates";

function TabContact({ setText, setQrError }) {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [fax, setFax] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [website, setWebsite] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  const handleEmailAddress = e => {
    const value = emailText(e.target.value, 256);
    setEmail(value);
    setEmailError(value && value !== "" ? !validateEmail(value) : false);
  };

  const handleMobileNumber = e => {
    const value = phoneText(e.target.value, 15);
    setMobileNumber(value);
    setMobileNumberError(value && value !== "" ? !validatePhoneNumber(value) : false);
  };

  const handlePhoneNumber = e => {
    const value = phoneText(e.target.value, 15);
    setPhoneNumber(value);
    setPhoneNumberError(value && value !== "" ? !validatePhoneNumber(value) : false);
  };

  const handleWebsite = e => {
    const value = anyText(e.target.value, 1024);
    setWebsite(value);
    setWebsiteError(value && value !== "" ? !validateURL(value) : false);
  };

  useEffect(() => {
    const newText = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;${prefix}
FN:${firstName} ${lastName}
PREFIX:${prefix}
TITLE:${title}
ORG:${organization}
TEL;other:${phoneNumber}
TEL;mobile:${mobileNumber}
FAX:${fax}
EMAIL:${email}
ADR:;;${street};${city};${region};;${country}
URL:${website}
END:VCARD`;
    setText(newText);
  }, [prefix, firstName, lastName, title, organization, email, mobileNumber, phoneNumber, fax, street, city, region, country, postcode, website, websiteError, setText]);

  useEffect(() => {
    setQrError(emailError || mobileNumberError || phoneNumberError || websiteError);
  }, [emailError, mobileNumberError, phoneNumberError, websiteError, setQrError]);

  return (
    <>
      <div>
        <p>Share contact details easily</p>
        <div className="form-floating">
          <input type="text" className="form-control border-0 border-bottom form-control-sm" placeholder="Prefix" value={prefix} onChange={e => setPrefix(anyText(e.target.value, 5))} />
          <label htmlFor="floatingInput">Prefix</label>
          <small className="ms-1">For e.g.- Mr., Mrs., Dr., etc.</small>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="First Name" value={firstName} onChange={e => setFirstName(anyText(e.target.value, 100))} />
          <label htmlFor="floatingInput">First Name</label>
          <div className="invalid-feedback ms-1">Please enter a valid First Name</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Last Name" value={lastName} onChange={e => setLastName(anyText(e.target.value, 100))} />
          <label htmlFor="floatingInput">Last Name</label>
          <div className="invalid-feedback ms-1">Please enter a valid Last Name</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Title" value={title} onChange={e => setTitle(anyText(e.target.value, 200))} />
          <label htmlFor="floatingInput">Title</label>
          <div className="invalid-feedback ms-1">Please enter a valid Title</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Organization" value={organization} onChange={e => setOrganization(anyText(e.target.value, 100))} />
          <label htmlFor="floatingInput">Organization</label>
          <div className="invalid-feedback ms-1">Please enter a valid Organization</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${emailError && "is-invalid"}`} placeholder="Email address" value={email} onChange={handleEmailAddress} />
          <label htmlFor="floatingInput">Email address</label>
          <div className="invalid-feedback ms-1">Please enter a valid Email address</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${mobileNumberError && "is-invalid"}`} placeholder="Mobile phone number" value={mobileNumber} onChange={handleMobileNumber} />
          <label htmlFor="floatingInput">Mobile phone number</label>
          <div className="invalid-feedback ms-1">Please enter a valid Mobile phone number</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${phoneNumberError && "is-invalid"}`} placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumber} />
          <label htmlFor="floatingInput">Phone number</label>
          <div className="invalid-feedback ms-1">Please enter a valid Phone number</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Fax" value={fax} onChange={e => setFax(phoneText(e.target.value, 15))} />
          <label htmlFor="floatingInput">Fax</label>
          <div className="invalid-feedback ms-1">Please enter a valid Fax</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Street" value={street} onChange={e => setStreet(anyText(e.target.value, 150))} />
          <label htmlFor="floatingInput">Street</label>
          <div className="invalid-feedback ms-1">Please enter a valid Street</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="City" value={city} onChange={e => setCity(anyText(e.target.value, 150))} />
          <label htmlFor="floatingInput">City</label>
          <div className="invalid-feedback ms-1">Please enter a valid City</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Region" value={region} onChange={e => setRegion(anyText(e.target.value, 150))} />
          <label htmlFor="floatingInput">Region</label>
          <div className="invalid-feedback ms-1">Please enter a valid Region</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Country" value={country} onChange={e => setCountry(anyText(e.target.value, 150))} />
          <label htmlFor="floatingInput">Country</label>
          <div className="invalid-feedback ms-1">Please enter a valid Country</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Postcode" value={postcode} onChange={e => setPostcode(numericText(e.target.value, 10))} />
          <label htmlFor="floatingInput">Postcode</label>
          <div className="invalid-feedback ms-1">Please enter a valid Postcode</div>
        </div>
        <div className="form-floating mt-3">
          <input type="text" className={`form-control border-0 border-bottom ${websiteError && "is-invalid"}`} placeholder="Website/URL/Social" value={website} onChange={handleWebsite} />
          <label htmlFor="floatingInput">Website/URL/Social</label>
          <div className="invalid-feedback ms-1">Please enter a valid URL</div>
        </div>
      </div>
    </>
  );
}
export default TabContact;
