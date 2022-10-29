import React from 'react'

function Filter(props) {
    return (
        <section className="filter">
            <a className='filter-url' href='#'>
                <img className="filter-logo" src={`/images/${props.filterLogo}`}></img>
                <p className='filter-name' >{props.filterName}</p>
            </a>
        </section>
    )
}
export default Filter