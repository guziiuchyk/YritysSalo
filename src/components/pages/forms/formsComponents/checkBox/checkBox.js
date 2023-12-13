import {useState} from "react";

const CheckBox = ({elements}) => {
    const [shownElement, setShownElement] = useState(elements[0].element);
    const randomName = Math.floor(Math.random()*100).toString() + elements[0].name.toString();

    function changeShownElement(e){
        setShownElement(elements[e.target.id[0]].element)
    }

    let elementsBlocks = elements.map((item, index) => <div className='check-box__radio-wrapper' ><input className='check-box__radio' defaultChecked={index === 0 && elements.length !== 1} id={index.toString() + randomName} name={randomName} type='radio'/><label className='check-box__radio-custom' htmlFor={index.toString() + randomName}><span/></label><span className='check-box__radio-text'>{item.name}</span></div>)
    return (
        <div className='check-box-wrapper'>
            <div onChange={changeShownElement} className="check-box">
                {elementsBlocks}
            </div>
            <div className="check-box__shown-element">
                {shownElement}
            </div>
        </div>
    )
}

export default CheckBox;