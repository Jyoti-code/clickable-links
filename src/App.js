import React, { useState } from "react";
import LeftChild from "./components/LeftChild";
import RightChild from "./components/RightChild";
import { Data } from "./components/Data";

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div style={{ display: "flex" }}>
      <LeftChild data={Data} onItemClick={handleItemClick} />
      <RightChild selectedId={selectedId} />
    </div>
  );
};

export default App;
