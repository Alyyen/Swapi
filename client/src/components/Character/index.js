import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import DisplayChar from "../../hooks/DisplayChar";

export default function Character() {
    const [char, getChar] = useState('');
    let id = useParams();
    let url = 'https://swapi.dev/api/people/' + id.id;

    const Character = () => {
        axios.get(`${url}`)
            .then((response) => {
                getChar(response.data);
            })
            .catch(error => console.log("ERROR = " + error));
    }

    useEffect(() => {
        Character();
    }, []);

    return (
        <div>
            <DisplayChar people={char}/>
        </div>
    )
}

