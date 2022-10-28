import styled from 'styled-components'
const Container= styled.div`
height :30px;
background-color:teal;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:14px;
font-weight:bold;
`;

const Annoucement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Annoucement
