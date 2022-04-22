import React from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className='watch'>
      <Link to="/" >
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  )
}
