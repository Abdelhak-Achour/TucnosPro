import React, {useState, useEffect} from "react";
import { Navbar2 } from "../components/navbar2";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FormationCard } from "../components/formationcard";

export function Formations()
{
    const {id} = useParams();

    async function getFormationData()
    {
        try
        {
            if (id)
            {
                var response = await axios.get(`http://localhost:3001/formation/bycategory/${id}`);
            }
            else
            {
                var response = await axios.get(`http://localhost:3001/formation`);
            }
            
            setFormationData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function getCategoriesData()
    {
        try
        {
            const response = await axios.get("http://localhost:3001/category/");
            setCategoriesData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [formationData, setFormationData] = useState({formations: []});

    const [categoriesData, setCategoriesData] = useState({categories: []});

    useEffect(() => {
        getFormationData();
        getCategoriesData();
    }, [id])

    return (
        <div>
            <Navbar2 />
            <div className="box mt-6 is-shadowless">
                <div className="columns">
                    <div className="column is-narrow is-9">
                        <div className="articles-div">
                            <div className={formationData.formations.length != 0 ? 'box formations-page-container' : 'is-hidden box formations-page-container'}>
                                {
                                    formationData.formations.length != 0 ?
                                    <>
                                        {
                                            formationData.formations.map((formation) => {
                                                return (
                                                    <div key = {formation._id}>
                                                        <FormationCard
                                                            key = {formation._id}
                                                            id = {formation._id}
                                                            image = {formation.image}
                                                            name = {formation.name}
                                                            duration = {formation.duration}
                                                            date = {formation.date}
                                                            price = {formation.price}
                                                            description = {formation.description}
                                                            formateur = {formation.formateur}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </> :
                                    <></>
                                }
                            </div>
                            {
                                <div className="has-text-centered pt-6">
                                    <p className={formationData.formations.length != 0 ? "is-hidden title is-2 has-text-dark pt-6" : "title is-2 has-text-dark pt-6"}>Il n'y a pas encore de formation.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <div className="box m-0 mt-6">
                            <div className="mt-2">
                                <Link className={id ? "category-link has-text-dark lvl-5 mb-2 ml-1" : "category-link orange-text lvl-5 mb-2 ml-1"} to="/formations">Toutes les catégories</Link>
                            </div>
                            {
                                categoriesData.categories.map((category) => {
                                    return (
                                        <div key={category._id}>
                                            <div className="mt-2">
                                                <Link className={category._id === id ? "has-text-dark category-link lvl-5 ml-1 orange-text" : "has-text-dark category-link lvl-5 ml-1"} to={`/formations/bycategory/${category._id}`}>{category.name}</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}