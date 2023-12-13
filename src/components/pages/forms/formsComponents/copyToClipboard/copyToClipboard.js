import copy from 'clipboard-copy';
import copyIcon from '../../../../../img/copy-icon.png'
const CopyToClipboard = ({text}) => {

    function copyToClipboard(){
        copy(text).then()
    }

    return (
        <div className='copy'><button title='copy' onClick={copyToClipboard} className="copy__button"><img src={copyIcon} alt="copy" className="copy__button__img"/></button><div className="copy__text">{text}</div></div>
    )
}

export default CopyToClipboard;