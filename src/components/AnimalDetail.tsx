// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";

interface IParams {
    id: string;
}

export function AnimalDetail() {
    let {id} = useParams<IParams>(); 
    const [animal, setAnimal] = useState(Animal.getEmpty());
    console.log(animal);
    
    useEffect(() => {
        let animalsFromLSString = localStorage.getItem('Animals');
        if (animalsFromLSString) {
            let animalList = JSON.parse(animalsFromLSString);
            let animalID = parseInt(id)-1;
            setAnimal(animalList[animalID]);
        };
    }, [id]);
    
    return(
        <div>
            <h1>Name: {animal.name}</h1>
            <h3>Latin name: {animal.latinName}</h3>
            <p>Year of Birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.longDescription}</p>             
            <p>Is fed?: {animal.isFed ? "Yes" : "No"} <button>Feed Now</button></p>             
            <p>Last fed: {animal.lastFed}</p>
            <img src={animal.imageUrl} alt="" />
            <a href="/">Go back</a>
        </div>);
    }