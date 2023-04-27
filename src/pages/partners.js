import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import axios from "axios";

export function Partners ()
{
    async function getPartners()
    {
        try
        {
            
            const response = await axios.get(`http://localhost:3001/partner`);
            setPartners(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [partners, setPartners] = useState({partners: []});

    useEffect(() => {
        getPartners();
    }, [])

    return (
        <>
            <Navbar2 />
            <div className='partners-section'>
                <div className='box partners-container'>
                    {
                        partners.partners.length != 0 ?
                        <>
                            {
                                partners.partners.map((partner) => {
                                    return (
                                        <img key={partner._id} className='partner-image' src = {require(`../images/${partner.image}`)} alt = {partner.nom} />
                                    )
                                })
                            }
                        </> :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}