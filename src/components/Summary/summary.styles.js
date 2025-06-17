import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledSumDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledEvalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 60px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius:10px;
    background-color: ${({color}) => color};
`

const StyledIconDiv = styled.div`
    display: flex;
`

const StyledIcon = styled.img`
    margin-right: 15px;
`

const StyledLabel = styled.label`
    color: ${({color}) => color};
    font-weight: 700;
`

const StyledRes = styled.div`
`

const StyledButton = styled.button`
    width: 300px;
    height: 60px;
    border: none;
    border-radius: 30px;
    background-color: ${COLORS.Dark_gray_blue};
    color: white;
    font-weight: 500;
    font-size: 1.2rem;


    @media (hover:hover){
        &:hover{
            background:linear-gradient( ${COLORS.Light_slate_blue_background}, ${COLORS.Light_royal_blue_background});
            cursor: pointer;
        }
    }
`

const StyledTitleSumDiv = styled.h2`
    margin-right: 200px;
    font-size: 1.3rem;
`

export{ StyledSumDiv, StyledEvalDiv, StyledIconDiv, StyledIcon, StyledLabel, StyledRes, StyledButton, StyledTitleSumDiv}