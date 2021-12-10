import React from "react";
import {
  ContactContainer,
  ContactIframe,
} from "../styled-components/ContactStyle";

export default function Contact() {
  return (
    <ContactContainer>
      <ContactIframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfW8_Qr5lUud3ctwaW_d75EAOu2QFtRMsddTMN7YIgU_B-MVg/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </ContactIframe>
    </ContactContainer>
  );
}
