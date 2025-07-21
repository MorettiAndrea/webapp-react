import { Link } from "react-router-dom";

export default function ReviewCard({ Review }) {
  return (
    <>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Nome: </strong>
            {Review.name}
          </li>
          <li class="list-group-item">
            <strong>Nome: </strong>
            {Review.text}
          </li>
          <li class="list-group-item">
            <strong>Nome: </strong>
            {Review.vote}
          </li>
        </ul>
      </div>
    </>
  );
}
