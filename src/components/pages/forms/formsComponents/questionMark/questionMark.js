import {useState} from "react";
import {useSelector} from "react-redux";

const QuestionMark = ({text}) => {
    const [isVisible, setIsVisible] = useState(false);
    const rightDistance = useSelector(state => state.global.rightDistance);
    function changeIsVisible(){
        setIsVisible(!isVisible)
    }
    const refactoredText  = text.split(`\n`)
    return (
        <div onClick={changeIsVisible} style={{left: rightDistance + 'px'}} className="form__question-mark">
            <div className={`form__question-mark__popup-wrapper${isVisible ? '.active' : ''}`}>
                <div className="form__question-mark__popup">
                    <div className="form__question-mark__popup__title">Ohje:</div>
                    {refactoredText.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <span>?</span>
        </div>
    )
}

export default QuestionMark;