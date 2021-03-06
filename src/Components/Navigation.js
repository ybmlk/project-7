import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ context }) => {
  // Fetchs from Flickr API when buttons are clicked
  // And updates the current route
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <NavLink to={`/gallery/northern-lights`} onClick={() => context.action.search('northern-lights')}>
            N. Lights
          </NavLink>
        </li>
        <li>
          <NavLink to={`/gallery/slow-loris`} onClick={() => context.action.search('slow-loris')}>
            Slow loris
          </NavLink>
        </li>
        <li>
          <NavLink to={`/gallery/savanna`} onClick={() => context.action.search('panda')}>
            Panda
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
