import {adjustHue, darken, lighten} from 'polished';

const grayBase = '#000';
const grayDarker = lighten(0.135, grayBase); // #222
const grayDark = lighten(0.2, grayBase); // #332
const gray = lighten(0.335, grayBase); // #555
const grayLight = lighten(0.467, grayBase); // #777
const grayLighter = lighten(0.935, grayBase); // #eee
const primaryRed = '#e63224';
const brandPrimary = primaryRed;
const brandSuccess = '#5cb85c';
const brandInfo = '#5bc0de';
const brandWarning = '#f0ad4e';
const brandDanger = '#d9534f';

// Scaffolding
const bodyBg = '#fff';
const textColor = '#171717';
const linkColor = brandPrimary;
const linkHoverColor = darken(0.15, linkColor);
const linkHoverDecoration = 'underline';

// Other?
const secondaryHeading = '#f18032';
const primaryHighlight = '#b7cbe6';
const secondaryHighlight = '#fcf5ed';
const footerText = '#ccc';
const searchOverlay = '#f18032';
const footerBg = textColor;
const footerHeight = '240px';

// Typography
const fontFamilySansSerif = '"Quicksand", "Helvetica Neue", Helvetica, Arial, sansSerif';
const fontFamilySerif = '"EB Garamond", Georgia, "Times New Roman", Times, serif';
const fontFamilyMonospace = 'Menlo, Monaco, Consolas, "Courier New", monospace';
const fontFamilyBase = fontFamilySerif;
const fontSizeBase = '16px';
const scaleUp = 1.333;
const scaleDown = 0.75;
const fontSizeLarge = Math.ceil((fontSizeBase * scaleUp));
const fontSizeSmall = Math.ceil((fontSizeBase * scaleDown));

// Headings
const fontSizeH4 = fontSizeBase;
const fontSizeH3 = fontSizeH4 * scaleUp;
const fontSizeH2 = fontSizeH3 * scaleUp;
const fontSizeH1 = fontSizeH2 * scaleUp;
const fontSizeH5 = fontSizeH4 * scaleDown;
const fontSizeH6 = fontSizeH5 * scaleDown;

// Line Height
const lineHeightBase = 1.5;
const headingsFontFamily = fontFamilySansSerif;
const headingsFontWeight = 500;
const headingsColor = brandPrimary;

// Components
const borderRadiusBase = 0;
const borderRadiusLarge = 0;
const borderRadiusSmall = 0;

// Media queries breakpoints
const screenSmMin = '768px';
const screenMdMin = '992px';
const screenLgMin = '1200px';
const screenXlMin = '2000px';

// So media queries don't overlap when required, provide a maximum
const screenXsMax = (screenSmMin - 1);
const screenSmMax = (screenMdMin - 1);
const screenMdMax = (screenLgMin - 1);

// Thumbnails
const thumbnailPadding = '4px';
const thumbnailBg = bodyBg;
const thumbnailBorder = '#ddd';
const thumbnailBorderRadius = borderRadiusBase;
const thumbnailCaptionColor = textColor;
const thumbnailCaptionPadding = '9px';

// Type
const componentOffsetHorizontal = '180px';
const textMuted = grayLight;
const abbrBorderColor = grayLight;
const headingsSmallColor = grayLight;
const blockquoteSmallColor = grayLight;
const blockquoteFontSize = (fontSizeBase * 1.25);
const blockquoteBorderColor = grayLighter;
const pageHeaderBorderColor = grayLighter;
const dlHorizontalOffset = componentOffsetHorizontal;
const hrBorder = grayLighter;

// Form states and alerts
// success
const stateSuccessText = '#3c763d';
const stateSuccessBg = '#dff0d8';
const stateSuccessBorder = darken(0.05, adjustHue(10, stateSuccessBg));

// Info
const stateInfoText = '#31708f';
const stateInfoBg = '#d9edf7';
const stateInfoBorder = darken(0.07, adjustHue(10, stateInfoBg));

// Warning
const stateWarningText = '#8a6d3b';
const stateWarningBg = '#fcf8e3';
const stateWarningBorder = darken(0.05, adjustHue(10, stateWarningBg));

// Danger
const stateDangerText = '#a94442';
const stateDangerBg = '#f2dede';
const stateDangerBorder = darken(0.05, adjustHue(10, stateDangerBg));

export default {
	grayBase,
	grayDarker,
	grayDark,
	gray,
	grayLight,
	grayLighter,
	primaryRed,
	brandPrimary,
	brandSuccess,
	brandInfo,
	brandWarning,
	brandDanger,
	bodyBg,
	textColor,
	linkColor,
	linkHoverColor,
	linkHoverDecoration,
	secondaryHeading,
	primaryHighlight,
	secondaryHighlight,
	footerText,
	searchOverlay,
	footerBg,
	footerHeight,
	fontFamilySansSerif,
	fontFamilySerif,
	fontFamilyMonospace,
	fontFamilyBase,
	fontSizeBase,
	scaleUp,
	scaleDown,
	fontSizeLarge,
	fontSizeSmall,
	fontSizeH4,
	fontSizeH3,
	fontSizeH2,
	fontSizeH1,
	fontSizeH5,
	fontSizeH6,
	lineHeightBase,
	headingsFontFamily,
	headingsFontWeight,
	headingsColor,
	borderRadiusBase,
	borderRadiusLarge,
	borderRadiusSmall,
	screenSmMin,
	screenMdMin,
	screenLgMin,
	screenXlMin,
	screenXsMax,
	screenSmMax,
	screenMdMax,
	thumbnailPadding,
	thumbnailBg,
	thumbnailBorder,
	thumbnailBorderRadius,
	thumbnailCaptionColor,
	thumbnailCaptionPadding,
	componentOffsetHorizontal,
	textMuted,
	abbrBorderColor,
	headingsSmallColor,
	blockquoteSmallColor,
	blockquoteFontSize,
	blockquoteBorderColor,
	pageHeaderBorderColor,
	dlHorizontalOffset,
	hrBorder,
	stateSuccessText,
	stateSuccessBg,
	stateSuccessBorder,
	stateInfoText,
	stateInfoBg,
	stateInfoBorder,
	stateWarningText,
	stateWarningBg,
	stateWarningBorder,
	stateDangerText,
	stateDangerBg,
	stateDangerBorder
};
