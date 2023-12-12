import {useState} from "react";

const ExclamationMark = ({leftDistance, text}) => {

    const [isVisible, setIsVisible] = useState(false);
    function changeIsVisible(){
        setIsVisible(!isVisible)
    }
    return (
        <div onClick={changeIsVisible} style={{left: leftDistance + 'px'}} className="form__exclamation-mark">
            <div className={`form__exclamation-mark__popup-wrapper${isVisible ? '.active' : ''}`}>
                <div className="form__exclamation-mark__popup">
                    <div className="form__exclamation-mark__popup__title">Vinkki:</div>
                    <span>{text}</span>
                </div>
            </div>
            <span>!</span>
        </div>
    )
}

export default ExclamationMark;