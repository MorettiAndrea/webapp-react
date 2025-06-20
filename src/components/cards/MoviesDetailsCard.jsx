import React from 'react';

export default function MovieDetailsCard({ id, name, vote, text }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title"><strong>Name:</strong> {name}</h5>
          <p className="card-text"><strong>Vote:</strong> {vote}</p>
          <p className="card-text"><strong>Text:</strong> {text}</p>
        </div>
      </div>
    </div>
  );
}