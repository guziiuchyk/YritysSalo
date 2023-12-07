import {NavLink} from "react-router-dom";

const Header = ({title}) => {
  return (
    <section children="header-section">
      <div className="header__title">{title}</div>
      <div className="header">
        <div className="header__links__arrow"></div>
        <div className="header__links">
            <NavLink to='/' className="header__links__home"></NavLink>
            <NavLink to='/result' className="header__links__result"></NavLink>

        </div>
      </div>
    </section>
  );
}

export default Header;