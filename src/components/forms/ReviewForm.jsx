import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReviewForm() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL + "/movies/";

  const initalData = {
    name: "",
    vote: "",
    text: "",
  };

  const [formData, setFormData] = useState(initalData);
  const [error, SetError] = useState("");

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}${id}`, formData)
      .then((response) => {
        const { name, vote, text } = response.data;
        const backEndResponse = response.data;
        console.log(backEndResponse);
        name && vote && text
          ? alert("recensione inserita con successo")
          : alert(error);
      })
      .catch((err) => {
        SetError(err);
      });
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-5">
      <div className="container my-2">
        <h2 className="text-center">Insert your review</h2>
        <form className="row d-flex" onSubmit={handleSubmit}>
          <div className="col-4">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Insert your name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
            ></input>
          </div>
          <div className="col-4">
            <label htmlFor="vote" className="form-label">
              vote
            </label>
            <input
              className="form-control"
              type="number"
              min={1}
              max={5}
              name="vote"
              value={formData.vote}
              placeholder="insert a vote from 1 to 5"
              onChange={handleOnChange}
            ></input>
          </div>
          <div className="col-4">
            <label htmlFor="review" className="form-label">
              review
            </label>
            <input
              className="form-control"
              type="text"
              minLength={10}
              placeholder="write here your riview"
              name="text"
              value={formData.text}
              onChange={handleOnChange}
            ></input>
          </div>
          <button className="btn btn-primary btn-xl">
            insert a new review
          </button>
        </form>
      </div>
    </div>
  );
}
