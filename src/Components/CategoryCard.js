import React from 'react';

const CategoryCard = ({ name, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
