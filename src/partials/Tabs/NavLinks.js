import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAt, faKeyboard, faLink, faListOl, faLocation, faMessage, faMobile, faPhone, faWifi } from "@fortawesome/free-solid-svg-icons";

const linkData = [
  { eventKey: "url", label: "URL", icon: faLink },
  // { eventKey: "multi-url", label: "Multi-URL", icon: faListOl },
  { eventKey: "contact", label: "Contact", icon: faAddressCard },
  { eventKey: "text", label: "Text", icon: faKeyboard },
  { eventKey: "app", label: "App", icon: faMobile },
  { eventKey: "wifi", label: "Wi-Fi", icon: faWifi },
  { eventKey: "phone", label: "Phone", icon: faPhone },
  { eventKey: "sms", label: "SMS", icon: faMessage },
  { eventKey: "email", label: "Email", icon: faAt },
  { eventKey: "location", label: "Location", icon: faLocation },
];

const NavLinks = () => {
  return (
    <Nav variant="underline" justify={true}>
      {linkData.map(({ eventKey, label, icon }) => (
        <Nav.Item key={eventKey}>
          <Nav.Link className="text-dark" eventKey={eventKey}>
            <div className="fs-5 mb-1">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="text-muted">{label}</div>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavLinks;
