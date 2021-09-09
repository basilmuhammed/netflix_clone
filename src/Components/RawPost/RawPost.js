import React, { useEffect, useState } from "react";
import "./RawPost.css";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants/constants";

const RawPost = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_network=213`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? "smallposter" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RawPost;
