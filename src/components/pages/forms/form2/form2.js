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
                        <div className="form__popular-place__title">Suosituimmat työpaikkojen hakukoneet:</div>
                        <div className="form__popular-place__links">
                            <a href="https://www.google.com/" className="form__popular-place__link">TE-palvelut</a>
                            <a href="https://www.google.com/" className="form__popular-place__link">Duunitori</a>
                            <a href="https://www.google.com/" className="form__popular-place__link">Oikotie</a>
                        </div>
                    </div>
                    <Input value={companyLocation} reducer={setCompanyLocation} title={'Yrityksen sijainti:'}
                           isSmall={true}
                           questionMark={'Valitsemalla toisen sijaintivaihtoehdon, saat auki tarkentavia kenttiä.'}/>
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
                    <Input
                        exclamationMark={'Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat, jotka saattavat kiinnostaa hakijoitasi.\n\nKerro mitä yrityksesi tarjoaa hakijalle.'}
                        value={companyDescription} reducer={setCompanyDescription} title={'Yrityksen kuvaus:'}/>
                    <Line/>
                    <SelectItem title={'Työsopimuksen tyypi:'} reducer={setContractType} value={contractType} elements={[
                        { value: 'harjoitelija', label: 'Harjoitelija' },
                        { value: 'määräaikainen', label: 'Määräaikainen' },
                        { value: 'toistaiseksi voimassaoleva', label: 'Toistaiseksi voimassaoleva' }
                    ]}/>

                    <SelectItem title={"Työaika:"} reducer={setWorkingTime} value={workingTime} elements={[
                        {value:'kokoaikainen', label:'Kokoaikainen'},
                        {value:'osa-aikainen', label:'Osa-aikainen'}
                    ]}/>
                    <Input exclamationMark={'Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi.'} title={'Tehtävänimike:'} isSmall={true} value={workPosition} reducer={setWorkPosition}/>
                    <Input exclamationMark={'Anna mahdollisimman selkeä kuvaus työn sisällöstä.\n\nÄlä jaarittele, pidä tekstilohkot lyhyinä'} title={'Työnkuvaus:'} reducer={setJobDescription} value={jobDescription}/>
                    <Line/>
                    <Input title={'Ilmoittajan nimi:'} value={notifierName} reducer={setNotifierName} isSmall={true}/>
                    <Input title={'Ilmoittajan puhelin:'} value={notifierPhoneNumber} reducer={setNotifierPhoneNumber} isSmall={true}/>
                    <Input title={'Hakemusten vastaanotto sähköpostiosoite:'} value={receivingEMail} reducer={setReceivingEMail} isSmall={true}/>
                    <div className={'form2__date-picker__title'}>Ilmoituksen julkaisuaika:</div>
                    <div className='form2__date-picker'>
                        <DatePicker onChange={(date)=>{dispatch(setWorkingTimeStart(date))}} value={workingTimeStart}/>
                        <img src={arrowImage} alt="" className="form2__date-pick__arrow"/>
                        <DatePicker onChange={(date)=>{dispatch(setWorkingTimeEnd(date))}} value={workingTimeEnd}/>
                    </div>
                    <Input exclamationMark={'Muista mainita mikäli otat vastaan video CV:itä'} title={'Yhteyshenkilöt ja heidän yhteystietonsa:'} value={contactPersons} reducer={setContactPersons}/>
                    <Buttons nextButton='/forms/3' prevButton='/forms/1'/>
                    <Explanation/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Form2;