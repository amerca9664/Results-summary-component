import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledDiv = styled.div`
    width: 100vw;
   
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:linear-gradient( ${COLORS.Light_slate_blue_background}, ${COLORS.Light_royal_blue_background});
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`
const StyledLabelPYour = styled.label`
    margin-bottom: 20px;
    color: ${COLORS.Light_lavender};
    font-size: 1.125rem;
    font-weight: 500;
`
const StyledDivCircle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align:center;

    width: 150px;
    height: 150px;
    border-radius: 75px;
    background: linear-gradient(${COLORS.Violet_blue_circle}, ${COLORS.Persian_blue_circle});
    color: ${COLORS.Light_lavender};
`
const StyledPNum = styled.p`
    margin: 0;

    font-size: 3.5rem;
    font-weight: 800;
    color: ${COLORS.White};
`

const StyledLabelFeli = styled.label`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.White};
`

const StyledPText = styled.p`
    text-align: center;
    color: ${COLORS.Light_lavender};
`


export {StyledDiv, StyledLabelPYour, StyledDivCircle, StyledLabelFeli, StyledPText, StyledPNum}