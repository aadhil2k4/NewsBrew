import React from "react";
import loading from "../spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
