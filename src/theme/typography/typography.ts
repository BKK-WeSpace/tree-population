import { TypographyStyle } from "./type";
// FontFamily : LINE Seed Sans TH
// Heading ** 1 rem = 16 px
const h1: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "96px",
	lineHeight: 115.2/96, // line height / font-size 
	letterSpacing: "-0.5px",
};
const h2: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "60px",
	lineHeight: 72/60,
	letterSpacing: "-0.5px",
};
const h3: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "48px",
	lineHeight: 57.6/48,
};
const h4: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 300,
	fontSize: "34px",
	lineHeight: 40.8/34,
	letterSpacing: "0.25px",
};
const h5: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 300,
	fontSize: "24px",
	lineHeight: 28.8/24,
};
const h6: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 300,
	fontSize: "20px",
	lineHeight: 24/20,
	letterSpacing: "0.15px",
};
// Subtitle
const subtitle1: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "16px",
	lineHeight: 28/16,
};
const subtitle2: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "14px",
	lineHeight: 21.98/14,
};
// Body
const body1: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "16px",
	lineHeight: 24/16,
};
const body2: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "14px",
	lineHeight: 20.02/14,
};
// Button
const button: TypographyStyle = {
	fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
	fontWeight: 400,
	fontSize: "14px",
	lineHeight: 24/14,
};
export const typography = { 
    h1, h2, h3, h4, h5, h6,
    subtitle1, subtitle2,
    body1, body2,
    button     
};