import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, about, title, githubLink, projectLink} = property;
    const badgeItems = about ? about.split(" ").map((badge) =>{
    return <div key={badge} className="badge badge-primary">{badge}</div>
    })  : null
    return (
        <div id={`card-${index}`} className="card">
                  <h6 id="cardTitle">{title}</h6>
                { index <= 5 ? <a id="gitRepo" href={githubLink}>Github Repository</a>  : null }
                {index < 8 ? <a href={projectLink}> <img src={picture} alt="GIF"/></a> : 
           <a href="./assets/resume2020.pdf" download="resume"><img src={picture} alt="resume"/></a> }
            

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