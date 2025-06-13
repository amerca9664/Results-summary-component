import {
	StyledDiv,
	StyledLabelPYour,
	StyledDivCircle,
	StyledLabelFeli,
	StyledPText,
	StyledPNum
} from './result.styles';

const calcs = data => {
	let inicialValue = 0;
	data.forEach(item => (inicialValue = inicialValue + item.score));
	const res = Math.floor(inicialValue / data.length);
	let message = '';
	if (res >= 90) {
		message = 'Very Great';
	} else if (res < 70) {
		message = 'not cool';
	} else {
		message = 'Great';
	}

	const objResult = {
		calification: res,
		messag: message
	};

	return objResult;
};

const Result = ({ data }) => {
	const prom = calcs(data);

	return (
		<>
			<StyledDiv>
				<StyledLabelPYour>Your Result</StyledLabelPYour>
				<StyledDivCircle>
					<StyledPNum>{prom.calification}</StyledPNum>
					of 100
				</StyledDivCircle>
				<StyledLabelFeli>{prom.messag}</StyledLabelFeli>
				<StyledPText>
					Your scored higher thsn 65% of the people who have taken these tests
				</StyledPText>
			</StyledDiv>
		</>
	);
};

export default Result;
