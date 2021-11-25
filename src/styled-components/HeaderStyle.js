import styled from 'styled-components'

export const HeaderDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80px;
width: 100vw;
background-color: #202020;
`

export const HeaderStuff = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
width: 33vw;
background-color: #202020;
font-size: 25px;
@media screen and (max-width: 1000px) {
    width: 50vw;
}

@media screen and (max-width: 800px) {
    width: 75vw;
}

@media screen and (max-width: 500px) {
    width: 90vw;
}
`