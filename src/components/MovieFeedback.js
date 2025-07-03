// src/components/FeedbackForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieFeedback = () => {
  const [form, setForm] = useState({
    name: "",
    movie: "",
    rating: "",
    comments: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...existingReviews, form];

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    alert("Thank you for your feedback!");
    navigate("/reviews");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name:</label>
      <input name="name" onChange={handleChange} value={form.name} required />

      <label>Movie:</label>
      <select name="movie" onChange={handleChange} value={form.movie} required>
        <option value="">Select</option>
        <option value="RRR">RRR</option>
        <option value="GBU">GBU</option>
        <option value="GOAT">GOAT</option>
      </select>

      <label>Rating (1-5):</label>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        onChange={handleChange}
        value={form.rating}
        required
      />

      <label>Comments:</label>
      <textarea name="comments" onChange={handleChange} value={form.comments} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieFeedback;