const Footer = (props) => {
    return (
    <section className='footer'>
        <div className="footer__logo-wrapper">
            <img src="https://yrityssalo.fi/wp-content/uploads/2020/05/yrityssalo-logo.png" alt="logo" className="footer__logo"/>
        </div>
        <div className="footer__info">
            <ul className='footer__info__list'>
                <li className="footer__info__item">Joensuunkatu 7</li>
                <li className="footer__info__item">24100 SALO</li>
                <li className="footer__info__item">044 564 0043</li>
                <li className="footer__info__item">Yrityssalo@yrityssalo.fi</li>
            </ul>
            <ul className='footer__info__list'>
                <li className="footer__info__item">toihinsaloon.fi</li>
                <li className="footer__info__item">investionsslo.fi</li>
                <li className="footer__info__item">Vapaat toimitilat</li>
                <li className="footer__info__item">visitsalo.fi</li>
            </ul>
            <ul className='footer__info__list'>
                <li className="footer__info__item">Twitter</li>
                <li className="footer__info__item">LinkedIn</li>
                <li className="footer__info__item">Facebook</li>
                <li className="footer__info__item">Instagram</li>
                <li className="footer__info__item">YouTube</li>
            </ul>
        </div>
    </section>
    )
}

export default Footer;