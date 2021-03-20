import React from "react";
import { Link, useHistory } from "react-router-dom";
import './RideChose.css';

const RideChose = (props) => {
  const {rideName,key} = props;
  console.log(rideName)

const history = useHistory();
const handleDestination = () => {
  // history.push('/destination');
  history.push("/destinationride/"+rideName)
  
}

  return (

    <div className="  col-md-3 col-lg-3 col-sm-12 py-5 rounded margin">
      <div className="card py-5 "  style={{width:"250px" ,height:"300px"}}>
        <div className="card-body">
        <h3 onClick={handleDestination}  className="text-center p-3"><Link to={"/"+rideName}>{rideName}</Link> </h3>
        <figure className="p-5">
        <img src={props.rideImg} style={{width:'130px'}} alt=""/>
        </figure>
        
        </div>
      </div>
    </div>
 
  );
};

export default RideChose;
