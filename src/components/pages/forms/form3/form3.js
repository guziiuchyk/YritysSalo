import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLeftDistance, setRightDistance} from "../../../../redux/slices/globalSlice";
import {getElementDistance} from "../../../../utils/getElementDistance";
import Input from "../formsComponents/input/input";
import {setInvitationInterview, setWhenAnswer, setWhenAvailable} from "../../../../redux/slices/form3Slice";
import CheckBox from "../formsComponents/checkBox/checkBox";
import CopyToClipboard from "../formsComponents/copyToClipboard/copyToClipboard";

const Form3 = (props) => {

    const formRef = useRef(null);
    const dispatch = useDispatch();
    const {whenAvailable, whenAnswer, invitationInterview} = useSelector(state => state.form3)

    useEffect(() => {

        window.addEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        getElementDistance(formRef, dispatch)
        return () => {
            window.removeEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        };
    }, []);
    return (
    <section className='form-section'>
        <Header title='HAKEMUSTEN KÄSITTELY'/>
        <div className="form-wrapper">
            <div ref={formRef} className="form">
                <Input questionMark={'Varmista, että sinulla on aikaa hakijoiden yhteydenotoille.\n\nAnna mahdollisimman joustava aikahaarukka koska olet tavoitettavissa ja huolehdi, että pidät siitä kiinni.'} exclamationMark={'Yrityskuvan kannalta on hyvä vastata kaikille hakijoille.'} value={whenAvailable} reducer={setWhenAvailable} isSmall={true} title={'Mieti milloin olet tavoitettavissa:'}/>
                <Input title={'Milloin vastaat hakijoille:'} isSmall={true} reducer={setWhenAnswer} value={whenAnswer}/>
                <div className='form3__blue-text'>Soittaminen on paras tapa kutsua henkilö haastatteluun!</div>
                <Input questionMark={'Kerro haastateltavalle kenet hän tapaa, missä ja koska.\n\nKerro myös mitä hänen tulee ottaa mukaan haastatteluun. (esim. todistukset)\n\nvoit kopioida esimerkkivastauksen itsellesi.'} exclamationMark={'Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus:\n\n- Ole täsmällinen.\n\n- Arvosta hakemuksia.\n\n- Ole kohtelias.'} title={'Luonnostele kutsu haastatteluun:'} value={invitationInterview} reducer={setInvitationInterview}/>
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