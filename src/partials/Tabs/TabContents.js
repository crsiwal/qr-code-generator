import { Tab } from "react-bootstrap";
import TabUrl from "./Url";
import TabMultiUrl from "./MultiUrl";
import TabContact from "./Contact";
import TabText from "./Text";
import TabApplication from "./Application";
import TabSms from "./Sms";
import TabEmail from "./Email";
import TabPhone from "./Phone";
import TabWifi from "./WiFi";

const TabContents = ({ text, setText, setQrError }) => {
  return (
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
  );
};

export default TabContents;
