import react from 'react';

function Navbar() {
    return (
        <nav>
            <img src='images/airbnb-logo.png' alt='AirBnb logo'></img>
            <div className='nav-list'>
                    <span className='nav-span'> Anywhere </span>
                    <span>|</span>
                    <span className='nav-span'> Any week </span>
                    <span>|</span>
                    <span className='nav-span'> Add Guest </span>
                    <img className='search' src='images/search-logo.png' alt='search logo'></img>
                
            </div>
            <div className='user-profile'>
                <a href='#'>
                    <span className='host'>Become a Host</span>
                </a>
                <a href='#'>
                    <span>
                        <img className='globe' src='/images/globe.png'></img>
                    </span>
                </a>
                
                <a href='#'>
                    <span className='profile-span'>
                    <img className='profile-img' src='images/hamburger.png'></img>
                    <img className='profile-img' src='images/profilr-logo.png'></img>
                </span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;