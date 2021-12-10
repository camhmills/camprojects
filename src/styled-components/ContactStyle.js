import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;;
  width: 95vw;
  height: 89.5vh;
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
