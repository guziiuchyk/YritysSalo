import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {getElementDistance} from "../../../../utils/getElementDistance";
import BoldText from "../formsComponents/boldText/boldText";
import ExclamationMark from "../formsComponents/exclamationMark/exclamationMarkPopup";

const Form5 = () => {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {

        window.addEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        getElementDistance(formRef, dispatch)
        return () => {
            window.removeEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        };
    });
    return (
    <section className='form-section'>
        <Header title='SOPIMUS'/>
        <div className="form-wrapper">
            <div ref={formRef} className="form">
                <div className='form__text-section'>
                    <ExclamationMark text={'Sopimuspohjana voit käyttää vaikka seuraavaa työsuojelu.fi löytyvää pohjaa:\n\nSopimuspohja'}/>
                    Työsopimus voi olla kirjallinen, suullinen tai sähköinen.
                    <BoldText>On suositeltavaa tehdä kirjallisesti,</BoldText>
                    jotta sovitut asiat voidaan tarvittaessa tarkistaa.
                </div>
                <div className='form__text-section'>
                    Ota tehdessä huomioon{' '}
                    <BoldText>
                        työsopimuslain, työaikalain ja vuosilomalain säännökset, sekä työehtosopimuksen määräykset.
                    </BoldText>
                </div>
                <div className='form__text-section'>
                    Mikäli allekirjoitetussa sopimuksessa on sovittu edellämainittujen vastaisia asioita, ne <BoldText> eivät </BoldText> ole päteviä.
                </div>
                <div className="form__text-section">
                    <BoldText>Työsopimuksen kesto on sovittava.</BoldText> Se voi olla toistaiseksi voimassa oleva tai määräaikainen.
                </div>
                <div className='form__text-section form5__last-section'>
                    <BoldText>
                        Palkattavan henkilön ollessa 14 vuotias, sopimuksen tekee huoltaja. Sitä nuorempi saa työskennellä vain työsuojeluviranomaisen poikkeusluvalla.
                    </BoldText>
                </div>
                <Buttons nextButton='/forms/6' prevButton='/forms/4'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form5;