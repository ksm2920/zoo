import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";

export function Notification() {
    const [hungryAnimals, setHungryAnimals] = useState([] as Animal[]);

    let linkTags = hungryAnimals.map(a => {
        return (
        <Link to ={`/animal/${a.id}`} key={a.id}>{a.name}</Link>
        )
    });

    useEffect(() => {
        setInterval(() => {
            let allAnimals = JSON.parse(localStorage.getItem('Animals')!);
            let hungryAnimals: Animal[] = [];

            allAnimals.forEach((a: Animal) => {
                if (Animal.isHungry(a)) {
                    hungryAnimals.push(a);
                }
            });
            setHungryAnimals(hungryAnimals);
        }, 1000);

    }, []);

    return (
        <div className="notice">
            <h3>Hungry animals: <b>{hungryAnimals.length}</b></h3>
            <div id="hungryAnimalList">
            {linkTags}
            </div>
        </div>);
}