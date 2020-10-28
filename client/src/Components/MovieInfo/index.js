import React from 'react';

import '../../App.css';
const back = require ('../../assets/back.png')

export default ({value,heading,handleClickPassed, onBackClick}) => {
    return (
        <>
        <div className="outer">
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
        </div>
        
        </>
    )
}