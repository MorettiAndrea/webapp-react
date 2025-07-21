import { Link } from "react-router-dom";

export default function ReviewCard({ Review }) {
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Nome: </strong>
            {Review.name}
          </li>
          <li className="list-group-item">
            <strong>Vote: </strong>
            {Review.vote}
          </li>
          <li className="list-group-item">
            <strong>Text: </strong>
            {Review.text}
          </li>
        </ul>
      </div>
    </>
  );
}
