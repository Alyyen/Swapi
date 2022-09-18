import React from 'react';
import {Link} from 'react-router-dom';

export default function GetAllPeople(props) {
    const displayPeople = (props) => {
        const {people} = props;

        if (Object.keys(people).length > 0) {
            let url = 0;
            if (people.next=== "https://swapi.dev/api/people/?page=2"){
                url = 0;
            } else if (people.next=== "https://swapi.dev/api/people/?page=3"){
                url = 10;
            } else if (people.next=== "https://swapi.dev/api/people/?page=4"){
                url = 20;
            } else if (people.next=== "https://swapi.dev/api/people/?page=5"){
                url = 30;
            } else if (people.next=== "https://swapi.dev/api/people/?page=6"){
                url = 40;
            } else if (people.next=== "https://swapi.dev/api/people/?page=7"){
                url = 50;
            } else if (people.next=== "https://swapi.dev/api/people/?page=8"){
                url = 60;
            } else if (people.next=== "https://swapi.dev/api/people/?page=9"){
                url = 70;
            } else {
                url = 80;
            }
            return (
                people.results.map((data) => {
                    url++;
                    return (
                        <div className='col-4' key={data.url}>
                            <Link
                                className="btn btn-dark btn-lg"
                                role="button"
                                to={`/people/${url}`}
                            >{data.name}</Link><br/><br/>
                        </div>
                    )
                })
            )
        } else {
            return (
                <h3>Loading...</h3>
            )
        }
    }

    return (
        <>
            {displayPeople(props)}
        </>
    )
}