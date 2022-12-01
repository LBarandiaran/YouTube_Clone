import React, { useState } from 'react';
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./SearchBar.css";

const Searchbar = (props) => {

const [searchTerm, setSearchTerm] = useState('');

function searchVideos(event){
    event.preventDefault();
    props.setVideos()
}

    return (
        <form onSubmit={searchVideos}>
            <input placeholder='Search Videos' type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit' >Search</button>
        </form>
    );
}

export default Searchbar;