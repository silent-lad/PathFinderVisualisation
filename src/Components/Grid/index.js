import React, { useState } from "react";
import Block from "../Block";
import "./style.css";

function Grid(props) {
  const changeState = e => {
    try {
      let index = JSON.parse(e.target.id);
      console.log(index);
    } catch (err) {
      console.log(e.target);
    }

    // let gridStatesNew = this.state.gridStates;
    // gridStatesNew[(i, j)] = "VISITED";
    // this.setState(state => ({
    //   gridStates: gridStatesNew
    // }));
  };
  let gridStatesInit = [];
  let gridInit = [];
  const createGrid = () => {
    for (let i = 0; i < props.height; i++) {
      let row = [];
      let stateRow = [];
      for (let j = 0; j < props.width; j++) {
        stateRow.push("UNVISITED");
        gridStatesInit.push(stateRow);
        row.push(
          <Block
            onclick={() => changeState(i, j)}
            state={gridStatesInit[i][j]}
            key={`${i}-${j}`}
            id={`[${i},${j}]`}
          ></Block>
        );
      }
      gridInit.push(<tr key={`${i}`}>{row}</tr>);
    }
    return gridInit;
  };

  const [grid, setGrid] = useState(gridInit);
  const [gridStates, setGridStates] = useState(gridStatesInit);

  return (
    <table className="grid">
      <tbody onMouseOverCapture={e => changeState(e)}>{createGrid()}</tbody>
    </table>
  );
}

export default Grid;
