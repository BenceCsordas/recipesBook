import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomeContainer">
      
      <div>
        
      <button onClick={() => navigate("/recipes")}>
        Főzz, posztolj, inspirálj !
      </button>
      </div>
      
    </div>
  );
};
