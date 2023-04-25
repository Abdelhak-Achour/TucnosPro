import React, { useState } from "react";
import { Navbar2 } from "../components/navbar2";
import axios from "axios";

export function Contact ()
{
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    async function submitHandle(event)
    {
        try
        {
            const response = await axios.post("http://localhost:3001/contact/sendmessage", {
                nom,
                prenom,
                sujet,
                message
            });
        }
        catch (err)
        {
            console.error(err)
        }
    }

    return (
        <>
            <Navbar2 />
            <div className="box m-6 is-shadowless contact">
                <div className="columns">
                    <div className="column is-6 contact-info-col">
                        <p className="title is-1 has-text-dark">Contactez-nous</p>
                        <p className="subtitle lvl-10 has-text-dark">Si vous avez quelque chose à demander, envoyez-nous un message</p>
                        <div className="columns">
                            <div className="column is-narrow">
                                <hr className="orange-hr-contact" />
                            </div>
                            <div className="column is-narrow">
                                <p className="title is-3 mb-1 contact-title">Address:</p>
                                <p className="is-6 has-text-dark">Start Work, 87 rue de la république en face UPES</p>
                                <p className="is-6 has-text-dark">2033 Mégrine coteaux</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-narrow">
                                <hr className="orange-hr-contact" />
                            </div>
                            <div className="column is-narrow">
                                <p className="title is-3 mb-1 contact-title">Numéro de téléphones:</p>
                                <p className="is-6 has-text-dark">92 999 737</p>
                                <p className="is-6 has-text-dark">27 643 085</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-narrow">
                                <hr className="orange-hr-contact" />
                            </div>
                            <div className="column is-narrow">
                                <p className="title is-3 mb-1 contact-title">Email:</p>
                                <p className="is-6 has-text-dark">tucnospro@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6 contact-form-col">
                        <p className="title is-1 has-text-dark">Envoyez-nous un message</p>
                        <form className="has-text-left-desktop" onSubmit={submitHandle}>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Nom</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="lastname" placeholder="Votre nom" onChange={(event) => setNom(event.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Prénom</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Votre prénom" onChange={(event) => setPrenom(event.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="columns is-mobile">
                                    <div className="column pb-0 pr-0 is-narrow">
                                        <label className="label">Sujet</label>
                                    </div>
                                    <div className="column pb-0 pr-0 is-narrow">
                                        <p className="orange-star">*</p>
                                    </div>
                                </div>
                                <div className="control">
                                    <input className="input" type="job" placeholder="Sujet" onChange={(event) => setSujet(event.target.value)} required />
                                </div>
                            </div>
                            <div class="field">
                                <div className="columns is-mobile">
                                    <div className="column pb-0 pr-0 is-narrow">
                                        <label className="label">Message</label>
                                    </div>
                                    <div className="column pb-0 pr-0 is-narrow">
                                        <p className="orange-star">*</p>
                                    </div>
                                </div>
                                <div className="control">
                                    <textarea class="textarea" placeholder="Ecrivez votre message" onChange={(event) => setMessage(event.target.value)} required></textarea>
                                </div>
                            </div>
                            <div className="control">
                                <button className="button is-link" type="submit">Envoyez</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}