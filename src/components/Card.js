import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <img className='card-image' src={props.img} alt='Side view image'></img>
            <div className="card-info">
                <span className='address'>{props.address}</span>
                <div className='rating'>
                    <img src='images/star.png' className='star'></img>
                    <span className='rank'>{props.rating}</span>
                </div>

            </div>
            <p className='place-distance'>{props.distance} Kilometer Away</p>
            <p className='date'>{props.date}</p>
            <p className='night-price'><span className='price'>${props.price}</span> night</p>
        </div>
    )
}

export default Card