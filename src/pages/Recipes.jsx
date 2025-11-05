import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

export const Recipes = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "lightyellow" }}>
      <div style={{ textAlign: "center" }}>Receptek...</div>
      <FaHome
        onClick={() => navigate("/")}
        style={{ position: "absolute", top: "5px", left: "5px" }}
      />
      <button
        onClick={() => navigate("/addnew")}
        style={{ position: "absolute", right: "5px", bottom: "5px" }}
      >
        Új recept hozzáadása
      </button>
    </div>
  );
};
