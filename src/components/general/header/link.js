import {NavLink} from "react-router-dom";

const HeaderLink = ({to, title, subTitle}) => {
    return (
        <NavLink className='header-link' to={to}>
            <div className='header-link__title'>{title}</div>
            <div className='header-link__sub-title'>{subTitle}</div>
        </NavLink>
    )
}

export default HeaderLink;