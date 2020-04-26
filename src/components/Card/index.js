import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, about, title} = property;
    return (
        <div id={`card-${index}`} className="card">
                  <h6 id="cardTitle">{title}</h6>
                  <a id="gitRepo" href="https://github.com/BrennanPredmore/project_1">Github Repository</a>
            <img src={picture} alt="GIF"/>
            <div className="details">
                    <h6>{about}</h6>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}



export default Card;