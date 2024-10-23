import { Tab } from "react-bootstrap";
import TabUrl from "./Url";
import TabMultiUrl from "./MultiUrl";
import TabContact from "./Contact";
import TabText from "./Text";
import TabApps from "./Apps";
import TabSms from "./Sms";
import TabEmail from "./Email";
import TabPhone from "./Phone";
import TabWifi from "./WiFi";
import TabLocation from "./Location";

const tabComponents = [
  { eventKey: "url", Component: TabUrl },
  { eventKey: "multi-url", Component: TabMultiUrl },
  { eventKey: "contact", Component: TabContact },
  { eventKey: "text", Component: TabText },
  { eventKey: "app", Component: TabApps },
  { eventKey: "sms", Component: TabSms },
  { eventKey: "email", Component: TabEmail },
  { eventKey: "phone", Component: TabPhone },
  { eventKey: "wifi", Component: TabWifi },
  { eventKey: "location", Component: TabLocation },
];

const TabContents = ({ text, setText, setQrError }) => {
  return (
    <Tab.Content>
      {tabComponents.map(({ eventKey, Component }) => (
        <Tab.Pane eventKey={eventKey} key={eventKey}>
          <Component text={text} setText={setText} setQrError={setQrError} />
        </Tab.Pane>
      ))}
    </Tab.Content>
  );
};

export default TabContents;
