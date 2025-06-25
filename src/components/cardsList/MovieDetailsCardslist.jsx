import { useParams } from "react-router-dom";
import MovieDetailsCard from "../cards/MoviesDetailsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const backEndUrl = import.meta.env.VITE_BACKEND_URL + "/movies/";

export default function MovieDetailsCardList() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReview = () => {
    axios
      .get(`${backEndUrl}${id}`)
      .then((res) => {
        setReviews(res.data.reviews);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchReview();
  }, []);

  if (!reviews.length) {
    return <h1 className="text-center">Coudn't find requested movie</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-1 mt-1">
          <h2 className="text-center">Movie review</h2>
          {reviews.map((review) => (
            <MovieDetailsCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </>
  );
}
