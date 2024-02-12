import {NavLink} from "react-router-dom";
import Link from "./link";
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
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                  </svg>
              </NavLink>
              <Link to='/forms/1' title='1' subTitle='Osaamisen tarve'/>
              <Link to='/forms/2' title='2' subTitle='Työpaikka- ilmoitus'/>
              <Link to='/forms/3' title='3' subTitle='Hakemusten käsittely'/>
              <Link to='/forms/4' title='4' subTitle='Haestattelu'/>
              <Link to='/forms/5' title='5' subTitle='Sopimus'/>
              <Link to='/forms/6' title='6' subTitle='Perehdys'/>
              <NavLink to='/forms/result' className="header__links__result">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                  </svg>
              </NavLink>
          </div>
      </div>
    </section>
  );
}

export default Header;