import React, { useState } from "react";
import {
  ContactButton,
  ContactContainer,
  ContactForm,
  ContactInputLarge,
  ContactInputsmall,
} from "../styled-components/ContactStyle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://contact-host.herokuapp.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
    }
    catch (err) {
      window.alert("Sending Failed. Please try again!")
    }
  }

  return (
    <ContactContainer>
      <ContactForm onSubmit = {onSubmitForm}>
        <ContactInputsmall
          placeholder="Name"
          name="name"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></ContactInputsmall>
        <ContactInputsmall
          placeholder="E-Mail"
          name="email"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></ContactInputsmall>
        <ContactInputLarge
          placeholder="Write your message here..."
          name="message"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></ContactInputLarge>
        <ContactButton>Send</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
}
