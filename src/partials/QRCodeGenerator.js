import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { QRCodeSVG } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAt, faClipboard, faCopy, faKeyboard, faLink, faListOl, faMessage, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
import TabUrl from "./Tabs/Url";
import TabMultiUrl from "./Tabs/MultiUrl";
import TabContact from "./Tabs/Contact";
import TabText from "./Tabs/Text";
import TabApplication from "./Tabs/Application";
import TabSms from "./Tabs/Sms";
import TabEmail from "./Tabs/Email";
import TabPhone from "./Tabs/Phone";

function QRCodeGenerator() {
  const [text, setText] = useState("");

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h1>QR Code Generator - Create QR Codes for Free</h1>
        </div>
        <div className="offset-2 col-8">
          <p>Generate QR Codes effortlessly with our intuitive interface. Access a free plan that never expires! Customize your QR Codes, track their performance, and make informed decisions with ease.</p>
        </div>
      </div>
      <Tab.Container defaultActiveKey="url">
        <div className="row mt-4">
          <div className="col-9">
            <div className="bg-light border py-2 px-5 mb-2">
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
              </Nav>
            </div>
            <div className="bg-light border p-5">
              <Tab.Content>
                <Tab.Pane eventKey="url">
                  <TabUrl text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="multi-url">
                  <TabMultiUrl text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="contact">
                  <TabContact text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="text">
                  <TabText text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="app">
                  <TabApplication text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="sms">
                  <TabSms text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="email">
                  <TabEmail text={text} setText={setText} />
                </Tab.Pane>
                <Tab.Pane eventKey="phone">
                  <TabPhone text={text} setText={setText} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          <div className="col-3 bg-light border">
            <div className="p-3">
              <div>
                <QRCodeSVG className="border w-100 h-100" value={text ? text : "http://qrcode-generator.gchat.in/"} size={1024} marginSize={3} bgColor="#ffffff" fgColor="#000000" />
              </div>
              <div className="d-flex mt-3">
                <button type="button" class="btn btn-lg btn-success fw-bold me-2 w-100" disabled={!text}>
                  Download
                </button>
                <button type="button" class="fs-2 btn btn-lg btn-success p-0 px-3" disabled={!text}>
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
}

export default QRCodeGenerator;
