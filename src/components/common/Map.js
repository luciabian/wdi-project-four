import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';

const ProjectMap = ({ projects }) => {
  return (
    <div id='map'>
      <Map center={[7.369722, 12.354722]} zoom={2}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {projects && projects.map(project =>
          <Marker key={project._id} position={[project.lat, project.lng]}>
            <Popup>
              <Link to={`/projects/${project._id}`}>
                {project.name}
              </Link>
            </Popup>
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default ProjectMap;
