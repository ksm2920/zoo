// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Animal } from "../models/Animal";

export function Notification() {
    const [hungryAnimals, setHungryAnimals] = useState([] as Animal[]);


    useEffect(() => {

        setInterval(() => {
            // console.log("Checking hungry animals");
            let allAnimals = JSON.parse(localStorage.getItem('Animals')!);
            let hungryAnimals: Animal[] = [];

            allAnimals.forEach((a: Animal) => {
                if (Animal.isHungry(a)) {
                    hungryAnimals.push(a);
                }
            });
            setHungryAnimals(hungryAnimals);
        }, 3000)
    }, []);


    return (
        <div>
            Hungry animals: {hungryAnimals.length}
            {hungryAnimals.map(a => {
                return <p key={a.id}>{a.name} is hungry. <a href={`/animal/${a.id}`}>Show</a></p>
            })}
        </div>);
}