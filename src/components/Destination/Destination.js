import React from 'react'
import './Destination.css'

const Destination = () => {
    return (
        <>
        <div className="container DestinationOne"></div>
        <div className="container Destination">
        
        <div className="row">
            <div className="col-md-5">
                <div className="text-center bg-secondary p-3 rounded">
                   <div id="from">
                   <label htmlFor="">Pick From</label><br/>
                    <input type="text" className="p-3"/>
                    <br/>
                    <br/>
                    <label htmlFor="">Pick To</label><br/>
                    <input type="text" className="p-3"/>
                    <br/>
                    <br/>
                    <button className="pickupbtn">Search</button>
                   </div>
                </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 map rounded">
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14600.750423973173!2d90.35144868880063!3d23.81192695294409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755c124b21679e3%3A0x48d7e114b00a18cb!2sPallabi%2C%20Dhaka!3m2!1d23.8283088!2d90.36071369999999!4m5!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!3m2!1d23.795603699999997!2d90.3536548!5e0!3m2!1sen!2sbd!4v1616181268433!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>            
            </div>
        </div>
           
            
        </div>
        </>
    )
}

export default Destination
