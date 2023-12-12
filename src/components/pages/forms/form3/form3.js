import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";

const Form3 = (props) => {
    return (
    <section className='form-section'>
        <Header title='HAKEMUSTEN KÄSITTELY'/>
        <div className="form-wrapper">
            <div className="form">
                <Buttons nextButton='/forms/4' prevButton='/forms/2'/>
                <Explanation/>
            </div>
        </div>
        <Footer/>
    </section>
)
}

export default Form3;