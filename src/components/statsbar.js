import React, { useEffect, useState } from "react";
import axios from "axios";

export function StatsBar()
{
    async function getStats()
    {
        try
        {
            
            const response = await axios.get("http://localhost:3001/stats");
            setStats(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [stats, setStats] = useState({stats: []});

    useEffect(() => {
        getStats()
    }, []);

    return (
        <div className="columns ml-5 mt-3">
            <div className="column is-narrow">
                visites: {stats.stats[0] ? stats.stats[0].visits : ""}
            </div>
            <div className="column is-narrow">
                vues: {stats.stats[0] ? stats.stats[0].views : ""}
            </div>
        </div>
    )
}