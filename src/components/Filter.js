import React from 'react'

function Filter(props) {
    return (
        <section className="filter">
            <a className='filter-url' href='#'>
                <img className="filter-logo" src={props.logo}></img>
                <p className='filter-name' >{props.name}</p>
            </a>
        </section>
    )
}

export default Filter