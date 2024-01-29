import {useEffect, useState} from "react";
import React from "react";
const CheckBox = ({elements, isRequired}) => {
    const randomName = Math.floor(Math.random()*100).toString() + elements[0].name.toString();
    const [selectedOption, setSelectedOption] = useState(isRequired ? 1 : null);
    const [shownElement, setShownElement] = useState(isRequired ? elements[1].element : null)
    function changeShownElement(e){
        if (Number(e.target.id[0]) === selectedOption){
            setSelectedOption(null);
            setShownElement(null)
            return
        }
        setSelectedOption(Number(e.target.id[0]))
        setShownElement(elements[e.target.id[0]].element)
    }
    useEffect(() => {
        setShownElement(elements[selectedOption]?.element || null);
    }, [selectedOption, elements]);
    let elementsBlocks = elements.map((item, index) => <div key={index} className='check-box__radio-wrapper' ><input onChange={()=>{}} onClick={changeShownElement} className='check-box__radio' defaultChecked={index === 0 && elements.length !== 1 && isRequired} checked={selectedOption === index} id={index.toString() + randomName} name={randomName} type='radio'/><label className='check-box__radio-custom' htmlFor={index.toString() + randomName}><span/></label><span className='check-box__radio-text'>{item.name}</span></div>)
    return (
        <div className='check-box-wrapper'>
            <div className="check-box">
                {elementsBlocks}
            </div>
            <div key={shownElement} className="check-box__shown-element">
                {shownElement}
            </div>
        </div>
    )
}

export default CheckBox;