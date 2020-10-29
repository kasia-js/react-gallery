import React, { useEffect, useState } from 'react';
import List from './../Components/List';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((response) => setMovies(response));
  }, []);

  const handleClick = (movie) => {
    const findEl = myList.find((myListMovie) => myListMovie.id === movie.id);
    if (findEl) {
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
      </div>
    </>
  );
};

export default HomePage;
