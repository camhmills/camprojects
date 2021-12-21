import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 80vh;
`;

export const ContactForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
height: 75vh;
width: 80vw;
`

export const ContactInputsmall = styled.input`
height: 45px;
width: 400px;
border: 0;
border-bottom: 1px solid #FAFAFA;
margin-bottom: 10px;
background: #010409;
color: #fafafa;
font-size: 20px;
`

export const ContactInputLarge = styled.input`
height: 50%;
width: 100%;
color: #fafafa;
border: 0;
border-bottom: 1px solid #FAFAFA;
margin-bottom: 10px;
background: #010409;
font-size: 16px;
text-align: start;
`

export const ContactButton = styled.button`
height: 35px;
width: 125px;
color: #fafafa;
border: 0;
background: #202020;
`

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
