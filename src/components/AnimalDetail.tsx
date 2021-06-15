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
    const [animals, setAnimals] = useState([] as Animal[]);
    
    console.log("AnimalDetail " + animal?.name);
    
    
    useEffect(() => {
        let animalsFromLSString = localStorage.getItem('Animals');
        if (animalsFromLSString) {
            let animalList = JSON.parse(animalsFromLSString);            
            let animalID = parseInt(id)-1;
            setAnimal(animalList[animalID]);
            // console.log("Animal: "+ animal.name);
            setAnimals(animalList);
        };
    }, [id]);
    
    function feed() {
        
        animal.isFed = !animal.isFed ;
        let d = new Date();
        animal.lastFed = d.toString();

        // animal.name = animal.name + ".";
        // console.log(animal.isFed);
        // console.log(animal.lastFed);
        
        animals[animals.findIndex( a => a.id == animal.id)] = animal;
        localStorage.setItem(`Animals`, JSON.stringify(animals));
        setAnimal({...animal});  
    }
    
    return(
        <div>
            <h1>Name: {animal.name}</h1>
            <h3>Latin name: {animal.latinName}</h3>
            <p>Year of Birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.longDescription}</p>             
            <p>Is fed?: {animal.isFed ? "Yes" : "No"} <button onClick={feed} disabled={animal.isFed}>Feed animal</button></p>             
            <p>Last fed: {animal.lastFed}</p>
            <img src={animal.imageUrl} alt="" />
            <a href="/">Go back</a>
        </div>);
    }