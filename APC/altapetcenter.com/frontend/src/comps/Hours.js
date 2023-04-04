import React from "react";
import './Hours.css'

function Hours() {
    return(
        <>
            <h2 className='hours'>Hours</h2>
            <div className="contact-div-cont">
                <div className="contact-div">
                    <p className='deets'>Tues-Fri: 8:00 am to 6:00 pm</p>
                    <p className='deets'>Sat: 8:30 am to 3:30 pm</p>
                    <p className='deets'>659 E 15th Street, suite P</p>
                    <p className='deets'>Upland, Ca. 91786</p>
                    <p className='deets'>(Corner of Campus and 15th)</p>
                </div>
            </div>
        </>
    );
}

export default Hours;