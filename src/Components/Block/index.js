import React from "react";
import "./style.css";

class Block extends React.Component {
  render() {
    return <td className="block" id={this.props.blockID}></td>;
  }
}

export default Block;
