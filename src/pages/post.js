import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Post()
{
    const {id} = useParams();

    const [blogData, setBlogData] = useState({blog: {}})

    async function getBlogData()
    {
        try
        {
            const response = await axios.get(`http://localhost:3001/blog/post/${id}`);
            setBlogData(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(() => {
        getBlogData();
    }, [id]);

    return (
        <>
            <Navbar2 />
            <div className="box post-div">
                
            </div>
        </>
    )
}