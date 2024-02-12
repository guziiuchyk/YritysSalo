import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";
import BoldText from "../formsComponents/boldText/boldText";
import ExclamationMark from "../formsComponents/exclamationMark/exclamationMarkPopup";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {getElementDistance} from "../../../../utils/getElementDistance";
import QuestionMark from "../formsComponents/questionMark/questionMark";

const Form6 = () => {
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
        <Header title='PEREHDYTYS'/>
        <div className="form-wrapper">
            <div ref={formRef} className="form">
                <div className="form__text-section">
                    <ExclamationMark text={'Lisää tietoa\ntyöturvallisuuslaista:\n\nTyöturvallisuus'}/>
                    <QuestionMark text={'Mieti kuka vastaa perehdytyksestä.'}/>
                    <BoldText>
                        Perehdytys on sinulle erittäin hyödyllinen. Hyvä perehdytys varmistaa sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.
                    </BoldText>
                </div>
                <div className="form__text-section form6__middle">
                    <QuestionMark text={'Perehdytys on työturvallisuuslain nojalla pakollinen toteuttaa.'}/>
                    <p>Perehdytykseen tulee kuulua ainakin:</p>
                    <p>- Työvälineisiin, työympäristöön ja sen toimintatapoihin tutustuminen.</p>
                    <p>- Pelastusopastus</p>
                    <p>- Työterveyshuolto</p>
                    <p>- Työturvallisuus</p>
                </div>
                <div className="form__text-section">
                    <ExclamationMark text={'Perehdytyskansio on infopaketti yrityksesi uudelle työntekijälle. Perehdytyskansion pohjan löydät täältä:\n\nPerehdytyspohja'}/>
                    <BoldText>
                        Säästät vaivaa tulevaisuudessa, tekemällä perehdytyskansion jo ensimmäisen rekrytoinnin kohdalla
                    </BoldText>
                </div>
                <Buttons nextButton='/forms/result' prevButton='/forms/5'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form6;