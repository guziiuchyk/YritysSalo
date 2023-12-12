import {useState} from "react";

const QuestionMark = ({rightDistance, text}) => {
    const [isVisible, setIsVisible] = useState(false);
    function changeIsVisible(){
        setIsVisible(!isVisible)
    }

    console.log(rightDistance)
    return (
        <div onClick={changeIsVisible} style={{left: rightDistance + 'px'}} className="form__question-mark">
            <div className={`form__question-mark__popup-wrapper${isVisible ? '.active' : ''}`}>
                <div className="form__question-mark__popup">
                    <div className="form__question-mark__popup__title">Ohje:</div>
                    <span>{text}</span>
                </div>
            </div>
            <span>?</span>
        </div>
    )
}

export default QuestionMark;