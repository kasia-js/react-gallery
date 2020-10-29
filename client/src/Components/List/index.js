import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import MovieInfo from '../MovieInfo';

const urlAdd =  require("../../assets/add.png"); 
const urlTick =  require("../../assets/tick.png");
const details = require("../../assets/detail.png");

export default ({value,heading,handleClickPassed,onDetailClick}) => {

    const buttonIcon = heading === "My List" ? urlTick : urlAdd
    let section;
    if (heading === "My List"  && value.length>0) {
      section = "My List";
    } else if (heading === "Discover") {
      section ="Discover";
     } 
    
    const listElements = value.map(movie => (
      <>
        <div className = "parent"> 
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="pics" width="250" height="250" />
          <div className = "overlapping"> 
            <p>{movie.title}</p>
              <button  type="button"  onClick={() => handleClickPassed(movie)}>
              <img src = {buttonIcon} alt="added button" width="25" height="25"/>
              </button>
              <button className = "details" type="button" onClick={() => onDetailClick(movie)}>
              <img src = {details} alt="detail button" width="30" height="30"/>
              </button>
          </div>
          </div>
      </>
    )
    )
    
    
    return (
      <>
      <h2>{section}</h2>
        <div className="show">{listElements} </div>
      </>
    ) 
  }
  

  
  
  
  
  
  
  
      
      