import ExclamationMark from "../exclamationMark/exclamationMarkPopup";
import QuestionMark from "../questionMark/questionMark";
const Input = ({value,onChange, title, leftDistance, rightDistance, questionMark, exclamationMark, isSmall}) => {
    console.log(rightDistance)
    return (
        <div className='forms-input'>
            {exclamationMark ? <ExclamationMark leftDistance={leftDistance} text={exclamationMark}/> : ''}
            {questionMark ? <QuestionMark rightDistance={rightDistance} text={questionMark} /> : ''}
            <div className="forms-input__title">{title}</div>
            <textarea style={isSmall ? {height:'37px'} : {}} value={value} onChange={(e)=> onChange(e.target.value)} className="forms-input__textarea"/>
        </div>
    )
}

export default Input;