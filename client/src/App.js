import React, { useEffect, useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import List from './Components/List';
import MovieInfo from './Components/MovieInfo';

//const MyContext = React.createContext(defaultValue);

const App = () => {
  const [movies, setMovies] = useState([]); // returns a state and a function that updates the state and can be referred to later
  const [myList, setMyList] = useState([]);
  const [movieTile, setMovieTile] = useState("");

  useEffect(() => {
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((response) => setMovies(response)); //sets entire response to movies array
  }, []); // [] means that it is going to run only once

  const handleClick = (movie) => {
    const findEl = myList.find((myListMovie) => myListMovie.id === movie.id); //myListMovie can be anything it's just element in myListMovie
    // if selected movie in myListMovie remove
    if (findEl) {
      //if selected movie not in myListMovie add
      const filtered = myList.filter(
        (myListMovie) => myListMovie.id !== movie.id
      );
      setMyList([...filtered]);
    } else {
      setMyList([...myList, movie]);
    }
  };

  const showMovieTile = (movie) => {
    setMovieTile(movie)
  }

  const showHome = () => {
    setMovieTile("")
  }


  return (
    <>
    <div className="header">
        <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/201013/9a560530b9f8b713cd79e58e3c4c73e9.png" alt="netflix-font" border="0"/></a>
        </div>
    {!movieTile &&
      <div>
        <div className='movie-container'>
          <div className='inner-container'> 
            <List
              value={movies}
              handleClickPassed={handleClick}
              onDetailClick = {showMovieTile}
              heading='Discover'
            />
          </div>
        </div>
        {/* <div className='movie-container'>
          <div className='inner-container'> */}
        <List
          value={myList}
          handleClickPassed={handleClick}
          onDetailClick = {showMovieTile}
          heading='My List'
        />
        {movies.length ? "" : 'no movies yet'}
        {/* </div>
        </div> */}
      </div>
}
        {/* {movieTile && 
         <div>
        <MovieInfo
        value = {movieTile} 
        onBackClick = {showHome}
        />
      </div>
      
} */}

{/* <Switch>
    <Route path={`/${movies.title}`} component = {MovieInfo}/>
  </Switch> */}
    </>
  );
};

export default App;


// {movieTile && 
 
//    <div>
//   <MovieInfo
//   value = {movieTile} 
//   onBackClick = {showHome}
//   />
// </div>
 