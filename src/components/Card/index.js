import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, about, title, githubLink, projectLink} = property;
    const badgeItems = about ? about.split(" ").map((badge) =>{
    return <div class="badge badge-primary">{badge}</div>
    })  : null
    return (
        <div id={`card-${index}`} className="card">
                  <h6 id="cardTitle">{title}</h6>
                  <a id="gitRepo" href={githubLink}>Github Repository</a>
            
           <a href={projectLink}>
              <img src={picture} alt="GIF"/> 
           </a>
            <div className="details">
                    <h6 style={{textAlign: "center"}}>{badgeItems}</h6>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;