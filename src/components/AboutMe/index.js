import React from "react";
import "./style.css";

function index() {
  return (
    <div className="my-container">
      <h3>About me</h3>

      <img
        id="profile_image"
        src="./assets/brennan.jpg"
        alt="me"
        height="200px"
        width="201px"
      />

      {/* about me */}
      <p>
        Senior full stack developer and a graduate of the University of Texas at
        Austin’s Full Stack Software Development Bootcamp with 7 years of
        experience in my field. Recognized as disciplined and for creating
        user-centric content. Proven ability to work collaboratively alongside
        peers to achieve company objectives. High performer looking to leverage
        complex problem solving skills and the ability to work effectively with
        diverse teams to drive organizational growth.
      </p>
    </div>
  );
}

export default index;
