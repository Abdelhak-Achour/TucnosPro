import React from "react";
import paperplane from '../images/paper-plane-solid.svg';
import data from '../mock_data.json';
import Logo from '../images/logo_tucnospro.png';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import Linkedin from '../images/linkedin.svg';
import Instagram from '../images/instagram.svg';

export function Footer()
{
    return (
        <>
            <footer className="footer">
                <div className="content has-text-centered">
                    <div className="box px-6 py-6 newsletter-box">
                        <div className="columns">
                            <div className="column is-1">
                                <img className="newsletter-icon" src={paperplane} alt="newsletter i" />
                            </div>
                            <div className="column is-6 has-text-left-desktop">
                                <p className="title is-3 has-text-dark">Inscrivez-vous à notre newsletter!</p>
                            </div>
                            <div className="column form-col">
                                <form className="box is-shadowless has-text-left-desktop is-paddingless">
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="control">
                                        <button className="button is-link">S'inscrire</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="columns my-6 mx-6">
                        <div className="column has-text-left">
                            <div className="footer-logo-margin has-text-centered"><img className="footer-logo" src={Logo} alt="logo" /></div>
                            <p className="has-text-dark under-logo-text has-text-centered">
                                TucnosPRO est une centre de formation et de consulting qui offre des formations principalement dans le domaine des nouvelles technologies. Nos experts vous accompagnent pour faciliter votre reconversion ou insertion professionnelle. Nos sessions répondent à vos besoins spécifiques et ciblent les domaines les plus en demande sur le marché.
                            </p>
                            <div className="has-text-centered">
                                <a className="social-media-anchor" href="https://www.facebook.com/TucnosPRO/"><img className="social-media-icon" src={Facebook} alt="facebook" /></a>
                                <a className="social-media-anchor"><img className="social-media-icon" src={Twitter} alt="twitter" /></a>
                                <a className="social-media-anchor" href="https://www.linkedin.com/company/tucnospro/"><img className="social-media-icon" src={Linkedin} alt="linkedin" /></a>
                                <a className="social-media-anchor"><img className="social-media-icon" src={Instagram} alt="instagram" /></a>
                            </div>
                        </div>
                        <div className="column has-text-left">
                            <div className="menu">
                                <p className="menu-label has-text-dark">
                                    Tucnos PRO
                                </p>
                                <ul className="menu-list">
                                    <li><a>Contactez-nous</a></li>
                                    <li><a>A propos de nous</a></li>
                                    <li><a>Que vous pensez de nous</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column has-text-left">
                            <div className="menu">
                                <p className="menu-label has-text-dark">
                                    Formations
                                </p>
                                <ul className="menu-list">
                                    {
                                        data.categories.map((categorie) => {
                                            return(
                                                <li><a>{categorie.name}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="column has-text-left">
                            <div className="menu">
                                <p className="menu-label has-text-dark">
                                    Contactez-nous
                                </p>
                                <ul className="menu-list">
                                    <li>Start Work, 87 rue de la république en face UPES, 2033 Mégrine coteaux</li>
                                    <li>92 999 727 | 27 643 085</li>
                                    <li>tucnospro@gmail.com</li>
                                    <li><a className="is-paddingless" href="https://www.google.com/maps/place/START+WORK+coworking+space/@36.7683348,10.2445893,15z/data=!4m5!3m4!1s0x0:0x3dec8d86e17ea558!8m2!3d36.7683348!4d10.2445893">Plan d'accèes</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}