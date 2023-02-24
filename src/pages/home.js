import React from 'react';
import ehimage from '../images/eh.png'

export function Home()
{
    return (
        <>
            <div className = 'home-image'>
                <p className='title is-1 has-text-centered'>Tucnos Pro,</p>
                <p className='subtitle is-1 is-spaced has-text-centered'>Se former, c'est Avancer</p>
                <div className='columns'>
                    <div className='column is-2 has-text-centered is-offset-4'>
                        <button className='button is-medium is-primary'><a className='anchor-style' href='/formation'>VOIR LES COURS</a></button>
                    </div>
                    <div className='column is-2 has-text-centered'>
                        <button className='button is-medium is-primary'><a className='anchor-style' href='/contact'>CONTACTEZ-NOUS</a></button>
                    </div>
                </div>
            </div>
            
            <div className='card-section'>
                <div className='card'>
                    <div className='card-image has-text-centered'>
                        <img className='card-image' src = {ehimage} alt = 'EH-image' />
                    </div>
                    <div className='card-content'>
                        <p className='title is-3 has-text-dark has-text-centered'>Ethical Hacking</p>
                        <p className='has-text-dark has-text-centered'>L’Ethical Hacking est une démarche de sécurité informatique. Les « pirates éthiques » endossent alors le rôle des hackers malveillants pendant la durée d’une mission au sein.</p>
                    </div>
                    <footer className='card-footer has-text-centered'>
                        <p className='has-text-grey card-footer-item'>view</p>
                    </footer>
                </div>
            </div>

            <h1>it works</h1>
        </>
    )
}