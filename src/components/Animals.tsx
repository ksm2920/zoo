import axios from "axios"
import { useEffect, useState } from "react"
import { Animal } from "../models/Animal";

export function Animals() {
    let defualtValue: Animal[] = [];
    const [animals, getAnimals] = useState(defualtValue);
    
    let liTags = animals.map((animal) => {
        return(
            <li>
            <h1>{animal.name}</h1>
            <img src={animal.imageUrl} alt="" />
            <p>{animal.shortDescription}</p>
            </li>
            )
        });
        
        useEffect(() => {
            axios.get<Animal[]>('https://animals.azurewebsites.net/api/animals')
            .then(response => {
                getAnimals(response.data)
            });
        }, []);
        return (
            <ul>
                {liTags}
            </ul>
            );
        }