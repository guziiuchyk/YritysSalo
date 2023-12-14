import {useState} from "react";

const QuestionMark = ({rightDistance, text}) => {
    const [isVisible, setIsVisible] = useState(false);
    function changeIsVisible(){
        setIsVisible(!isVisible)
    }
    const refactoredText  = text.split(`\n`)
    console.log(rightDistance)
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