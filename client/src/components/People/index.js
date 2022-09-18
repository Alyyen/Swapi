import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GetAllPeople from "../../hooks/GetAllPeople";

export default function People() {
    const [people, getPeople] = useState('');
    let page = 1;

    const allPeople = () => {
        while (page < 10){
            let url = 'https://swapi.dev/api/people/?page=' + page;
            axios.get(`${url}`)
                .then((response) => {
                    const allPeople = response.data;
                    getPeople(allPeople);
                })
                .catch(error => console.log(error));
            page++;
        }
    }

    useEffect(() => {
        allPeople();
    }, []);

    return (
        <div className='container'>
            <GetAllPeople people={people} />
        </div>
    )
}

