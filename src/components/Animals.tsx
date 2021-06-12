import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";

export function Animals() {
    let defaultValue: Animal[] = [];
    const [animals, setAnimals] = useState(defaultValue);

    let liTags = animals.map((animal) => {
        return (
            <li key={animal.id}>
                <h1>{animal.name}</h1>
                <img src={animal.imageUrl} alt="" />
                <p>{animal.shortDescription}</p>
                <Link to={"/animal/" + animal.id}>Show more</Link>
            </li>
        )
    });

    useEffect(() => {
        console.log("Animal.UseEffect runned")
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
        <ul>
            {liTags}
        </ul>
    );
}