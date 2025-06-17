import styled from "styled-components";

const StyledSumDiv = styled.div`

`

const StyledEvalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: ${({color}) => color};
`

const StyledIconDiv = styled.div`
    display: flex;
`

const StyledIcon = styled.img`
`

const StyledLabel = styled.label`
    color: ${({color}) => color};
`

const StyledRes = styled.div`
`

const StyledButton = styled.button`
`

export{ StyledSumDiv, StyledEvalDiv, StyledIconDiv, StyledIcon, StyledLabel, StyledRes, StyledButton}