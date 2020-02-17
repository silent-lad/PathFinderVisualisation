import React from "react";
import Block from "../Block";
import "./style.css";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    let grid = [];
    let gridStates = [];

    for (let i = 0; i < this.props.height; i++) {
      let row = [];
      let stateRow = [];
      for (let j = 0; j < this.props.width; j++) {
        stateRow.push("UNVISITED");
        gridStates.push(stateRow);
        row.push(
          <Block
            state={gridStates[i][j]}
            key={`${i}-${j}`}
            id={`${i}-${j}`}
          ></Block>
        );
      }
      grid.push(<tr>{row}</tr>);
    }

    this.state = {
      grid,
      gridStates
    };
  }
  render() {
    return (
      <table className="grid">
        <tbody>{this.state.grid}</tbody>
      </table>
    );
  }
}

export default Grid;
