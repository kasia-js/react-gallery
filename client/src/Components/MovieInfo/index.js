import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../App.css';
import './style.css';

export default () => {
  const location = useLocation();
  const { movie } = location.state.id;

  return (
    <>
      <div className='outer'>
        <div className='left'>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt='pics'
            width='300'
            height='300'
          />
        </div>
        <div className='right'>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <Link className='back' to='/'>
            <Button variant='contained' color='primary'>
              BACK
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
