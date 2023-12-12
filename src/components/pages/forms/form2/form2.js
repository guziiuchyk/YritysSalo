import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import Buttons from "../formsComponents/buttons/buttons";
import Explanation from "../../../explanation/explanation";

const Form2 = (props) => {
    return (
        <section className='form-section'>
            <Header title='TYÖPAIKKAILMOITUS'/>
            <div className="form-wrapper">
                <div className="form">
                    <Buttons nextButton='/forms/3' prevButton='/forms/1'/>
                    <Explanation/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Form2;