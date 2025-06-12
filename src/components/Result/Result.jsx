import {
	StyledDiv,
	StyledPYour,
	StyledDivCircle,
	StyledPFeli,
	StyledPText
} from './result.styles';

const Result = ({ text }) => {
	return (
		<>
			<StyledDiv>
				<StyledPYour></StyledPYour>
				<StyledDivCircle></StyledDivCircle>
				<StyledPFeli></StyledPFeli>
				<StyledPText></StyledPText>
			</StyledDiv>
		</>
	);
};

export default Result;
