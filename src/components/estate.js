import React from "react";

const Estate = (props) => {
  return (
    <div class="container">
      <div class="card-deck">
        <div class="card">
          <img className="card-img-top" src={props.photo} alt="" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
