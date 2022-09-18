import {Form,} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import DisplayRes from "../../hooks/DisplayRes";

export default function Searchbar() {
    const [res, getRes] = useState('');
    const onFormChange = (e) => {
        e.preventDefault();
        let searchVal = document.querySelector("input[type=search]").value;
        let url = 'https://swapi.dev/api/people/?search=' + searchVal;

        axios.get(`${url}`)
            .then((response) => {
                console.log(response);
                getRes(response.data.results);
            })
            .catch(error => console.log(error));
    };

    console.log(res);

    if (res) {
        return (
            <div>
                <Form onChange={onFormChange} className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>
                <h4>Result(s):</h4>
                <DisplayRes people={res}/>
                <hr/>
            </div>
        )
    } else {
        return (
            <div>
                <Form onChange={onFormChange} className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>
            </div>
        )
    }

}