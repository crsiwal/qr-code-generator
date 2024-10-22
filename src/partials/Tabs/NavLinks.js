import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAt, faKeyboard, faLink, faListOl, faMessage, faMobile, faPhone, faWifi } from "@fortawesome/free-solid-svg-icons";
const NavLinks = () => {
  return (
    <Nav variant="underline" justify={true}>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="url">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div className="text-muted">URL</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="multi-url">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faListOl} />
          </div>
          <div className="text-muted">Multi-URL</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="contact">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <div className="text-muted">Contact</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="text">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faKeyboard} />
          </div>
          <div className="text-muted">Text</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="app">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faMobile} />
          </div>
          <div className="text-muted">App</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="sms">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="text-muted">SMS</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="email">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faAt} />
          </div>
          <div className="text-muted">Email</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="phone">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="text-muted">Phone</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="wifi">
          <div className="fs-5 mb-1">
            <FontAwesomeIcon icon={faWifi} />
          </div>
          <div className="text-muted">Wi-Fi</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavLinks;
