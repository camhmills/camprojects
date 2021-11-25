import styled from 'styled-components';

export const ContactContainer = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 95vw;
height: 100vh;
`

export const ContactIframe = styled.iframe`
height: 700px;
width: 800px;
border: none;
margin-top: 50px;
@media only screen and (max-width: 768px) {
    margin-top: 35px;
    width: 375px;
}
`