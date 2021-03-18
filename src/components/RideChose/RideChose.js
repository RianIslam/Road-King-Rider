import React from "react";

const RideChose = (props) => {
  return (
    <div className="col-md-3 col-lg-3 col-sm-12 p-3 rounded">
      <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
        <figure className="p-5">
        <img src={props.rideImg} style={{width:'150px'}} alt=""/>
        </figure>
        <h3 className="text-center"> {props.rideName}</h3>
        </div>
      </div>
    </div>
  );
};

export default RideChose;
