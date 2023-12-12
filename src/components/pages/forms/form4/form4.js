import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";

const Form4 = (props) => {
    return (
    <section className='form-section'>
        <Header title='HAASTATTELU'/>
        <div className="form-wrapper">
            <div className="form">
                <Buttons nextButton='/forms/5' prevButton='/forms/3'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form4;