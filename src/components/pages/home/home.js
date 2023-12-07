import {NavLink} from "react-router-dom";
import ExclamationMark from "../../general/exclamationMark/exclamationMark";
import QuestionMark from "../../general/questionMark/questionMark";
import Footer from "../../general/footer/footer";

const Home = (props) => {
    return (
        <>
        <section className="home-section">
        <div className='home-wrapper'>
        <div className="home">
            <div className="home__title">Pienyrittäjan rekryopas</div>
            <div className="home__sub-title">Tämä opas on suunnattu ensimmäista työtekijäänsä
                rekrytoivalle pien- tai mikroyrittäjälle.</div>
            <div className="home__desc">Täytä kohdat,
                jotka koet itsellesi hyödylliseksi.</div>
            <ul className="home__list">
                <li className="home__list__item">1. Millaisesta osaamisesta yrityksesi hyöty?</li>
                <li className="home__list__item">2. Miten laadit kiinnostavan työpaikka?</li>
                <li className="home__list__item">3. Miten valitset sopivat ehdokkaat haastatteluun?</li>
                <li className="home__list__item">4. Kuinka valmistaudun työhaastattelun tekemiseen?</li>
                <li className="home__list__item">6. Mitä sisältyy työsopimukseen?</li>
                <li className="home__list__item">7. Mitä kuuluu onnistuneeseen perehdytykseen?</li>
            </ul>
            <div className="home__links">
                <NavLink to='/forms/1' className='home__links__link'>1</NavLink>
                <NavLink to='/forms/2' className='home__links__link'>2</NavLink>
                <NavLink to='/forms/3' className='home__links__link'>3</NavLink>
                <NavLink to='/forms/4' className='home__links__link'>4</NavLink>
                <NavLink to='/forms/5' className='home__links__link'>5</NavLink>
                <NavLink to='/forms/6' className='home__links__link'>6</NavLink>
            </div>
            <div className="home__explanation">
                <ExclamationMark/><QuestionMark/>
                <div className="home__explanation__text">
                    Vinkki- ja ohjenappien löydät vinkejä ja neuvoja, joita voi lisätä tulostettavalle muistilistalo.
                </div>
            </div>
        </div>
        </div>
        </section>
         <Footer/>
        </>
    )
}

export default Home;