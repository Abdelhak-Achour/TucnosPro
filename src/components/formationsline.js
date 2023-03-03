import React from "react";

export function FormationLine(props)
{
    if (props.name2)
    {
        return (
            <>
                <div className='columns'>
                    <div className='column'>
                        <div className="card formation-outer-card is-paddingless">
                            <div className="card-content is-paddingless">
                                <div className='box formation-box is-shadowless'>
                                    <div className='columns is-gapless'>
                                        <div className='column image-column'>
                                            <img className='formation-image' src = {require(`../images/${props.image1}`)} alt = "formation" />
                                        </div>
                                        <div className='column info-column'>
                                            <div className='card is-shadowless'>
                                                <div className='card-content is-paddingless'>
                                                    <p className='title is-4 has-text-dark my-1'>{props.name1}</p>
                                                    <div className='columns'>
                                                        <div className='column timing-column is-gapless'>
                                                            <p className='has-text-grey'>{props.duration1} heures</p>
                                                            <p className='has-text-grey'>Date:</p>
                                                            <p className='has-text-grey'>{props.date1}</p>
                                                            <span className="tag is-link orange-bg is-medium my-2">{props.price1} TND</span>
                                                        </div>
                                                        <div className='column'>
                                                            <p className='has-text-grey info-text'>{props.description1}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">voir plus</a>
                            </footer>
                        </div>
                    </div>
                    <div className='column'>
                        <div className="card formation-outer-card is-paddingless">
                            <div className="card-content is-paddingless">
                                <div className='box formation-box is-shadowless'>
                                    <div className='columns is-gapless'>
                                        <div className='column image-column'>
                                            <img className='formation-image' src = {require(`../images/${props.image2}`)} alt = "formation" />
                                        </div>
                                        <div className='column info-column'>
                                            <div className='card is-shadowless'>
                                                <div className='card-content is-paddingless'>
                                                    <p className='title is-4 has-text-dark my-1'>{props.name2}</p>
                                                    <div className='columns'>
                                                        <div className='column timing-column is-gapless'>
                                                            <p className='has-text-grey'>{props.duration2} heures</p>
                                                            <p className='has-text-grey'>Date:</p>
                                                            <p className='has-text-grey'>{props.date2}</p>
                                                            <span className="tag is-link orange-bg is-medium my-2">{props.price2} TND</span>
                                                        </div>
                                                        <div className='column'>
                                                            <p className='has-text-grey info-text'>{props.description2}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">voir plus</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else
    {
        return (
            <>
                <div className='columns'>
                    <div className='column'>
                        <div className="card formation-outer-card is-paddingless">
                            <div className="card-content is-paddingless">
                                <div className='box formation-box is-shadowless'>
                                    <div className='columns is-gapless'>
                                        <div className='column image-column'>
                                            <img className='formation-image' src = {require(`../images/${props.image1}`)} alt = "formation" />
                                        </div>
                                        <div className='column info-column'>
                                            <div className='card is-shadowless'>
                                                <div className='card-content is-paddingless'>
                                                    <p className='title is-4 has-text-dark my-1'>{props.name1}</p>
                                                    <div className='columns'>
                                                        <div className='column timing-column is-gapless'>
                                                            <p className='has-text-grey'>{props.duration1} heures</p>
                                                            <p className='has-text-grey'>Date:</p>
                                                            <p className='has-text-grey'>{props.date1}</p>
                                                            <span className="tag is-link orange-bg is-medium my-2">{props.price1} TND</span>
                                                        </div>
                                                        <div className='column'>
                                                            <p className='has-text-grey info-text'>{props.description1}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">voir plus</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}