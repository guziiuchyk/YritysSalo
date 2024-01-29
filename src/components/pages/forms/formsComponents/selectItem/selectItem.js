import React from 'react'
import Select from 'react-select'
import {useDispatch} from "react-redux";

const SelectItem = ({elements, reducer, value, title}) => {
    const dispatch = useDispatch()
    function handleChange(item){
        dispatch(reducer(item.value))
    }
    return(
        <div className={'react-select-wrapper'}>
            <div className='react-select__title'>{title}</div>
            <Select classNamePrefix="react-select" defaultInputValue={value ? value : ''} onChange={handleChange} options={elements} />
        </div>
    )
}

export default SelectItem
