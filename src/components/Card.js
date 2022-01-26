import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'



function Card(props) {
    //console.log(props);
    return (
        <div className="card text-center">
            <div className="overflow">
                 <img className="card-img-top" src={props.imageURL} alt="" ></img>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text-secondary">{props.text} </p>
                 <a href={props.url} className="btn btn-outline-secondary" target="_blank">
                     GENERAL
                 </a>
            </div>
        </div>
    )
}

Card.propTypes ={
    title:PropTypes.string.isRequired,
    url:PropTypes.string,
    text: PropTypes.string,
    imageURL:PropTypes.string.isRequired
}

export default Card
