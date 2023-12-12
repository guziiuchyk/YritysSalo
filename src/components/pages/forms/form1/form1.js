import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Input from "../formsComponents/input/input";
import {useEffect, useRef, useState} from "react";
import Explanation from "../../../explanation/explanation";
import CheckBox from "../formsComponents/checkBox/checkBox";

const Form1 = (props) => {

    const formRef = useRef(null);
    const [leftDistance, setLeftDistance] = useState(0);
    const [rightDistance, setRightDistance] = useState(0);
    const [input1, setInput1] = useState('')

    useEffect(() => {
        const getElementDistance = () => {
            if (formRef.current) {
                const elementRect = formRef.current.getBoundingClientRect();
                const leftDistance = elementRect.left + window.pageXOffset;
                const rightDistance = elementRect.width + leftDistance;
                setRightDistance(rightDistance)
                setLeftDistance(leftDistance);
            }
        };

        window.addEventListener('resize', getElementDistance);
        getElementDistance()
        return () => {
            window.removeEventListener('resize', getElementDistance);
        };
    }, []);
    console.log(leftDistance)
    return (
    <section className='form-section'>
        <Header title='OSAAMISEN TARVE'/>
        <div className="form-wrapper">
            <div ref={formRef} className="form">
                <Input questionMark={'Onko täytettävä tehtävä kokonaan uusi tai jo olemassa oleva?'} exclamationMark={'Tekijän löytäminen on helpompaa kun tiedät, mitä tarvitset.\n\n Virherekrytointi on suurin vältettävissä oleva menoerä.'} value={input1} onChange={setInput1} rightDistance={rightDistance} leftDistance={leftDistance} title='Mieti, millaista osaamista yrityksesi tarvitsee nyt ja:'/>
                <CheckBox elements={[
                    {
                        name:'Esimerkki A',
                        element: <div>BLOCK 1</div>
                    },
                    {
                        name:'Esimerkki B',
                        element: <div>BLOCK 2</div>
                    },
                    {
                        name:'Esimerkki C',
                        element: <div>BLOCK 3</div>
                    },
                ]}/>
                <Buttons nextButton='/forms/2' prevButton='/'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form1;