import { v4 } from 'uuid';
import {
	StyledSumDiv,
	StyledEvalDiv,
	StyledIconDiv,
	StyledIcon,
	StyledLabel,
	StyledRes,
	StyledButton,
	StyledTitleSumDiv
} from './summary.styles';
import { COLORS } from '/styles/colors.js';

const evalCicle = data => {
	return (
		<StyledEvalDiv key={v4()} color={COLORS[`${data.category}Div`]}>
			<StyledIconDiv>
				<StyledIcon src={data.icon}></StyledIcon>
				<StyledLabel color={COLORS[data.category]}>{data.category}</StyledLabel>
			</StyledIconDiv>
			<StyledRes>
				<StyledLabel color='black'>{data.score}</StyledLabel>
				<StyledLabel color='gray'> / 100</StyledLabel>
			</StyledRes>
		</StyledEvalDiv>
	);
};

const Summary = ({ data }) => {
	return (
		<>
			<StyledSumDiv>
				<StyledTitleSumDiv>Summary</StyledTitleSumDiv>
				{data.map(evalCicle)}
				<StyledButton>Continue</StyledButton>
			</StyledSumDiv>
		</>
	);
};

export default Summary;
