import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
`;

export const ContactInputsmall = styled.input`
  height: 45px;
  width: 400px;
  border: 0;
  border-bottom: 1px solid #202020;
  margin-bottom: 10px;
  background: #fafafa;
  color: #202020;
  font-size: 20px;
  transition: outline 4s ease;
  &:focus {
    outline: 1px solid #fafafa;
  }
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const ContactInputLarge = styled.textarea`
  height: 50%;
  width: 100%;
  max-width: 600px;
  color: #202020;
  border: 0;
  border-bottom: 1px solid #202020;
  margin-bottom: 10px;
  background: #fafafa;
  font-size: 16px;
  text-align: start;
  font-family: Arial, sans-serif;
  transition: outline 4s ease;
  &:focus {
    outline: 1px solid #fafafa;
  }
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const ContactButton = styled.button`
  height: 35px;
  width: 125px;
  color: #202020;
  border: 1px solid #202020;
  border-radius: 4px;
  background: #fafafa;
  transition: 0.5s;
  &:hover {
    background: gray;
    color: white;
  }
`;

export const ContactIframe = styled.iframe`
  height: 700px;
  width: 800px;
  border: none;
  margin-top: 100px;
  @media only screen and (max-width: 768px) {
    margin-top: 100px;
    width: 375px;
  }
`;
