import { headerLayout, headerTitle } from "./Header.css";

const Header = () => {
	return (
		<header className={headerLayout}>
			<span className={headerTitle}>都道府県別の総人口推移グラフ</span>
		</header>
	);
};

export { Header };
