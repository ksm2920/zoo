import React, { useEffect, useState } from "react";
import { Animal } from "../models/Animal";

export function Notification() {
    const [hungryAnimals, setHungryAnimals] = useState([] as Animal[]);

    let aTags = hungryAnimals.map(a => {
        return (
        <a href={`/animal/${a.id}`} key={a.id}>{a.name}</a>
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
            {aTags}
            </div>
        </div>);
}