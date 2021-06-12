import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";

interface IParams {
    id: string;
}
export function AnimalDetail() {
    let {id} = useParams<IParams>(); 
    const [animal, setAnimal] = useState(Animal.getEmpty());
    
    useEffect(() => {
        axios.get('https://animals.azurewebsites.net/api/animals/' + id)
        .then(response => { setAnimal(response.data) });
    }, [id]);
    
    return (
        <div>
            <h1>Name: {animal.name}</h1>
            <h3>Latin name: {animal.latinName}</h3>
            <p>Year of birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.longDescription}</p>
            <p>Is fed?: {animal.isFed ? "Yes" : "No"}</p>
            <p>Last fed: {animal.lastFed}</p>
            <img src={animal.imageUrl} alt="" />
            <a href="/">Go back</a>
        </div>
        )
    }