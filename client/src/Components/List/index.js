import React from 'react';

import '../../App.css';

const urlAdd =  require("../../assets/btn-add.svg"); 
const urlTick =  require("../../assets/btn-added.svg");

export default ({value,heading,handleClickPassed}) => {

    const buttonIcon = heading === "My List" ? urlTick : urlAdd
    let section;
    if (heading === "My List"  && value.length>0) {
      section = "My List";
    } else if (heading === "Discover") {
      section ="Discover";
     } 
    
    const listElements = value.map(movie => (
      <>
        <div className = "inner-container"> 
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="pics" width="150" height="200" />
          <div className = "overlapping"> 
            <p>{movie.title}</p>
              <button  type="button"  onClick={() => handleClickPassed(movie)}>
              <img src = {buttonIcon} alt="added button" />
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
  

  
  
  
  
  
  
  
      
      