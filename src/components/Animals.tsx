import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";

export function Animals() {
    let defaultValue: Animal[] = [];
    const [animals, setAnimals] = useState(defaultValue);

    let divTags = animals.map((animal) => {
        return (
            <div key={animal.id} className="container">
                 <h1>{animal.name}</h1>
                <img src={animal.imageUrl} alt="" />
                <p>{animal.shortDescription}</p>
                <Link to={"/animal/" + animal.id}>Show more</Link>
            </div>
        )
    });

    useEffect(() => {
        let animalsFromLSString = localStorage.getItem('Animals');

        if (animalsFromLSString) {
            setAnimals(JSON.parse(animalsFromLSString))
        } else {
            axios.get<Animal[]>('https://animals.azurewebsites.net/api/animals')
            .then(response => {
                localStorage.setItem('Animals', JSON.stringify(response.data));
                setAnimals(response.data);
            });
        }
    }, []);
    return (
        <div className="animalList">
            {divTags}
        </div>
    );
}