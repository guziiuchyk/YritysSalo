import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getElementDistance} from "../../../../utils/getElementDistance";
import Input from "../formsComponents/input/input";
import {
    setInvitationInterview,
    setRejectedApplications,
    setWhenAnswer,
    setWhenAvailable
} from "../../../../redux/slices/form3Slice";
import CheckBox from "../formsComponents/checkBox/checkBox";
import CopyToClipboard from "../formsComponents/copyToClipboard/copyToClipboard";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import QuestionMark from "../formsComponents/questionMark/questionMark";
import ExclamationMark from "../formsComponents/exclamationMark/exclamationMarkPopup";

const Form3 = (props) => {

    const formRef = useRef(null);
    const dispatch = useDispatch();
    const {rejectedApplications, whenAvailable, whenAnswer, invitationInterview} = useSelector(state => state.form3)

    useEffect(() => {

        window.addEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        getElementDistance(formRef, dispatch)
        return () => {
            window.removeEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        };
    });
    return (
    <section className='form-section'>
        <Header title='HAKEMUSTEN KÄSITTELY'/>
        <div className="form-wrapper">
            <div ref={formRef} className="form">
                <div>
                    <QuestionMark text={'Varmista, että sinulla on aikaa hakijoiden yhteydenotoille.\n\nAnna mahdollisimman joustava aikahaarukka koska olet tavoitettavissa ja huolehdi, että pidät siitä kiinni.'}/>
                    <ExclamationMark text={'Yrityskuvan kannalta on hyvä vastata kaikille hakijoille.'}/>
                    <Input value={whenAvailable} reducer={setWhenAvailable} isSmall={true} title={'Mieti milloin olet tavoitettavissa:'}/>
                </div>
                <Input title={'Milloin vastaat hakijoille:'} isSmall={true} reducer={setWhenAnswer} value={whenAnswer}/>
                <div className='form3__blue-text'>Soittaminen on paras tapa kutsua henkilö haastatteluun!</div>
                <div>
                    <QuestionMark text={'Kerro haastateltavalle kenet hän tapaa, missä ja koska.\n\nKerro myös mitä hänen tulee ottaa mukaan haastatteluun. (esim. todistukset)\n\nvoit kopioida esimerkkivastauksen itsellesi.'}/>
                    <ExclamationMark text={'Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus:\n\n- Ole täsmällinen.\n\n- Arvosta hakemuksia.\n\n- Ole kohtelias.'}/>
                    <Input title={'Luonnostele kutsu haastatteluun:'} value={invitationInterview} reducer={setInvitationInterview}/>
                </div>
                <div>
                    <QuestionMark text={'Voit kopioida esimerkkivastauksen itsellesi.'}/>
                    <Input value={rejectedApplications} reducer={setRejectedApplications} title={'Luonnostele vastaus hylätyille hakemuksille:'}/>
                </div>
                <CheckBox elements={[
                    {
                        name:"Esimerkki A",
                        element:<CopyToClipboard text={'Kiitos kiinnostuksestasi työpaikkaa kohtaan.\nValitettavasti valinta ei osunut sinuun.'}/>
                    },
                    {
                        name:"Esimerkki B",
                        element: <CopyToClipboard text={'Hei "Hakijan nimi". Valintakriteerimme ei tällä kertaa täyttynyt kohdallasi, sillä "kerro syy".'}/>
                    }
                ]}/>
                <Buttons nextButton='/forms/4' prevButton='/forms/2'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form3;