import React, { useState } from "react";
import Block from "../Block";
import "./style.css";

function Grid(props) {
  let [grid, setGrid] = useState([]);

  for (let i = 0; i < this.props.height; i++) {
    let row = [];
    for (let j = 0; j < this.props.width; j++) {
      row.push({});
    }
    setGrid([...grid, row]);
    // grid.push(row);
  }

  for (let i = 0; i < this.props.height; i++) {
    for (let j = 0; j < this.props.width; j++) {
      row.push(
        <Block
          state={grid[i][j]}
          key={`${i}-${j}`}
          className={`${i}-${j}`}
        ></Block>
      );
    }
    table.push(<tr>{row}</tr>);
    row = [];
  }
  return (
    <table className="grid">
      <tbody>{table}</tbody>
    </table>
  );
}

export default Grid;
