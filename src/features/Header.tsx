import { headerLayout, headerTitle } from './Header.css';

const Header = () => {
  return (
    <header className={headerLayout}>
      <h1 className={headerTitle}>都道府県別の人口推移グラフ</h1>
    </header>
  );
};

export { Header };
