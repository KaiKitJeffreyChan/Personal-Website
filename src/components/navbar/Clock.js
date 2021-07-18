import React, { useState, useEffect } from "react";

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div style={{ fontSize: "13px", color: "white" }}>
      <strong>{clockState}</strong>
    </div>
  );
};

export default Clock;
