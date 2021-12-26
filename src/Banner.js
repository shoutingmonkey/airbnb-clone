import { React, useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const history = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton">
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of gateway to uncover teh hidden gems near you.</h5>
        <Button
          onClick={() => history('/search')}
          variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;