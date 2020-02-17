import React, { useState } from "react";
import "./style.css";

function Block(props) {
  // const [count, setCount] = useState(0);
  let state = props.state;
  let stateColorMap = {
    UNVISITED: "white",
    VISITED: "green",
    START: "yellow",
    END: "red",
    WALL: "black"
  };
  return (
    <td
      id={props.id}
      style={{ background: stateColorMap[state] }}
      className="block"
    ></td>
  );
}

// class Block extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return;
//   }
// }

export default Block;
