import {useState} from "react";
import {useSelector} from "react-redux";

const ExclamationMark = ({text}) => {
    const [isVisible, setIsVisible] = useState(false);
    const leftDistance = useSelector(state => state.global.leftDistance);
    const refactoredText  = text.split(`\n`);
    function changeIsVisible(){
        setIsVisible(!isVisible)
    }
    return (
        <div onClick={changeIsVisible} style={{left: leftDistance + 'px'}} className="form__exclamation-mark">
            <div className={`form__exclamation-mark__popup-wrapper${isVisible ? '.active' : ''}`}>
                <div className="form__exclamation-mark__popup">
                    <div className="form__exclamation-mark__popup__title">Vinkki:</div>
                    {refactoredText.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <span>!</span>
        </div>
    )
}

export default ExclamationMark;