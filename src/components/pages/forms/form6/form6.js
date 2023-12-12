import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";

const Form6 = (props) => {
    return (
    <section className='form-section'>
        <Header title='PEREHDYTYS'/>
        <div className="form-wrapper">
            <div className="form">
                <Buttons nextButton='/forms/result' prevButton='/forms/5'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form6;