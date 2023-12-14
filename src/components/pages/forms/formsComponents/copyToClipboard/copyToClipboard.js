import copy from 'clipboard-copy';
import copyIcon from '../../../../../img/copy-icon.png'
const CopyToClipboard = ({text}) => {

    function copyToClipboard(){
        copy(text).then()
    }
    const refactoredText  = text.split(`\n`);
    return (
        <div className='copy'>
            <button title='copy' onClick={copyToClipboard} className="copy__button">
                <img src={copyIcon} alt="copy" className="copy__button__img"/>
            </button>
            <div className="copy__text">
                {refactoredText.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default CopyToClipboard;