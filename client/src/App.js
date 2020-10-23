import React, { useEffect, useState } from 'react';

import List from './Components/List';

//const MyContext = React.createContext(defaultValue);

const App = () => {
  const [movies, setMovies] = useState([]); // returns a state and a function that updates the state and can be referred to later
  const [myList, setMyList] = useState([]);

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

  return (
    <>
      <div>
        <h1>Hello</h1>
        <div className='movie-container'>
          <div className='inner-container'>
            <List
              value={movies}
              handleClickPassed={handleClick}
              heading='Discover'
            />
          </div>
        </div>
        <List
          value={myList}
          handleClickPassed={handleClick}
          heading='My List'
        />
        {movies.length ? movies[0].title : 'no movies yet'}
      </div>
    </>
  );
};

export default App;
