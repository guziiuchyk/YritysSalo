import {NavLink} from "react-router-dom";
import Link from "./link";
import homeIcon from '../../../img/home-icon.png'
import checkMarkIcon from '../../../img/check-mark.svg'
const Header = ({title}) => {
  return (
    <section className="header-section">
      <div className="header__title">{title}</div>
      <div className="header">
          <div className="header__links">
              <div className="header__arrow">
                  <div className="header__arrow__body"/>
                  <div className="header__arrow__head"/>
              </div>
              <NavLink to='/' className="header__links__home">
                  <img className='header__links__home__img' src={homeIcon} alt="home"/>
              </NavLink>
              <Link to='/forms/1' title='1' subTitle='Osaamisen tarve'/>
              <Link to='/forms/2' title='2' subTitle='Työpaikka- ilmoitus'/>
              <Link to='/forms/3' title='3' subTitle='Hakemusten käsittely'/>
              <Link to='/forms/4' title='4' subTitle='Haestattelu'/>
              <Link to='/forms/5' title='5' subTitle='Sopimus'/>
              <Link to='/forms/6' title='6' subTitle='Perehdys'/>
              <NavLink to='/forms/result' className="header__links__result">
                  <img className='header__links__result__img' src={checkMarkIcon} alt="home"/>
              </NavLink>
          </div>
      </div>
    </section>
  );
}

export default Header;