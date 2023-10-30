export const Cell = ({
  activatedCells,
  setActivatedCells,
  currIndex,
  config
}) => {
  const handleCellClick = () => {
    let newCells = [...activatedCells, currIndex];
    setActivatedCells(newCells);
  };
  const checkIsActivated = () => {
    if (activatedCells.includes(currIndex)) {
      return "activated";
    }
    return "";
  };

  return (
    <div
      className={`cell ${checkIsActivated()}`}
      onClick={() => handleCellClick()}
    ></div>
  );
};
