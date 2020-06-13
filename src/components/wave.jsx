import React, { useState } from "react";

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋🏻${waves} ${waves === 1 ? "wave" : "waves"}`;
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
