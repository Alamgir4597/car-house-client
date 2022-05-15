import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid bg-dark mt-5 mb-3'>
            <div className="row">
                <div class="col">
                    <p className='font-italic  text-light p-3 '>© 2022 Car House</p> 
                </div>
                <div className="col">
                    <h6 className='text-light'>Contact Us</h6>
                    <p className='font-italic  text-light '>
                        Email:<br/>
                        Facebook <br/>
                        twitter
                        
                     
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;