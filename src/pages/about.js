import React from "react";
import proposImage from '../images/propos.jpg';

export function About ()
{
    return (
        <>
            <div className="presentation-section">
                <div className="columns">
                    <div className="column is-3">
                        <img className="pres-img" src={proposImage} alt="propos" />
                    </div>
                    <div className="column">
                        <p className="has-text-dark pres-text">TucnosPRO est un centre de formation enregistré sous le N°34-056-20. C'est un établissement de formation professionnelle et de consulting qui opère dans divers domaine reliés principalement aux nouvelles technologies.</p>
                        <br />
                        <p className="has-text-dark pres-text">Notre centre propose des formations certifiantes et ciblées aux profit des étudiants, professionnels, chefs d'entreprise ou toute autre entité voulant mettre en place un parcous de formation pour ces collaborateurs. Nous accompagnons également toutes les personnes qui veulent se lancer dans un parcours de reconversion professionnelle en leur proposons des solutions adaptées à keur rythme. TucnosPRO offre plusieurs catégories de formation: Data Science, Intelligence Artificielle, Développement et coding, Ethical Hacking et sécurité informatique, Fibre optique et télécommunications, réseaux et système, etc</p>
                        <br />
                        <p className="has-text-dark pres-text">Les sessions qu'on proposent font l'objet d'une sélection très stricte pour répondre aux exigences du marché de l'emploi aussi bien en Tunisie et à l'étranger. Nous mettons également à votre disposition une liste d'experts certifiés dans leur domaine pour vous aider à bien démarrer votre apprentissage et fournir l'assistance nécessaire.</p>
                        </div>
                </div>
            </div>
            <p className = "is-size-1 has-text-dark">
                about page
            </p>
        </>
    )
}