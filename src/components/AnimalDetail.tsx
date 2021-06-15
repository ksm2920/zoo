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
        <div>
            <h1>Name: {animal.name}</h1>
            <h3>Latin name: {animal.latinName}</h3>
            <p>{isFed ? `${animal.name} is full!` : `${animal.name} is hungry!`} <button onClick={feed} disabled={isFed} >Feed {animal.name}</button></p>             
            <p>Last fed: {animal.lastFed}</p>
            <p>Year of Birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.longDescription}</p>                         
            <img src={animal.imageUrl} alt="" />
            <a href="/">Go back</a>
        </div>);
    }