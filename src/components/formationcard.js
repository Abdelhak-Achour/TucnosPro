import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/animations/perspective.css';
import durationIcon from '../images/duration.svg';
import dateIcon from '../images/date.svg';

export function FormationCard(props)
{
    return (
        <>
            <div className="formation-card-section-box">
                <Tippy content = {
                    <>
                        <p className='title is-4 mt-4 mb-2 mr-4 ml-4 has-text-dark'>{props.name}</p>
                        
                        <span className="icon-text mr-4 ml-4">
                            <span className="icon">
                                <img className="duration-icon" src={durationIcon} alt = "*" />
                            </span>
                            <div className="m-auto">
                                <span className='subtitle has-text-dark lvl-8 mt-2 mb-2'>
                                    {props.duration + " heures"}
                                </span>
                            </div>
                        </span>
                        <br />
                        <span className="icon-text mt-2 mr-4 ml-4">
                            <span className="icon">
                                <img className="date-icon" src={dateIcon} alt = "*" />
                            </span>
                            <div className="m-auto">
                                <span className='subtitle has-text-dark lvl-8 mt-2 mb-2'>
                                    {props.date}
                                </span>
                            </div>
                        </span>

                        <p className='subtitle has-text-dark lvl-7 mt-2 mb-1 mr-4 ml-4'>{props.description}</p>

                        <div className="m-auto has-text-centered">
                            <button className="button is-link mt-2 mb-3 mx-auto">voir plus</button>
                        </div>
                    </>
                }
                interactive = {true}
                placement = {'right'}
                offset = {[0,7]}
                theme = {'light'}
                animation = {'fade'}
                >
                    <div className='card is-shadowless mb-5'>
                        <div className='formation-card-image has-text-centered'>
                            <img className='formation-card-image' src = {require(`../images/${props.image}`)} alt = "categorie" />
                        </div>
                        <div className='card-content p-1'>
                            <p className='title lvl-5 mt-1 mb-1 mr-0 ml-0 has-text-dark'>{props.name.length > 43 ? props.name.slice(0, 41) + "..." : props.name}</p>
                            <p className='subtitle has-text-dark lvl-10 mt-1 mb-1 mr-0 ml-0'>{props.formateur}</p>
                            <p className='tag orange-bg lvl-8 mt-1 mb-1 mr-0 ml-0'>{props.price} TND</p>
                        </div>
                    </div>
                </Tippy>
            </div>
        </>
    )
}