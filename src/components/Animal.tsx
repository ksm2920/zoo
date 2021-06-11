import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { AnimalDetail } from "../models/AnimalDetail";

interface IParams {
    id: string;
}
export function Animal() {
    let {id} = useParams<IParams>(); 

    let defualtValue: AnimalDetail = {
        id: '',
        name: '',
        latinName: '',
        longDescription: '',
        imageUrl: '',
        isFed: false,
    }

    const [animal, getAnimal] = useState(defualtValue);

    useEffect(() => {
        axios.get('https://animals.azurewebsites.net/api/animals/' + id)
        .then(response => { getAnimal(response.data) });
    }, [id]);

    return (
    <div>
        <h1>Name: {animal.name}</h1>
        <h3>Latin name: {animal.latinName}</h3>
        <p>Description: {animal.longDescription}</p>
        <p>is Fed: {animal.isFed}</p>
        <img src={animal.imageUrl} alt="" />
        <a href="/">Go back</a>
    </div>
    )
}