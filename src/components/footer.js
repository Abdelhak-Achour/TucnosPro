import React from "react";
import paperplane from '../images/paper-plane-solid.svg';

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
                                <p className="title is-2 has-text-dark">Vous souhaitez être tenu au courant de nos actualités Formation?</p>
                                <p className="subtitle is-3 has-text-dark">Inscrivez-vous à notre newsletter!</p>
                            </div>
                            <div className="column">
                                <form className="box is-shadowless has-text-left-desktop">
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Prénom" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="lastname" placeholder="Nom" />
                                        </div>
                                    </div>
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
                    <p className="title has-text-dark">footer</p>
                </div>
            </footer>
        </>
    )
}