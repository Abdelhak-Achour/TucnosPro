import React from "react";

export function FormationLine(props)
{
    if (props.name2)
    {
        return (
            <>
                <div className='columns'>
                    <div className='column'>
                        <div className='box formation-box'>
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
                                                    <p className='has-text-grey'>{props.duration1}</p>
                                                    <p className='has-text-grey'>Date:</p>
                                                    <p className='has-text-grey'>{props.date1}</p>
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
                    <div className='column'>
                        <div className='box formation-box'>
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
                                                    <p className='has-text-grey'>{props.duration2}</p>
                                                    <p className='has-text-grey'>Date:</p>
                                                    <p className='has-text-grey'>{props.date2}</p>
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
                        <div className='box formation-box'>
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
                                                    <p className='has-text-grey'>{props.duration1}</p>
                                                    <p className='has-text-grey'>Date:</p>
                                                    <p className='has-text-grey'>{props.date1}</p>
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
                </div>
            </>
        )
    }
}