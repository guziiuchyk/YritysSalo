import {NavLink} from "react-router-dom";

const Buttons = ({nextButton, prevButton}) => {
    return (
        <div className='form-buttons-wrapper'>
            <NavLink to={prevButton} className="form-buttons">
                <div>EDELLINEN</div>
                <div className="form-buttons__left-arrow"></div>
            </NavLink>
            <NavLink to={nextButton} className="form-buttons">
                <div>SEURAAVA</div>
                <div className="form-buttons__right-arrow"></div>
            </NavLink>
        </div>
    )
}

export default Buttons;