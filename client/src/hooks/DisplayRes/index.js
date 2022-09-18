import React from 'react';
import {Link} from 'react-router-dom';

export default function DisplayRes(props) {
    const display = (props) => {
        const {people} = props;

        if (Object.keys(people).length > 0) {
            return (
                people.map((data) => {
                    return (
                        <div className='col-4' key={data.url}>
                            <span>{data.name}</span><br/><br/>
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
            {display(props)}
        </>
    )
}