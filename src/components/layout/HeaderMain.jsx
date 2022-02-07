// layouts
import Logo from "./Logo";
import NavMain from "./NavMain";
import SearchBar from "./../SearchBar";

const HeaderMain = () => {
  return (
    <header className="header-main">
      <Logo />
      <SearchBar />
      <NavMain />
    </header>
  );
};


export default HeaderMain;
