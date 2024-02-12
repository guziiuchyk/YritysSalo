import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getElementDistance} from "../../../../utils/getElementDistance";
import SelectItem from "../formsComponents/selectItem/selectItem";
import {
    setCompanyDescription,
    setCompanyLocation, setContactPersons, setContractType, setJobDescription,
    setManyJobsLocation, setNotifierName, setNotifierPhoneNumber,
    setOneJobLocation, setReceivingEMail, setWorkingTime, setWorkingTimeEnd, setWorkingTimeStart, setWorkPosition
} from "../../../../redux/slices/form2Slice";
import Input from "../formsComponents/input/input";
import CheckBox from "../formsComponents/checkBox/checkBox";
import Line from "../formsComponents/line/line";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import arrowImage from '../../../../img/arrow.png'
import duunitoriImg from '../../../../img/duunitori.png'
import oikotieImg from '../../../../img/oikotie.png'
import ExclamationMark from "../formsComponents/exclamationMark/exclamationMarkPopup";
import QuestionMark from "../formsComponents/questionMark/questionMark";
const Form2 = () => {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const {receivingEMail,notifierPhoneNumber,contactPersons,notifierName,workPosition, workingTimeEnd,workingTimeStart, companyLocation, oneJobLocation, manyJobsLocation, companyDescription, contractType, workingTime, jobDescription} = useSelector(state => state.form2)
    useEffect(() => {

        window.addEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        getElementDistance(formRef, dispatch)
        return () => {
            window.removeEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        };
    });
    return (
        <section className='form-section'>
            <Header title='TYÖPAIKKAILMOITUS'/>
            <div className="form-wrapper">
                <div ref={formRef} className="form">
                    <div className='form__popular-place'>
                        <ExclamationMark
                            text={'Olethan muistanut jakaa ilmoitustasi sosiaalisessa mediassa.\n\nFacebook\nInstagram\nTwitter'}/>
                        <div className="form__popular-place__title">Suosituimmat työpaikkojen hakukoneet:</div>
                        <div className="form__popular-place__links">
                            <a href="https://www.google.com/" className="form__popular-place__link">TE-palvelut</a>
                            <a href="https://www.google.com/" className="form__popular-place__link">Duunitori</a>
                            <a href="https://www.google.com/" className="form__popular-place__link">Oikotie</a>
                        </div>
                    </div>
                    <div>
                        <QuestionMark text={'Valitsemalla toisen sijaintivaihtoehdon, saat auki tarkentavia kenttiä.'}/>
                        <Input value={companyLocation} reducer={setCompanyLocation} title={'Yrityksen sijainti:'}
                               isSmall={true}/>
                    </div>
                    <CheckBox elements={[
                        {
                            name: 'Etätyö tai monta sijaintia.',
                            element: <Input isMedium={true} reducer={setOneJobLocation} value={oneJobLocation}
                                            title='Etätyön tiedot tai työpaikan sijainnit:'/>
                        },
                        {
                            name: 'Työpaikalla on eri sijainti kuin yrityksellä.',
                            element: <Input isSmall={true} reducer={setManyJobsLocation} value={manyJobsLocation}
                                            title={'Työpaikan sijainti:'}/>
                        }
                    ]}/>
                    <div>
                        <ExclamationMark
                            text={'Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat, jotka saattavat kiinnostaa hakijoitasi.\n\nKerro mitä yrityksesi tarjoaa hakijalle.'}/>
                        <Input value={companyDescription} reducer={setCompanyDescription} title={'Yrityksen kuvaus:'}/>
                    </div>
                    <Line/>
                    <SelectItem title={'Työsopimuksen tyypi:'} reducer={setContractType} value={contractType}
                                elements={[
                                    {value: 'Harjoitelija', label: 'Harjoitelija'},
                                    {value: 'Määräaikainen', label: 'Määräaikainen'},
                                    {value: 'Toistaiseksi voimassaoleva', label: 'Toistaiseksi voimassaoleva'}
                                ]}/>

                    <SelectItem title={"Työaika:"} reducer={setWorkingTime} value={workingTime} elements={[
                        {value: 'kokoaikainen', label: 'Kokoaikainen'},
                        {value: 'osa-aikainen', label: 'Osa-aikainen'}
                    ]}/>
                    <div>
                        <ExclamationMark text={'Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi.'}/>
                        <Input title={'Tehtävänimike:'} isSmall={true} value={workPosition} reducer={setWorkPosition}/>
                    </div>
                    <div>
                        <QuestionMark
                            text={'Kerro mitä odotat työnhakijalta:\n- osaaminen\n- työkokemus\n- koulutus\n- muut vaatimukset (esim. lupakortit)\n\nErittele mitä vaadit ja mitä katsot eduksi.'}/>
                        <ExclamationMark
                            text={'Anna mahdollisimman selkeä kuvaus työn sisällöstä.\n\nÄlä jaarittele, pidä tekstilohkot lyhyinä'}/>
                        <Input title={'Työnkuvaus:'} reducer={setJobDescription} value={jobDescription}/>
                    </div>
                    <Line/>
                    <Input title={'Ilmoittajan nimi:'} value={notifierName} reducer={setNotifierName} isSmall={true}/>
                    <Input title={'Ilmoittajan puhelin:'} value={notifierPhoneNumber} reducer={setNotifierPhoneNumber}
                           isSmall={true}/>
                    <Input title={'Hakemusten vastaanotto sähköpostiosoite:'} value={receivingEMail}
                           reducer={setReceivingEMail} isSmall={true}/>
                    <div className={'form2__date-picker__title'}>Ilmoituksen julkaisuaika:</div>
                    <div className='form2__date-picker'>
                        <QuestionMark text={'Mistä mihin asti ilmoituksesi on esillä.'}/>
                        <DatePicker onChange={(date) => {
                            dispatch(setWorkingTimeStart(date.toISOString()))
                        }} value={workingTimeStart}/>
                        <img src={arrowImage} alt="" className="form2__date-pick__arrow"/>
                        <DatePicker onChange={(date) => {
                            dispatch(setWorkingTimeEnd(date.toISOString()))
                        }} value={workingTimeEnd}/>
                    </div>
                    <div>
                        <ExclamationMark text={'Muista mainita mikäli otat vastaan video CV:itä'}/>
                        <Input title={'Yhteyshenkilöt ja heidän yhteystietonsa:'} value={contactPersons}
                               reducer={setContactPersons}/>
                    </div>
                    <Line/>
                    <div className='forms-input__title'>Muutaman yleisimmän työnhakusivuston vaatimukset lähetettävän
                        kuvan ja videon suhteen.
                    </div>
                    <ExclamationMark
                        text={'Kuvalliset ilmoitukset saavat enemmän huomiota.\n\nValitse sellainen kuva, joka vahvistaa yrityskuvaasi.\n\nVideon tekeminen kannattaa, jos sinulla on siihen resursseja.'}/>
                    <div className='form2-imges-wrapper'>
                        <img src={duunitoriImg} alt="duunitori"/>
                        <img src={oikotieImg} alt="oikotie"/>
                    </div>
                    <Buttons nextButton='/forms/3' prevButton='/forms/1'/>
                    <Explanation/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Form2;