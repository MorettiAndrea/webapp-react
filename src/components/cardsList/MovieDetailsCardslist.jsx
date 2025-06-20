import { useParams } from "react-router-dom"
import MovieDetailsCard from "../cards/MoviesDetailsCard"
import { useEffect, useState } from "react"
import axios from "axios"

const backEndUrl = import.meta.env.VITE_BACKEND_URL
const backEndPort = import.meta.env.VITE_BACKEND_PORT + "/movies/"

export default function MovieDetailsCardList() {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)

  const fetchReview = () => {
    axios.get(`${backEndUrl}${backEndPort}${id}`)
      .then((res) => {
        setReviews(res.data.reviews)
      })
      .catch((err) => {
        setError(err)
      })
  }

  useEffect(() => {
    fetchReview()
  }, [])

  
  if (reviews.length === 0) {
    return <div className="text-center">{error}</div>
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-1 mt-1">
          {reviews.map((review) => (
            <MovieDetailsCard
              key={review.id}
              name={review.name}
              vote={review.vote}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </>
  )
}