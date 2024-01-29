import ExclamationMark from "../exclamationMark/exclamationMarkPopup";
import QuestionMark from "../questionMark/questionMark";
import {useDispatch, useSelector} from "react-redux";
const Input = ({value,reducer, title, questionMark, exclamationMark, isSmall, isMedium}) => {
    const dispatch = useDispatch()
    const leftDistance = useSelector(state => state.global.leftDistance);
    const rightDistance = useSelector(state => state.global.rightDistance);
    let height = 0
    if (isSmall) height = 37
    else if (isMedium) height = 74
    return (
        <div className='forms-input'>
            {exclamationMark ? <ExclamationMark leftDistance={leftDistance} text={exclamationMark}/> : ''}
            {questionMark ? <QuestionMark rightDistance={rightDistance} text={questionMark}/> : ''}
            <div className="forms-input__title">{title}</div>
            <textarea style={height ? {height:`${height}px`} : {}} value={value}
                      onChange={(e) => dispatch(reducer(e.target.value))} className="forms-input__textarea"/>
        </div>
    )
}

export default Input;