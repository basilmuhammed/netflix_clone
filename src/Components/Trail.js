import React from "react";
import axios from "axios";
import { useState } from "react";

const Trail = () => {
  const [state, setState] = useState([]);
  return (
    <div>
      <h1>hi iam working you can continue</h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
              console.log(res);
              setState(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        click me
      </button>
      {state.map((obj, index) => {
        return (
          <div>
            <p>{index}</p>
            <p>{obj.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Trail;
