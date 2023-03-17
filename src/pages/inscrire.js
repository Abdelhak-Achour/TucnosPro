import React from "react";
import { useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';

export function Inscrire()
{
    const { id } = useParams();

    return(
        <>
            <Navbar2 />
            <div className="temoin">
                <p className="title is-1 has-text-dark is-family-primary">S'inscrire pour la formation {data.formations[id-1].name}</p>
                <div className="box temoin-form-div">
                    <form className="has-text-left-desktop">
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
                                        <input className="input" type="lastname" placeholder="Votre nom" />
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
                                        <input className="input" type="name" placeholder="Votre prénom" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Email</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <input className="input" type="email" placeholder="Votre Email" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Addresse</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <input className="input" type="address" placeholder="Votre Addresse" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Numéro de téléphone</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <input className="input" type="phonenb" placeholder="Votre Numéro de téléphone" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Situation actuelle</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <label className="radio mr-2">
                                    <input type="radio" value="Etudiant" checked={true} />
                                    Etudiant
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="A la recherche d'emploi" />
                                    A la recherche d'emploi
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="En poste" />
                                    En poste
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Stagiaire" />
                                    Stagiaire
                                </label>
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Niveau des études</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <label className="radio mr-2">
                                    <input type="radio" value="Lycée" checked={true} />
                                    Lycée
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Licence" />
                                    Licence
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="maitrise" />
                                    maitrise
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Master" />
                                    Master
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Ingénieur" />
                                    Ingénieur
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Doctorat" />
                                    Doctorat
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Autre" />
                                    Autre
                                </label>
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Spécifiez</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star"></p>
                                </div>
                            </div>
                            <div className="control">
                                <input className="input" type="phonenb" placeholder="Spécifiez votre niveau d'étude" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">spécialité</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <input className="input" type="phonenb" placeholder="Votre spécialité" />
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Type de formation souhaitée</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <label className="radio mr-2">
                                    <input type="radio" value="Lycée" checked={true} />
                                    Présentiel
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Licence" />
                                    En ligne
                                </label>
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Aidez nous à vous contacter</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <label className="radio mr-2">
                                    <input type="radio" value="mail"/>
                                    Je veux être contacté par mail par un responsable
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio mr-2">
                                    <input type="radio" value="phone"/>
                                    Je veux être contacté par téléphone par un responsable
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio mr-2">
                                    <input type="radio" value="validate"/>
                                    Je veux valider mon inscription et payer les frais de la formation directement
                                </label>
                            </div>
                        </div>

                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Si vous avez des questions</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <textarea class="textarea" placeholder="Vos questions" rows="7"></textarea>
                            </div>
                        </div>

                        <div className="control">
                            <button className="button is-link">Soumettre votre témoignage</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}