import React from "react";
import Block from "../Block";
import "./style.css";

class Grid extends React.Component {
  render() {
    let row = [];
    let grid = [];
    for (let i = 0; i < this.props.height; i++) {
      for (let j = 0; j < this.props.width; j++) {
        row.push(<Block key={`${i}-${j}`} className={`${i}-${j}`}></Block>);
      }
      grid.push(<tr>{row}</tr>);
      row = [];
    }
    return (
      <table className="grid">
        <tbody>{grid}</tbody>
      </table>
    );
  }
}

export default Grid;
