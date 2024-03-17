import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


export const Planet = ({ name, id }) => {
  const { actions } = useContext(Context);

  return (
    <div className="card-group">
      <div className="card bg-dark" style={{ width: '18rem' }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          className="card-img-top"
          alt="..."
          onError={(e) => {
            e.target.src =
              'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="detail-fav-btn">
            <Link to={`/planet-details/${id}`}>
              <button className="btn btn-outline-primary">
                Planet Details!
              </button>
            </Link>
            <button
              className="btn btn-outline-danger
          "
              onClick={() => {
                actions.addFavorites({
                  uid: id,
                  name,
                  type: 'planet',
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
