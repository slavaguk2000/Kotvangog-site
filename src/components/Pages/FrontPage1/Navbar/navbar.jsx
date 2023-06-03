import "./navbar.css";
import { NavbarWrapper } from "./styled";
import { useTranslation } from "react-i18next";
import NavBarItem from "./NavBarItem";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* <div>
        <button onClick={() => changeLanguage("en")}> EN </button>
        <button onClick={() => changeLanguage("ru")}> RU </button>{" "}
      </div> */}

        <div className="logo"> kotvangog</div>
        <NavbarWrapper>
          {[
            { path: "/home", title: t("mainPage.navItem1") },
            {
              path: "#",
              title: t("mainPage.navItem2"),
              menuItems: [
                {
                  menuItemTitle: "Портрет маслом",
                  menuItemPath: "/oil-portrait",
                },
                { menuItemTitle: "Арт стили", menuItemPath: "/products" },
                {
                  menuItemTitle: "Портрет в образе",
                  menuItemPath: "/likeness-portrait",
                },
              ],
            },
            { path: "/reviews", title: t("mainPage.navItem3") },
          ].map((navBarItemProps, idx) => (
            <NavBarItem key={idx} {...navBarItemProps} />
          ))}
        </NavbarWrapper>
      </nav>
    </div>
  );
};

export default Navbar;
