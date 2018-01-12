import PropTypes from 'prop-types';
import styled from 'react-emotion';
import constants from '../../constants';

const alert = {
	warning: {
		border: constants.stateWarningBorder,
		bg: constants.stateWarningBg,
		text: constants.stateWarningText
	},
	announcement: {
		border: constants.stateInfoBorder,
		bg: constants.stateInfoBg,
		text: constants.stateInfoText
	}
};

const Alert = styled.div`
	padding: 15px;
	border-top: 1px solid ${({type}) => alert[type].border};
	background-color: ${({type}) => alert[type].bg};
	color: ${({type}) => alert[type].text};
	font-family: ${constants.fontFamilySansSerif};
	text-transform: uppercase;
	box-shadow: 0 2px 5px rgba(${({type}) => alert[type].bg}, 0.25);
`;

Alert.defaultProps = {
	children: null
};

Alert.propTypes = {
	type: PropTypes.oneOf(['warning', 'announcement']).isRequired,
	children: PropTypes.node
};

export default Alert;
