import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function DisplayChar(props) {
    const display = (props) => {
        const {people} = props;

        if (Object.keys(people).length > 0) {
            return (
                <div className='col-4' key={people.url}>
                    <span>Name : {people.name}</span><br/>
                    <span>Hair color : {people.hair_color}</span><br/>
                    <span>Eye color : {people.eye_color}</span><br/>
                    <span>Birth year : {people.birth_year}</span><br/>
                    <span>Gender : {people.gender}</span><br/>
                    <span>Created at : {people.created}</span><br/>
                    <span>Edited at : {people.edited}</span><br/>
                    <span>Starships : {people.starships}</span><br/>
                </div>
            )
        } else {
            return (
                <h3>Loading...</h3>
            )
        }
    }

    return (
        <>
            {display(props)}
        </>
    )
}