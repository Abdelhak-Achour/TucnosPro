import React, { useState } from "react";
import { Navbar2 } from "../components/navbar2";
import imageUpload from '../images/image-upload.svg';
import axios from "axios";

export function Temoin()
{
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Display file name when select file
        let fileInputs = document.querySelectorAll('.file.has-name')
        for (let fileInput of fileInputs) {
          let input = fileInput.querySelector('.file-input')
          let name = fileInput.querySelector('.file-name')
          input.addEventListener('change', () => {
            let files = input.files
            if (files.length === 0) {
              name.innerText = 'photo'
            } else {
              name.innerText = files[0].name
            }
          })
        }
    // 2. Remove file name when form reset
    let forms = document.getElementsByTagName('form')
    for (let form of forms) {
    form.addEventListener('reset', () => {
        console.log('a')
        let names = form.querySelectorAll('.file-name')
        for (let name of names) {
        name.innerText = 'Aucune photo choisie'
        }
    })
    }
    });

    const [image, setImage] = useState('');
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [fonction, setFonction] = useState("");
    const [note, setNote] = useState("");
    const [temoigne, setTemoigne] = useState("");

    function handleImage(event)
    {
        setImage(event.target.files[0]);
    }

    async function submitHandle(event)
    {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('nom', nom);
        formData.append('prenom', prenom);
        formData.append('fonction', fonction);
        formData.append('note', note);
        formData.append('temoigne', temoigne);
        try
        {
            const response = await axios.post("http://localhost:3001/about/temoin", formData);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    return(
        <>
            <Navbar2 />
            <div className="temoin">
                <p className="title is-1 has-text-dark is-family-primary">Que pensez vous de votre expérience avec notre centre</p>
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
                                        <input className="input" type="lastname" placeholder="Nom" onChange={(event) => setNom(event.target.value)} required />
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
                                        <input className="input" type="name" placeholder="Prénom" onChange={(event) => setPrenom(event.target.value)} required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Votre fonction</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <input className="input" type="job" placeholder="Fonction" onChange={(event) => setFonction(event.target.value)} required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Votre photo</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="file has-name">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="image" accept="images/png,image/jpg,image/jpeg" onChange={handleImage} required />
                                    <span className="file-cta">
                                        <img className="image-upload-icon" src={imageUpload} alt="up" />
                                        <span className="file-label pl-2">
                                            Choisisez une photo ...
                                        </span>
                                    </span>
                                    <span className="file-name">
                                        Aucune photo choisie
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Notez nous (de 1 à 5)</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <div className="select">
                                    <select onChange={(event) => setNote(event.target.value)} required>
                                        <option value = "1">1</option>
                                        <option value = "2">2</option>
                                        <option value = "3">3</option>
                                        <option value = "4">4</option>
                                        <option value = "5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="columns is-mobile">
                                <div className="column pb-0 pr-0 is-narrow">
                                    <label className="label">Votre témoignage</label>
                                </div>
                                <div className="column pb-0 pr-0 is-narrow">
                                    <p className="orange-star">*</p>
                                </div>
                            </div>
                            <div className="control">
                                <textarea class="textarea" placeholder="Votre témoignage" onChange={(event) => setTemoigne(event.target.value)} required></textarea>
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-link" type="submit">Soumettre votre témoignage</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}