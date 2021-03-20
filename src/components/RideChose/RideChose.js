import React from "react";
import { useHistory } from "react-router-dom";
import './RideChose.css';

const RideChose = (props) => {
const history = useHistory();
const handleDestination = () => {
  history.push('/destination');
}

  return (

    <div className="  col-md-3 col-lg-3 col-sm-12 py-5 rounded margin">
      <div className="card py-5 "  style={{width:"250px" ,height:"300px"}}>
        <div className="card-body">
        <h3 onClick={handleDestination}  className="text-center p-3"> {props.rideName}</h3>
        <figure className="p-5">
        <img src={props.rideImg} style={{width:'130px'}} alt=""/>
        </figure>
        
        </div>
      </div>
    </div>
 
  );
};

export default RideChose;
