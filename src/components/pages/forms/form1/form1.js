import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Input from "../formsComponents/input/input";
import {useEffect, useRef} from "react";
import Explanation from "../../../explanation/explanation";
import CheckBox from "../formsComponents/checkBox/checkBox";
import CopyToClipboard from "../formsComponents/copyToClipboard/copyToClipboard";
import {useDispatch, useSelector} from "react-redux";
import {
    setPurposeCompany,
    setRecruitingBudget,
    setRecruitmentPlan,
    setRequiredSkills
} from "../../../../redux/slices/form1Slice";
import {getElementDistance} from "../../../../utils/getElementDistance";
import QuestionMark from "../formsComponents/questionMark/questionMark";
import ExclamationMark from "../formsComponents/exclamationMark/exclamationMarkPopup";

const Form1 = () => {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const {requiredSkills, purposeCompany ,recruitmentPlan, recruitingBudget} = useSelector(state => state.form1)

    useEffect(() => {

        window.addEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        getElementDistance(formRef, dispatch)
        return () => {
            window.removeEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        };
    });
    return (
    <section className='form-section'>
        <Header title='OSAAMISEN TARVE'/>
        <div className="form-wrapper">
            <div ref={formRef} className="form">
                <div>
                    <QuestionMark text={'Onko täytettävä tehtävä kokonaan uusi tai jo olemassa oleva?'}/>
                    <ExclamationMark
                        text={'Tekijän löytäminen on helpompaa kun tiedät, mitä tarvitset. \n \n Virherekrytointi on suurin vältettävissä oleva menoerä.'}/>
                    <Input value={requiredSkills} reducer={setRequiredSkills}
                           title='Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:'/>
                </div>
                <Input value={purposeCompany} reducer={setPurposeCompany}
                       title='Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:'/>
                <CheckBox elements={[
                    {
                        name: 'Esimerkki A',
                        element: <CopyToClipboard
                            text={'Koska yrityksemme tarvitsee uusia asiakkaita, yksi ensivuoden on uudisasiakashankinta.'}/>
                    },
                    {
                        name: 'Esimerkki B',
                        element: <CopyToClipboard text={'Koska nyt on joulusesonki, tarvitsemme jouluapulaista.'}/>
                    },
                    {
                        name: 'Esimerkki C',
                        element: <CopyToClipboard text={'Tuotantomme on kasvussa.'}/>
                    },
                ]}/>
                <div>
                    <ExclamationMark text={'Varaa rekrytointiin tarpeeksi aikaa. \n \n Pidä aikataulusta kiinni. \n \n Yleensä pienyrittäjän rekrytointiin kuluu aikaa n. kuukausi, josta työaikaa on n. 2-5 kokonaista työpäivää.'}/>
                    <QuestionMark text={'Mieti eri vaiheet ja kuka vastaa mistäkin vaiheesta \n \n Voit kopioida esimerkkivastauksen itsellesi.'}/>
                    <Input value={recruitmentPlan} reducer={setRecruitmentPlan} title={'Aikataulusta rekrytointikierros:'}/>
                </div>
                <CheckBox elements={[
                    {
                        name: 'Esimerkki',
                        element: <CopyToClipboard text={
                            'Vaihe 1: \nAikataulu: \nVastuuhenkilöt: \nTarvittavan osaamisen määrittely, työpaikkailmoitukset tekeminen ja jättäminen.\n\n' +
                            'Vaihe 2: \nAikataulu: \nVastuuhenkilöt: \nHakemusten vastaanottaminen ja haastattelut. \n\n ' +
                            'Vaihe 3: \nAikataulu: \nVastuuhenkilöt: \nHakemusten vastaanottaminen ja haastattelut. \n\n ' +
                            'Vaihe 4: \nAikataulu: \nVastuuhenkilöt: \nHaastattelujen toinen kierros ja työntekijän valinta. \n\n' +
                            'Vaihe 5: \nAikataulu: \nVastuuhenkilöt: \nPerehdys.'}/>
                    }
                ]}/>
                <div>
                    <QuestionMark text={'Linkin takaa löydät palkkalaskurin, jolla pystyt arvioimaan palkkakuluja.\n\npalkkalaskuri\n\n Voit kopioida esimerkkivastauksen itsellesi.'}/>
                    <ExclamationMark text={'Vastavalmistunut tai vastaava on aluksi halvempi palkattava, tosin perehdytys vie alkuun siivun tuottavuudesta.\n\nKokenut osaaja taas voi tuoda yritykselle suurempia tuloja nopeammin, mutta on kalliimpi palkattava.'}/>
                    <Input reducer={setRecruitingBudget} value={recruitingBudget} title={'Arvioi budjetti rekrytoinille:'}/>
                </div>
                <Buttons nextButton='/forms/2' prevButton='/'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form1;