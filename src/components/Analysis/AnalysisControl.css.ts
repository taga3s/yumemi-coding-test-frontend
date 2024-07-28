import { style } from "@vanilla-extract/css";

const analysisControlLayout = style({
	width: "100%",
	marginTop: "24px",
});

const analysisControlHeading = style({
	fontSize: "20px",
	fontWeight: "bold",
});

const analysisControlForm = style({
	display: "flex",
	gap: "16px",
	flexWrap: "wrap",
	marginTop: "16px",
	padding: "16px",
	backgroundColor: "#A8D8B9",
	borderRadius: "8px",
});

export { analysisControlLayout, analysisControlHeading, analysisControlForm };
