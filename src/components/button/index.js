import PropTypes from 'prop-types';
import {css} from 'emotion';
import styled from 'react-emotion';

const blank = css`
	padding: 0;
	border: 0;
	background: none;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	text-align: inherit;
	text-transform: inherit;
	cursor: pointer;
`;

const styles = {blank};

const Button = styled.button`
	${props => styles[props.appearance]};
`;

Button.defaultProps = {
	additionalClasses: '',
	children: null
};

Button.propTypes = {
	additionalClasses: PropTypes.string,
	appearance: PropTypes.oneOf(['blank']).isRequired,
	children: PropTypes.node
};

export default Button;
