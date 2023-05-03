import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';
import axios from "axios";

export function Inscrire()
{
    const { id } = useParams();

    const [situations, setSituations] = useState([]);
    function changeSituation(snb)
    {
        if(snb === 0)
        {
            setSituations([true, false, false, false]);
            setSituation("étudiant");
        }
        else if(snb === 1)
        {
            setSituations([false, true, false, false]);
            setSituation("à la recherche d'un emploi");
        }
        else if(snb === 2)
        {
            setSituations([false, false, true, false]);
            setSituation("en poste");
        }
        else
        {
            setSituations([false, false, false, true]);
            setSituation("stagiare");
        }
    };

    const [levels, setLevels] = useState([]);
    function changeLevels(lnb)
    {
        if(lnb === 0)
        {
            setLevels([true, false, false, false, false, false, false]);
            setStudieslvl("lycée");
        }
        else if(lnb === 1)
        {
            setLevels([false, true, false, false, false, false, false]);
            setStudieslvl("licence");
        }
        else if(lnb === 2)
        {
            setLevels([false, false, true, false, false, false, false]);
            setStudieslvl("maitrise");
        }
        else if(lnb === 3)
        {
            setLevels([false, false, false, true, false, false, false]);
            setStudieslvl("master");
        }
        else if(lnb === 4)
        {
            setLevels([false, false, false, false, true, false, false]);
            setStudieslvl("ingénieur");
        }
        else if(lnb === 5)
        {
            setLevels([false, false, false, false, false, true, false]);
            setStudieslvl("doctorat");
        }
        else
        {
            setLevels([false, false, false, false, false, false, true]);
            setStudieslvl("autre");
        }
    };

    const [types, setTypes] = useState([]);
    function changeTypes(tnb)
    {
        if(tnb === 0)
        {
            setTypes([true, false]);
            setType("présentiel");
        }
        else
        {
            setTypes([false, true]);
            setType("en ligne");
        }
    };

    const [formationData, setFormationData] = useState({formation: {}});

    async function getFormationData()
    {
        try
        {
            var response = await axios.get(`http://localhost:3001/formation/${id}`);
            setFormationData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    useEffect(() => {
        getFormationData();
    }, [id]);

    const [lastname, setLastname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [addess, setAddress] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [situation, setSituation] = useState("");
    const [studieslvl, setStudieslvl] = useState("");
    const [studiesspecific, setStudiesspecific] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [type, setType] = useState("");
    const [questions, setQuestions] = useState("");
    const [mail, setMail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [validate, setValidate] = useState(false);

    async function submitHandle(event)
    {
        let contactmethod = "";
        if(mail)
        {
            contactmethod = contactmethod + "mail-";
        }
        if(phone)
        {
            contactmethod = contactmethod + "phone-";
        }
        if(validate)
        {
            contactmethod = contactmethod + "validate";
        }

        try
        {
            const response = await axios.post("http://localhost:3001/formation/inscrire", {
                id,
                lastname,
                name,
                email,
                addess,
                phonenumber,
                situation,
                studieslvl,
                studiesspecific,
                speciality,
                type,
                contactmethod,
                questions
            });
        }
        catch (err)
        {
            console.error(err)
        }
    }

    return(
        <>
            <Navbar2 />
            <div className="temoin">
                <p className="title is-1 has-text-dark is-family-primary">S'inscrire pour la formation {formationData.formation.name ? formationData.formation.name : ""}</p>
                <div className="box temoin-form-div">
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
                                        <input className="input" type="lastname" placeholder="Votre nom" onChange={(event) => setLastname(event.target.value)} required />
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
                                        <input className="input" type="name" placeholder="Votre prénom" onChange={(event) => setName(event.target.value)} required />
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
                                <input className="input" type="email" placeholder="Votre Email" onChange={(event) => setEmail(event.target.value)} required />
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
                                <input className="input" type="address" placeholder="Votre Addresse" onChange={(event) => setAddress(event.target.value)} required />
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
                                <input className="input" type="phonenb" placeholder="Votre Numéro de téléphone" onChange={(event) => setPhonenumber(event.target.value)} required />
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
                                <input className="input" type="phonenb" placeholder="Spécifiez votre niveau d'étude" onChange={(event) => setStudiesspecific(event.target.value)} />
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
                                <input className="input" type="phonenb" placeholder="Votre spécialité" onChange={(event) => setSpeciality(event.target.value)} required />
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
                                    <input type="checkbox" value="mail" onClick={() => setMail(!mail)}/>
                                    Je veux être contacté par mail par un responsable
                                </label>
                            </div>
                            <div className="control">
                                <label className="checkbox mr-2">
                                    <input type="checkbox" value="phone" onClick={() => setPhone(!phone)}/>
                                    Je veux être contacté par téléphone par un responsable
                                </label>
                            </div>
                            <div className="control">
                                <label className="checkbox mr-2">
                                    <input type="checkbox" value="validate" onClick={() => setValidate(!validate)}/>
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
                                    <p className="orange-star"></p>
                                </div>
                            </div>
                            <div className="control">
                                <textarea class="textarea" placeholder="Vos questions" rows="7" onChange={(event) => setQuestions(event.target.value)}></textarea>
                            </div>
                        </div>

                        <div className="control">
                            <button className="button is-link" type="submit">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}