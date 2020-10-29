import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import '../../App.css';
import MovieInfo from '../MovieInfo';

const urlAdd = require('../../assets/add.png');
const urlTick = require('../../assets/tick.png');
const details = require('../../assets/detail.png');

export default ({ value, heading, handleClickPassed, onDetailClick }) => {
  const buttonIcon = heading === 'My List' ? urlTick : urlAdd;
  let section;
  if (heading === 'My List' && value.length > 0) {
    section = 'My List';
  } else if (heading === 'Discover') {
    section = 'Discover';
  }

  const listElements = value.map((movie) => (
    <>
      <div className='parent'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt='pics'
          width='250'
          height='250'
        />
        <div className='overlapping'>
          <p>{movie.title}</p>
          <button type='button' onClick={() => handleClickPassed(movie)}>
            <img src={buttonIcon} alt='added button' width='25' height='25' />
          </button>
          {/* <button className = "details" type="button" onClick={() => onDetailClick(movie)}>
              <img src = {details} alt="detail button" width="30" height="30"/>
              </button> */}

          {/* <Link to="/details/?info=movie.title">Details</Link> */}
          {/* <Link 
          to= {{
            pathname:"/details",
            search:"?info=movie.title"
          }}>Details</Link> */}

          {/* <Link to={`/details/${movie.id}`}>Details</Link> */}

          <Link to={{ pathname:"/details", state:{id: {movie}}}}>Details</Link>
          
        </div>
      </div>
    </>
  ));

  return (
    <>
     <Switch>
            <Route path='/details' component={MovieInfo} />
          </Switch>
      <h2>{section}</h2>
      <div className='show'>{listElements} </div>
    </>
  );
};

// <button className = "details" type="button" onClick={() => onDetailClick(movie)}>
