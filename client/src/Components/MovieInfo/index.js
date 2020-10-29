import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import '../../App.css';
const back = require ('../../assets/back.png')

//export default ({value,heading,handleClickPassed, onBackClick}) => {
    export default (props) => {
    let { id } = useParams();
    const location = useLocation();
    const {movie} = location.state.id;

    console.log(movie, "params from path");
    return (
        <>
        <h3> {id} From movie tile routing</h3>
        <h2>On new page</h2>
        <img src={back} alt="back"/>
        {/* <div className="outer">
        <div className="left">
        <h1>{value.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w300/${value.poster_path}`} alt="pics" width="240" height="240" />
        </div>
        <div className="right">
        <p>{value.overview}</p>
        <button className="back-home" type="button" onClick= {()=> onBackClick()}>
        <img src = {back} alt="detail button" width="25" height="25"/>

        </button>
        </div>
        </div> */}
        
        </>
    )
}