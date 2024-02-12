import {useDispatch} from "react-redux";
const Input = ({value,reducer, title, isSmall, isMedium}) => {
    const dispatch = useDispatch()
    let height = 0
    if (isSmall) height = 37
    else if (isMedium) height = 74
    return (
        <div className='forms-input'>
            <div className="forms-input__title">{title}</div>
            <textarea style={height ? {height:`${height}px`} : {}} value={value} onChange={(e) => dispatch(reducer(e.target.value))} className="forms-input__textarea"/>
        </div>
    )
}

export default Input;