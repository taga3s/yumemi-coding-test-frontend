import { style } from "@vanilla-extract/css";

const headerLayout = style({
	display: "flex",
	justifyContent: "start",
	alignItems: "center",
	width: "100%",
	height: "60px",
	padding: "8px 16px",
	backgroundColor: "#A8D8B9",
});

const headerTitle = style({
	fontSize: "24px",
	fontWeight: "bold",
});

export { headerLayout, headerTitle };
