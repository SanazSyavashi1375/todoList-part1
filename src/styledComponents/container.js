import styled from "styled-components";

const Container = styled.div `

display:flex;
flex-direction:row;
align-items:center;
justify-content center;
@media screen(max-size:400px)&{
    flex-direction:column;
}
`;

export default Container;