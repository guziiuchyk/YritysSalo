import Header from "../../../general/header/header";
import Footer from "../../../general/footer/footer";
import React from 'react';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {useSelector} from "react-redux";
import RekryDocument from "./RekryDocument";
import likeImg from '../../../../img/like.png'
import {NavLink} from "react-router-dom";
const Result = () => {
    const state = {
        form1:useSelector(state => state.form1),
        form2:useSelector(state => state.form2),
        form3:useSelector(state => state.form3),
        form4:useSelector(state => state.form4),
    }
    return (
        <section className='form-section'>
            <Header title='PEREHDYTYS'/>
            <div className="result-wrapper">
                <div className='result'>
                    <div className="result__title">Valmista tuli!</div>
                    <div className="result__img-wrapper">
                        <img src={likeImg} alt="like" className="result__img"/>
                    </div>
                    <div className="result__text">
                        Voit tulostaa tai ladata tiedoston alla olevasta napista
                    </div>
                    <div className="result__buttons">
                        <NavLink to={'/forms/6'}>
                            <button className="result__button">EDELLINEN</button>
                        </NavLink>
                        <PDFDownloadLink fileName={'RekrySalo'} document={<RekryDocument state={state}/>}>
                            <button className="result__button">LATAA PDF</button>
                        </PDFDownloadLink>
                        <NavLink to={'/'}>
                            <button className="result__button">ETUSIVULLE</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
};

export default Result;