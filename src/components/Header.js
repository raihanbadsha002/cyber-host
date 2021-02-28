import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div>
            <div className="header-warper">
                <div className="main-info d-flex flex-column position-absolute justify-content-center align-items-center">
                    <h1>Websites Design & Web Development</h1>
                    <Typed
                       className='typed-text'
                       strings={[
                                'Websites Design',
                                'Web Development',
                                'Google Ads']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    <a href="#" className="btn-contact">Contact me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
