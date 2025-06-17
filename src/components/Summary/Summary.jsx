import { v4 } from 'uuid';
import {
	StyledSumDiv,
	StyledEvalDiv,
	StyledIconDiv,
	StyledIcon,
	StyledLabel,
	StyledRes,
	StyledButton
} from './summary.styles';
import { COLORS } from '../../styles/colors';

const evalCicle = data => {
	return (
		<StyledEvalDiv key={v4()} color={COLORS[`${data.category}Div`]}>
			<StyledIconDiv>
				<StyledIcon src={data.icon}></StyledIcon>
				<StyledLabel color={COLORS[data.category]}>{data.category}</StyledLabel>
			</StyledIconDiv>
			<StyledRes>
				<StyledLabel color='black'>{data.score} / 100</StyledLabel>
			</StyledRes>
		</StyledEvalDiv>
	);
};

const Summary = ({ data }) => {
	return (
		<>
			<StyledSumDiv>
				<span>Summary</span>
				{data.map(evalCicle)}
			</StyledSumDiv>
		</>
	);
};

export default Summary;
