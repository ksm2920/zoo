import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Animal } from "../models/Animal";

interface IParams {
    id: string;
}

export function AnimalDetail() {
    let {id} = useParams<IParams>(); 
    const [animal, setAnimal] = useState(Animal.getEmpty());
    const [animals, setAnimals] = useState([] as Animal[]);
    const [isFed, setIsFed] = useState(false);
    
    useEffect(() => {
        let animalsFromLSString = localStorage.getItem('Animals');
        if (animalsFromLSString) {
            let animalList = JSON.parse(animalsFromLSString);            
            let animalID = parseInt(id)-1;
            let theAnimal = animalList[animalID];
            setAnimal(theAnimal);
            setAnimals(animalList);

            if (Animal.isHungry(theAnimal)) {
                setIsFed(false);
            } else {
                setIsFed(true);
            }
        };
    }, [id]);
    
    function feed() {
        animal.isFed = true;
        animal.lastFed = new Date().toLocaleString();
        animals[animals.findIndex( a => a.id === animal.id)] = animal;
        localStorage.setItem(`Animals`, JSON.stringify(animals));  
        setIsFed(true);      
        setAnimal({...animal});
        setTimeout(() => {
            setIsFed(false);
        }, 10800000);
    }
    
    return(
        <div className="animalList">
            <h1>{animal.name} (Latin name: {animal.latinName})</h1>
            <h3>{isFed ? `${animal.name} is now full!` : `${animal.name} is now hungry!`}</h3>
            <p>Last fed: {animal.lastFed}</p>
            <button id="feedBtn" onClick={feed} disabled={isFed} >Feed {animal.name}</button>             
            <img src={animal.imageUrl} alt="" />
            <p>Year of Birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.longDescription}</p>                         
            <p><a href="/" id="goBack">Go back</a></p>
        </div>);
    }