import React, { useState } from 'react';

import '../../App.css';

const urlAdd =  require("../../assets/btn-add.svg"); 
const urlTick =  require("../../assets/btn-added.svg");

export default ({value,heading,handleClickPassed}) => {
  const [isHover, setIsHover] = useState(false)

    const buttonIcon = heading === "My List" ? urlTick : urlAdd
    let section;
    if (heading === "My List"  && value.length>0) {
      section = "MY LIST";
    } else if (heading === "Discover") {
      section ="DISCOVER";
     } 
    //  function setHover(title) {
    //   console.log("in reset hover true")
    //     setIsHover(title)
    //  }

    //  function resetHover() {
    //    console.log("in reset hover false")
    //    setIsHover(false)
    //  }
    
    const listElements = value.map(movie => (
      <>
        {/* <div className = "container" > */}
         <a href="#individualmovie" > <img className = "item" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="pics" width="200" height="250" />
         {/* <a href="#individualmovie" > <img className = "item" onMouseOver = {()=> setHover(movie.title)} onMouseOut= {()=> resetHover} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="pics" width="200" height="250" /> */}

          {/* <div className = "overlapping" onMouseOut= {()=> resetHover} style ={isHover === movie.title ? {"display":"block", "opacity":"0.4"}: {"display":"none"}}> 
             <p>{movie.overview}</p>
              <button  type="button"  onClick={() => handleClickPassed(movie)}>
              <img src = {buttonIcon} alt="added button" />
              </button>
          </div> */}
          <div className = "overlapping"> 
          <div className="nontext-info">
          <button type="button" onClick={() => handleClickPassed(movie)}>
            {/* <img src= {buttonIcon} alt = "added button"/>  */}
            <img src= {urlAdd} alt = "added button"/> 
          </button> 
          {movie.original_language}
           {movie.vote_average}
           </div>
           <p class="movie-info"> {movie.overview}</p>
          </div> 
          </a>
          {/* </div> */}
      </>
    )
    )
    
    
    return (
      <>
      <h2>{section}</h2>
        <div className="container">{listElements}</div>
      </>
    ) 
  }
  

  
  
  
  
  
  
  
      
      