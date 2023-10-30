import { useEffect, useState } from "react";
import { Cell } from "./Cell";
import "./styles.css";

export default function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  const [activatedCells, setActivatedCells] = useState([]);
  const [deactivating, setDeactivating] = useState(false);

  console.log(activatedCells);
  const deactivateCells = () => {
    setDeactivating(true);
    const timer = setInterval(() => {
      setActivatedCells((order) => {
        let newOrder = [...order];
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  useEffect(() => {
    if (activatedCells.length === config.flat().filter(Boolean).length) {
      console.log("deactivating");
      deactivateCells();
    }
  }, [activatedCells]);

  return (
    <div className="App">
      <h2>Grid Challenge</h2>
      <div className="container">
        {config.flat().map((item, index) => {
          return item ? (
            <Cell
              currIndex={index}
              activatedCells={activatedCells}
              setActivatedCells={setActivatedCells}
              config={config}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}
