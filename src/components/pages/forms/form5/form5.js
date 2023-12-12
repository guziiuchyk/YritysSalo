import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";

const Form5 = (props) => {
    return (
    <section className='form-section'>
        <Header title='SOPIMUS'/>
        <div className="form-wrapper">
            <div className="form">
                <Buttons nextButton='/forms/6' prevButton='/forms/4'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form5;