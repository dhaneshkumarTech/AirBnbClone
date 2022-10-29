import React from 'react'

function Card(props) {
    return (
        <a href='#' className="card">
            <img className='card-image' src={`images/${props.img}`} alt='error rending image'></img>
            <div className="card-info">
                <span>{props.address}</span>
                <div className='rating'>
                    <img src='images/star.png' className='star'></img>
                    <span className='rank'>{props.rating}</span>
                </div>
            </div>
            <p className='place-distance'>{props.distance} Kilometer Away</p>
            <p className='date'>{props.date}</p>
            <p className='night-price'><span className='price'>${props.price}</span> night</p>
        </a>
    )
}

export default Card