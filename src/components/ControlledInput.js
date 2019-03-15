import React from "react";

export default class ControlledInput extends React.Component {
  render() {
    return (
      <form>
        <input type="password" onChange={e => console.log(e.target.value)} />
      </form>
    );
  }
}
