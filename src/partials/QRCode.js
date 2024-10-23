import React, { useEffect, useRef, useState } from "react";
import { Tab, Spinner } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./Tabs/NavLinks";
import TabContents from "./Tabs/TabContents";

function QRCode() {
  const [text, setText] = useState("");
  const [qrText, setQrText] = useState("");
  const [qrError, setQrError] = useState(false);
  const [qrContainerClass, setQrContainerClass] = useState("d-none");
  const timeoutRef = useRef(null);
  const qrTimeoutRef = useRef(null);

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

  useEffect(() => {
    console.log(`Qr Error`, qrError);
    if (qrError) {
      setQrContainerClass("d-none");
    } else {
      // Clear the previous timeout if it exists
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (qrText !== "") {
        timeoutRef.current = setTimeout(() => {
          setQrContainerClass("d-flex z-3 align-items-center justify-content-center w-100 h-100 bg-light position-absolute");
          setTimeout(() => {
            setQrContainerClass("d-none");
          }, 2000);
        }, 100);
      }
    }
  }, [qrText, timeoutRef, qrError]);

  useEffect(() => {
    // Clear the previous timeout if it exists
    if (qrTimeoutRef.current) {
      clearTimeout(qrTimeoutRef.current);
    }
    qrTimeoutRef.current = setTimeout(() => {
      setQrText(text);
    }, 1000);
  }, [text]);

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
              <NavLinks />
            </div>
            <div className="p-4">
              <TabContents text={text} setText={setText} setQrError={setQrError} />
            </div>
          </div>
          <div className="col-3 bg-light border border-start-0 d-non">
            <div className="position-relative">
              <div className={qrContainerClass}>
                <Spinner animation="border" role="status"></Spinner>
                <span className="ms-2 fs-4 fw-bold">Creating...</span>
              </div>
              <div className="p-3">
                <div className="qr-preview-container" style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{ pointerEvents: "none" }}
                    onContextMenu={e => e.preventDefault()} // Disable right-click
                  >
                    <QRCodeCanvas className="border w-100 h-100" value={qrText && !qrError ? qrText : "https://qrcode-generator.gchat.in/"} size={1024} marginSize={1} bgColor="#ffffff" fgColor="#000000" />
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <button type="button" className="btn btn-lg btn-success fw-bold me-2 w-100" onClick={downloadQRCode} disabled={qrError}>
                    Download
                  </button>
                  <button type="button" className="fs-2 btn btn-lg btn-success p-0 px-3" onClick={copyQRCodeToClipboard} disabled={qrError}>
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
}

export default QRCode;
