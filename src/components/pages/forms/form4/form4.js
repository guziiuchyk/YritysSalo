import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getElementDistance} from "../../../../utils/getElementDistance";
import Input from "../formsComponents/input/input";
import {setInterviewPlan, setInterviewType} from "../../../../redux/slices/form4Slice";
import SelectItem from "../formsComponents/selectItem/selectItem";
import CheckBox from "../formsComponents/checkBox/checkBox";
import CopyToClipboard from "../formsComponents/copyToClipboard/copyToClipboard";
import QuestionMark from "../formsComponents/questionMark/questionMark";
import ExclamationMark from "../formsComponents/exclamationMark/exclamationMarkPopup";

const Form4 = () => {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const {interviewType, interviewPlan} = useSelector(state => state.form4)

    useEffect(() => {

        window.addEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        getElementDistance(formRef, dispatch)
        return () => {
            window.removeEventListener('resize', ()=> getElementDistance(formRef, dispatch));
        };
    });
    return (
    <section className='form-section'>
        <Header title='HAASTATTELU'/>
        <div className="form-wrapper">
            <div className="form" ref={formRef}>
                <SelectItem elements={[
                    {label:'Yksilöhaastattelu', value:'Yksilöhaastattelu'},
                    {label:'Ryhmähaastattelu', value:'Ryhmähaastattelu'},
                    {label:'Etähaastattelu', value:'Etähaastattelu'}
                ]} title={'Haastattelutyyppi:'} value={interviewType} reducer={setInterviewType}/>
                <div>
                    <QuestionMark text={'Kehitä kysymyksiä, jotka luovat keskustelua. (Vältä kyllä ja ei vastauksia.)\n\nVoit kopioida esimerkkivastauksen itsellesi.'}/>
                    <ExclamationMark text={'Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kulkisivat eri tavoilla.'}/>
                    <Input title={'Suunnittele haastattelurunko:'} value={interviewPlan} reducer={setInterviewPlan}/>
                </div>
                <CheckBox isRequired={false} elements={[{
                    name:'Esimerkki kysymyksiä:',
                    element:<CopyToClipboard text={'Miten kuvailisit itseäsi, entä miten muut kuvailisivat sinua?\nMiksi haet tätä työpaikkaa?\nMinkälainen on mielestäsi hyvä työympäristö?\nMitä haluaisit kehittää itsessäsi?\nMikä on suurin saavutuksesi?'}/>
                }]}/>
                <Buttons nextButton='/forms/5' prevButton='/forms/3'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form4;