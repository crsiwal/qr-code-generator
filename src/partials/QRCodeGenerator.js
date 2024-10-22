import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAt, faCopy, faKeyboard, faLink, faListOl, faMessage, faMobile, faPhone, faWifi } from "@fortawesome/free-solid-svg-icons";
import TabUrl from "./Tabs/Url";
import TabMultiUrl from "./Tabs/MultiUrl";
import TabContact from "./Tabs/Contact";
import TabText from "./Tabs/Text";
import TabApplication from "./Tabs/Application";
import TabSms from "./Tabs/Sms";
import TabEmail from "./Tabs/Email";
import TabPhone from "./Tabs/Phone";
import TabWifi from "./Tabs/Wifi";

function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrError, setQrError] = useState(false);

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

  const copyQRCodeToClipboard = async () => {
    try {
      const canvas = document.querySelector("canvas");
      const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));

      if (blob) {
        const clipboardItem = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([clipboardItem]);
        alert("QR code copied to clipboard!");
      } else {
        alert("Failed to copy QR code.");
      }
    } catch (err) {
      console.error("Failed to copy QR code to clipboard", err);
      alert("Error copying QR code to clipboard.");
    }
  };

  return (
    <div className="container min-vh-100 mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h1>Free QR Code Generator - Create Your QR Code Online</h1>
        </div>
        <div className="offset-2 col-8">
          <p>Generate QR Codes effortlessly with our intuitive interface. Access a free plan that never expires! Customize your QR Codes, track their performance, and make informed decisions with ease.</p>
        </div>
      </div>
      <Tab.Container defaultActiveKey="url" onSelect={() => setText("")}>
        <div className="row mt-4">
          <div className="col-9 bg-light border border-end-0">
            <div className="py-2 px-5 mb-2 border-bottom">
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
            </div>
            <div className="p-4">
              <Tab.Content>
                <Tab.Pane eventKey="url">
                  <TabUrl text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="multi-url">
                  <TabMultiUrl text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="contact">
                  <TabContact text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="text">
                  <TabText text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="app">
                  <TabApplication text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="sms">
                  <TabSms text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="email">
                  <TabEmail text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="phone">
                  <TabPhone text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
                <Tab.Pane eventKey="wifi">
                  <TabWifi text={text} setText={setText} setQrError={setQrError} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          <div className="col-3 bg-light border border-start-0">
            <div className="p-3">
              <div className="qr-preview-container" style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{ pointerEvents: "none" }}
                  onContextMenu={e => e.preventDefault()} // Disable right-click
                >
                  <QRCodeCanvas className="border w-100 h-100" value={text && !qrError ? text : "https://qrcode-generator.gchat.in/"} size={1024} marginSize={3} bgColor="#ffffff" fgColor="#000000" />
                </div>
              </div>
              <div className="d-flex mt-3">
                <button type="button" className="btn btn-lg btn-success fw-bold me-2 w-100" onClick={downloadQRCode} disabled={!text || qrError}>
                  Download
                </button>
                <button type="button" className="fs-2 btn btn-lg btn-success p-0 px-3" onClick={copyQRCodeToClipboard} disabled={!text || qrError}>
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
