import React, { useEffect, useState } from "react";
import bike from "../../img/bike1.png";
import "./Home.css";
import apiRide from "../Data/RideData";
import RideChose from "../RideChose/RideChose";
const Home = () => {
  const [rides, setRide] = useState([]);

  useEffect(() => {
    setRide(apiRide);
    console.log(apiRide);
  }, []);

  return (
    <div className="body">
      <div className="container py-5">
        <div className="row py-5">
          {rides.map((r) => (
            <RideChose
              rideName={r.name}
              rideImg={r.image}
              key={r.id}
            ></RideChose>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
