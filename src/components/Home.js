import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="text">
        <Link to="/projects">
          <h1 className="title">Volunteering Programs Around the World!</h1>
        </Link>
        <p>We believe in a future where any traveler, anywhere in the world is empowered to make a meaningful difference in the community they are visiting, and we take pride in making this happen.
        We’re focused on providing affordable volunteer travel experiences that are responsible, safe and high quality. Our programs heighten global awareness and cultural understanding through the skills and expertise taken by volunteers to their host communities, and through the experiences and lessons that volunteers take back to their own countries and cultures.</p>
      </div>
    </div>
  );
}

export default Home;
