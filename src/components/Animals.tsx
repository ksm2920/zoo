import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";

export function Animals() {
    let defualtValue: Animal[] = [];
    const [animals, getAnimals] = useState(defualtValue);
    
    let liTags = animals.map((animal) => {
        return(
            <li key={animal.id}>
            <h1>{animal.name}</h1>
            <img src={animal.imageUrl} alt="" />
            <p>{animal.shortDescription}</p>
            <Link to={"/animal/" + animal.id}>Show more</Link>
            </li>
            )
        });
        
        useEffect(() => {
            axios.get<Animal[]>('https://animals.azurewebsites.net/api/animals')
            .then(response => {
                getAnimals(response.data)
            });
            localStorage.setItem('Animals', JSON.stringify(animals));
         }, []);
        return (
            <ul>
                {liTags}
            </ul>
            );
        }