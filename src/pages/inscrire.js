import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';

export function Inscrire()
{
    const { id } = useParams();

    const [situations, setSituations] = useState([]);
    function changeSituation(snb)
    {
        if(snb === 0)
        {
            setSituations([true, false, false, false]);
        }
        else if(snb === 1)
        {
            setSituations([false, true, false, false]);
        }
        else if(snb === 2)
        {
            setSituations([false, false, true, false]);
        }
        else
        {
            setSituations([false, false, false, true]);
        }
    };

    const [levels, setLevels] = useState([]);
    function changeLevels(lnb)
    {
        if(lnb === 0)
        {
            setLevels([true, false, false, false, false, false, false]);
        }
        else if(lnb === 1)
        {
            setLevels([false, true, false, false, false, false, false]);
        }
        else if(lnb === 2)
        {
            setLevels([false, false, true, false, false, false, false]);
        }
        else if(lnb === 3)
        {
            setLevels([false, false, false, true, false, false, false]);
        }
        else if(lnb === 4)
        {
            setLevels([false, false, false, false, true, false, false]);
        }
        else if(lnb === 5)
        {
            setLevels([false, false, false, false, false, true, false]);
        }
        else
        {
            setLevels([false, false, false, false, false, false, true]);
        }
    };

    const [types, setTypes] = useState([]);
    function changeTypes(tnb)
    {
        if(tnb === 0)
        {
            setTypes([true, false]);
        }
        else
        {
            setTypes([false, true]);
        }
    };

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
                                    <input type="radio" value="Etudiant" checked={situations[0]} onClick={() => {changeSituation(0)}} />
                                    Etudiant
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="A la recherche d'emploi" checked={situations[1]} onClick={() => {changeSituation(1)}} />
                                    A la recherche d'emploi
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="En poste" checked={situations[2]} onClick={() => {changeSituation(2)}} />
                                    En poste
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Stagiaire" checked={situations[3]} onClick={() => {changeSituation(3)}} />
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
                                    <input type="radio" value="Lycée" checked={levels[0]} onClick={() => {changeLevels(0)}} />
                                    Lycée
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Licence" checked={levels[1]} onClick={() => {changeLevels(1)}} />
                                    Licence
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="maitrise" checked={levels[2]} onClick={() => {changeLevels(2)}} />
                                    maitrise
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Master" checked={levels[3]} onClick={() => {changeLevels(3)}} />
                                    Master
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Ingénieur" checked={levels[4]} onClick={() => {changeLevels(4)}} />
                                    Ingénieur
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Doctorat" checked={levels[5]} onClick={() => {changeLevels(5)}} />
                                    Doctorat
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Autre" checked={levels[6]} onClick={() => {changeLevels(6)}} />
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
                                    <input type="radio" value="Lycée" checked={types[0]} onClick={() => {changeTypes(0)}} />
                                    Présentiel
                                </label>
                                <label className="radio mr-2">
                                    <input type="radio" value="Licence" checked={types[1]} onClick={() => {changeTypes(1)}} />
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
                                <label className="checkbox mr-2">
                                    <input type="checkbox" value="mail"/>
                                    Je veux être contacté par mail par un responsable
                                </label>
                            </div>
                            <div className="control">
                                <label className="checkbox mr-2">
                                    <input type="checkbox" value="phone"/>
                                    Je veux être contacté par téléphone par un responsable
                                </label>
                            </div>
                            <div className="control">
                                <label className="checkbox mr-2">
                                    <input type="checkbox" value="validate"/>
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