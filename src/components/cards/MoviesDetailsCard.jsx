import React from 'react';

export default function MovieDetailsCard({ review }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title"><strong>Name:</strong> {review.name}</h5>
          <p className="card-text"><strong>Vote:</strong> {review.vote}</p>
          <p className="card-text"><strong>Text:</strong> {review.text}</p>
        </div>
      </div>
    </div>
  );
}