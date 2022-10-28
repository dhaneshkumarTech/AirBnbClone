import React from 'react'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src='/images/image-1.jpg' alt='Side view image'></img>
            <div className="card-info">
                <span>Address, Country</span>
                <img src='images/star.png' className='star'></img>
                <span>4.5</span>
            </div>
            <p className='place-distance'>1780 Kilometer Away</p>
            <p className='date'>Nov, 1 - 5</p>
            <p className='night-price'><span className='price'>$120</span> night</p>
        </div>
    )
}

export default Card