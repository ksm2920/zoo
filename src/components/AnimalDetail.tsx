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
            // console.log("Animal: "+ animal.name);
            setAnimals(animalList);

            if (Animal.isHungry(theAnimal)) {
                // console.log("useffect: animal is hungry")
                setIsFed(false);
            } else {
                // console.log("useffect: animal is NOT hungry")
                setIsFed(true);
            }
        };
    }, [id]);
    
    function feed() {
        animal.isFed = true;
        let d = new Date();
        animal.lastFed = d.toLocaleString();
        animals[animals.findIndex( a => a.id === animal.id)] = animal;
        localStorage.setItem(`Animals`, JSON.stringify(animals));        
        setAnimal({...animal});
        setIsFed(true);
    }
    
    return(
        <div className="animalList">
            <h1>{animal.name} (Latin name: {animal.latinName})</h1>
            <h3>{isFed ? `${animal.name} is now full!` : `${animal.name} is now hungry!`} <button onClick={feed} disabled={isFed} >Feed {animal.name}</button></h3>             
            <p>Last fed: {animal.lastFed}</p>
            <p>Year of Birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.longDescription}</p>                         
            <img src={animal.imageUrl} alt="" />
            <p><a href="/" id="goBack">Go back</a></p>
        </div>);
    }